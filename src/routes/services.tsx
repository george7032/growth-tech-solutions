import { createFileRoute } from "@tanstack/react-router";

import slideAnalytics from "@/assets/slide-analytics.jpg";
import slideBranding from "@/assets/slide-branding.jpg";
import slideNetwork from "@/assets/slide-network.jpg";
import slideSecurity from "@/assets/slide-security.jpg";
import slideWeb from "@/assets/slide-web.jpg";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHeader } from "@/components/site/PageHeader";
import { SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Web, Cloud, Security & Branding — Zebnex" },
      {
        name: "description",
        content:
          "Web development, networking, databases, data analysis, cloud, cybersecurity, custom software and branding — tailored to your business.",
      },
      { property: "og:title", content: "Solutions Built Around Your Business" },
      {
        property: "og:description",
        content:
          "From the infrastructure that keeps you running to the brand that makes you memorable.",
      },
    ],
  }),
  component: ServicesPage,
});

const VISUALS: Record<string, string> = {
  "web-development": slideWeb,
  networking: slideNetwork,
  "data-analysis": slideAnalytics,
  cybersecurity: slideSecurity,
  branding: slideBranding,
};

const STEPS = [
  {
    title: "Consultation",
    body: "We start by understanding your business, your challenges, and what success looks like for you.",
  },
  {
    title: "Proposal",
    body: "We put together a clear scope and quote, so you know exactly what you're getting and what it costs.",
  },
  {
    title: "Execution",
    body: "Our team gets to work, with regular check-ins so you're never left wondering about progress.",
  },
  {
    title: "Delivery & Support",
    body: "We hand over what we've built with proper documentation and training, and remain available for ongoing support.",
  },
];

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Solutions Built Around Your Business"
        subtitle="From the infrastructure that keeps you running to the brand that makes you memorable, our services are designed to work together — or stand entirely on their own."
        image={slideBranding}
      />

      <div className="container-page py-20">
        {SERVICES.map((service, index) => {
          const visual = VISUALS[service.slug];
          return (
            <section
              key={service.slug}
              id={service.slug}
              className={`scroll-mt-24 grid gap-10 py-14 lg:grid-cols-2 lg:items-center lg:gap-16 ${
                index > 0 ? "border-t border-border" : ""
              }`}
            >
              <div className={visual && index % 2 === 1 ? "lg:order-2" : ""}>
                <p className="eyebrow">0{index + 1}</p>
                <h2 className="mt-4 text-3xl font-semibold">{service.title}</h2>
                <p className="mt-3 font-display text-base text-navy">{service.tagline}</p>
                <div className="hairline mt-6" />
                {service.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="mt-5 leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
                <div className="mt-7 rounded-lg border border-border bg-secondary/40 p-5">
                  <p className="eyebrow">What's included</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.included}
                  </p>
                </div>
              </div>
              {visual ? (
                <div className="overflow-hidden rounded-lg border border-border shadow-card">
                  <img
                    src={visual}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : null}
            </section>
          );
        })}
      </div>

      <section className="border-y border-border bg-secondary/30 py-20">
        <div className="container-page">
          <p className="eyebrow">How we work</p>
          <h2 className="mt-4 text-3xl font-semibold">A Simple, Transparent Process</h2>
          <ol className="mt-12 grid gap-8 md:grid-cols-4">
            {STEPS.map((step, i) => (
              <li key={step.title}>
                <span className="flex size-11 items-center justify-center rounded-full border border-navy font-display text-sm font-semibold text-navy">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-display text-base font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        title="Not Sure Which Service You Need?"
        body="That's exactly what the free consultation is for — tell us what you're trying to achieve, and we'll help you figure out the right starting point."
        buttonLabel="Get a Free Consultation"
      />
    </>
  );
}
