import { createFileRoute } from "@tanstack/react-router";

type ChatMessage = { role: "user" | "assistant"; content: string };

const SYSTEM_PROMPT = `You are the assistant for Zebnex Tech Solutions, a Kenyan technology and branding partner based in Utawala, Nairobi.

Services: web development, networking, database management, data analysis, cloud services, cybersecurity, software development and branding. Past work includes a TUK ticketing system and a tenant management system.
Contact: +254 115 339 092, info@zebnextechsolutions.co.ke. Free consultations are available and projects usually start within 1-2 weeks of an agreed proposal. Remote delivery countrywide, with on-site visits for networking work.

Be warm, concise and practical. Keep answers under 120 words, avoid jargon, never invent prices or promises, and when someone is ready to act, invite them to book a free consultation on the Contact page or message on WhatsApp.`;

function isMessage(value: unknown): value is ChatMessage {
  if (typeof value !== "object" || value === null) return false;
  const m = value as Record<string, unknown>;
  return (m["role"] === "user" || m["role"] === "assistant") && typeof m["content"] === "string";
}

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = (await request.json().catch(() => null)) as { messages?: unknown } | null;
        const incoming = Array.isArray(body?.messages) ? body.messages.filter(isMessage) : [];
        if (!incoming.length) {
          return new Response("No messages provided", { status: 400 });
        }

        const key = process.env["LOVABLE_API_KEY"];
        if (!key) {
          return new Response("Assistant is not configured", { status: 500 });
        }

        const upstream = await fetch("https://ai.gateway.lovable.dev/v1/responses", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Lovable-API-Key": key,
            "X-Lovable-AIG-SDK": "fetch",
          },
          body: JSON.stringify({
            model: "openai/gpt-6-astra",
            stream: true,
            store: false,
            reasoning: { effort: "low" },
            max_output_tokens: 1200,
            input: [
              { role: "system", content: SYSTEM_PROMPT },
              ...incoming.slice(-16).map((m) => ({
                role: m.role,
                content: m.content.slice(0, 2000),
              })),
            ],
          }),
        });

        if (!upstream.ok || !upstream.body) {
          const detail = await upstream.text().catch(() => "");
          console.error(`AI gateway error [${upstream.status}]: ${detail}`);
          return new Response("The assistant is unavailable right now.", {
            status: upstream.status === 429 ? 429 : 502,
          });
        }

        const reader = upstream.body.pipeThrough(new TextDecoderStream()).getReader();
        const encoder = new TextEncoder();
        let buffer = "";

        const stream = new ReadableStream<Uint8Array>({
          async pull(controller) {
            const { value, done } = await reader.read();
            if (done) {
              controller.close();
              return;
            }
            buffer += value;
            const events = buffer.split("\n\n");
            buffer = events.pop() ?? "";

            for (const event of events) {
              for (const line of event.split("\n")) {
                if (!line.startsWith("data:")) continue;
                const payload = line.slice(5).trim();
                if (!payload || payload === "[DONE]") continue;
                try {
                  const parsed = JSON.parse(payload) as Record<string, unknown>;
                  if (parsed["type"] === "response.output_text.delta") {
                    const delta = parsed["delta"];
                    if (typeof delta === "string" && delta) {
                      controller.enqueue(encoder.encode(delta));
                    }
                  }
                } catch {
                  /* ignore keep-alives and partial frames */
                }
              }
            }
          },
          cancel() {
            void reader.cancel();
          },
        });

        return new Response(stream, {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "no-cache",
          },
        });
      },
    },
  },
});
