import { createFileRoute } from "@tanstack/react-router";

type ChatMessage = { role: "user" | "assistant"; content: string };

const SYSTEM_PROMPT = `You are the assistant for Zebnex Tech Solutions, a Kenyan technology and branding partner based in Utawala, Nairobi.

Services: web development, networking, database management, data analysis, cloud services, cybersecurity, software development and branding. Past work includes a TUK ticketing system and a tenant management system.
Contact: +254 115 339 092, info@zebnextechsolutions.co.ke. Free consultations are available and projects usually start within 1-2 weeks of an agreed proposal. Remote delivery countrywide, on-site visits for networking work.

Be warm, concise and practical. Keep answers under 120 words, avoid jargon, never invent prices or promises, and when someone is ready to act, invite them to book a free consultation on the Contact page or message on WhatsApp.`;

function isMessage(value: unknown): value is ChatMessage {
  if (typeof value !== "object" || value === null) return false;
  const m = value as Record<string, unknown>;
  return (m["role"] === "user" || m["role"] === "assistant") && typeof m["content"] === "string";
}

function extractReply(data: unknown): string {
  if (typeof data !== "object" || data === null) return "";
  const d = data as Record<string, unknown>;
  const direct = d["output_text"];
  if (typeof direct === "string" && direct.trim()) return direct;

  const chunks: string[] = [];
  const output = Array.isArray(d["output"]) ? (d["output"] as unknown[]) : [];
  for (const item of output) {
    const content = (item as Record<string, unknown>)?.["content"];
    if (!Array.isArray(content)) continue;
    for (const part of content) {
      const text = (part as Record<string, unknown>)?.["text"];
      if (typeof text === "string") chunks.push(text);
    }
  }
  return chunks.join("\n").trim();
}

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = (await request.json().catch(() => null)) as { messages?: unknown } | null;
        const incoming = Array.isArray(body?.messages) ? body!.messages.filter(isMessage) : [];
        if (!incoming.length) {
          return new Response(JSON.stringify({ error: "No messages provided" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        const key = process.env["LOVABLE_API_KEY"];
        if (!key) {
          return new Response(JSON.stringify({ error: "Assistant is not configured" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }

        const upstream = await fetch("https://ai.gateway.lovable.dev/v1/responses", {
          method: "POST",
          headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
          body: JSON.stringify({
            model: "openai/gpt-6-astra",
            reasoning: { effort: "low" },
            max_output_tokens: 900,
            input: [
              { role: "system", content: SYSTEM_PROMPT },
              ...incoming.map((m) => ({
                role: m.role,
                content: m.content.slice(0, 2000),
              })),
            ],
          }),
        });

        if (!upstream.ok) {
          const detail = await upstream.text().catch(() => "");
          console.error(`AI gateway error [${upstream.status}]: ${detail}`);
          return new Response(JSON.stringify({ error: detail || "Assistant request failed" }), {
            status: upstream.status,
            headers: { "Content-Type": "application/json" },
          });
        }

        const reply = extractReply(await upstream.json());
        return new Response(JSON.stringify({ reply }), {
          headers: { "Content-Type": "application/json" },
        });
      },
    },
  },
});
