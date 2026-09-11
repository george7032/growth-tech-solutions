import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import aboutTeam from "@/assets/about-team.jpg";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitEnquiry } from "@/lib/contact.functions";
import { CONTACT } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Zebnex Tech Solutions | Free Consultation" },
      {
        name: "description",
        content:
          "Talk to Zebnex Tech Solutions about your website, network, cloud, security or brand. Call +254 115 339 092 or send a message.",
      },
      { property: "og:title", content: "Let's Build Something Together" },
      {
        property: "og:description",
        content: "Reach out about a specific project or just explore what's possible.",
      },
    ],
  }),
  component: ContactPage,
});

const SERVICES = [
  "Web Development",
  "Networking",
  "Database Management",
  "Data Analysis",
  "Cloud Services",
  "Cybersecurity",
  "Software Development",
  "Branding",
  "Other",
] as const;

const FAQS = [
  {
    q: "How quickly can you start a project?",
    a: "Typically within 1–2 weeks of an agreed proposal, depending on project scope and our current workload.",
  },
  {
    q: "Do you work with businesses outside Nairobi?",
    a: "Yes — many of our services (web, software, cloud, branding) can be delivered fully remotely, and we can arrange on-site visits for networking and infrastructure work when needed.",
  },
  {
    q: "What does the free consultation actually involve?",
    a: "A short call or meeting to understand your needs and give you an honest sense of what's possible, what it would cost, and whether we're the right fit — no obligation.",
  },
];

function ContactPage() {
  const send = useServerFn(submitEnquiry);
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setSending(true);
    try {
      await send({
        data: {
          name: String(form.get("name") ?? ""),
          email: String(form.get("email") ?? ""),
          phone: String(form.get("phone") ?? ""),
          service: String(form.get("service") ?? "Other") as (typeof SERVICES)[number],
          message: String(form.get("message") ?? ""),
        },
      });
      setDone(true);
    } catch {
      toast.error("We couldn't send that. Please call us on +254 115 339 092 instead.");
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's Build Something Together"
        subtitle="Whether you have a specific project in mind or just want to explore what's possible, we'd love to hear from you. Reach out and we'll get back to you promptly."
        image={aboutTeam}
      />

      <div className="container-page grid gap-14 py-20 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <h2 className="text-2xl font-semibold">Contact details</h2>
          <ul className="mt-8 space-y-7">
            <li className="flex gap-4">
              <Phone className="mt-1 size-5 shrink-0 stroke-[1.5] text-navy" />
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <a href={CONTACT.phoneHref} className="font-display text-base font-medium">
                  {CONTACT.phone}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <Mail className="mt-1 size-5 shrink-0 stroke-[1.5] text-navy" />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="font-display text-base font-medium break-all"
                >
                  {CONTACT.email}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <MapPin className="mt-1 size-5 shrink-0 stroke-[1.5] text-navy" />
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-display text-base font-medium">{CONTACT.location}</p>
                <p className="mt-1 text-sm text-muted-foreground">{CONTACT.hours}</p>
              </div>
            </li>
          </ul>

          <div className="mt-10">
            <p className="eyebrow">Social</p>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
              {CONTACT.socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-navy"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 overflow-hidden rounded-lg border border-border">
            <iframe
              title="Zebnex Tech Solutions location"
              src="https://www.google.com/maps?q=Pioneer%20Trading%20Centre%20Utawala%20Nairobi&output=embed"
              loading="lazy"
              className="h-64 w-full"
            />
          </div>

          <div className="mt-10 rounded-lg border border-border bg-secondary/40 p-6">
            <h3 className="font-display text-base font-semibold">Prefer to Talk Directly?</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Call us at {CONTACT.phone}, or reach out on any of our social channels — we're active
              and responsive across Instagram, Facebook, LinkedIn, X and TikTok if you'd rather
              message us there.
            </p>
          </div>
        </div>

        <div>
          <div className="rounded-lg border border-border bg-card p-8 shadow-card">
            <h2 className="text-2xl font-semibold">Send Us a Message</h2>
            {done ? (
              <div className="mt-8 flex gap-3 rounded-md border border-border bg-secondary/40 p-6">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-navy" />
                <p className="text-sm leading-relaxed">
                  Thanks for reaching out! A member of our team will get back to you within 1
                  business day.
                </p>
              </div>
            ) : (
              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="name">Full name *</Label>
                  <Input id="name" name="name" required maxLength={100} autoComplete="name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={255}
                    autoComplete="email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone number</Label>
                  <Input id="phone" name="phone" type="tel" maxLength={40} autoComplete="tel" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Service of interest</Label>
                  <select
                    id="service"
                    name="service"
                    defaultValue="Web Development"
                    className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus:border-navy"
                  >
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" name="message" required rows={6} maxLength={2000} />
                </div>
                <Button type="submit" disabled={sending} className="w-full sm:w-auto">
                  {sending ? "Sending…" : "Send Message"}
                </Button>
              </form>
            )}
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold">Frequently asked</h2>
            <dl className="mt-8">
              {FAQS.map((faq, i) => (
                <div key={faq.q} className={i > 0 ? "border-t border-border pt-6" : ""}>
                  <dt className="font-display text-base font-semibold">{faq.q}</dt>
                  <dd className="mt-2 pb-6 text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
