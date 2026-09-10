import { createFileRoute } from "@tanstack/react-router";

import aboutTeam from "@/assets/about-team.jpg";
import ceoPortrait from "@/assets/ceo-ian-kariuki.jpg";
import heroImage from "@/assets/hero-office.jpg";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Zebnex Tech Solutions | Built on Trust" },
      {
        name: "description",
        content:
          "Zebnex Tech Solutions combines technical depth in networks, cloud and software with branding expertise, serving businesses across Kenya.",
      },
      { property: "og:title", content: "Built on Trust. Driven by Technology." },
      {
        property: "og:description",
        content:
          "Our story, leadership, mission and values — one partner for a business's technical backbone and its identity.",
      },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  {
    title: "Integrity",
    body: "We give honest assessments, even when it means recommending a smaller or simpler solution than a client initially asked for. Trust is built by doing right by clients, not by upselling them.",
  },
  {
    title: "Professionalism",
    body: "From the first consultation to post-launch support, we hold ourselves to a standard of clear communication, realistic timelines, and dependable follow-through.",
  },
  {
    title: "Excellence",
    body: "We don't settle for \"good enough.\" Whether it's a line of code, a network configuration, or a logo design, the work we put our name on is held to a high bar.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Built on Trust. Driven by Technology."
        subtitle="Zebnex Tech Solutions exists to help businesses navigate a digital world with confidence — combining technical expertise with a genuine understanding of what makes brands succeed."
        image={heroImage}
      />

      <section className="container-page grid gap-12 py-20 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <p className="eyebrow">Our story</p>
          <h2 className="mt-4 text-3xl font-semibold">Closing the gap between tech and brand</h2>
          <div className="hairline mt-6" />
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Zebnex Tech Solutions was founded on a simple observation: businesses were being forced
            to choose between good technology and good branding, working with separate vendors who
            rarely understood the full picture of what a company needed. We built Zebnex to close
            that gap — a single partner capable of handling the technical backbone of a business
            (networks, databases, cloud infrastructure, cybersecurity) while also shaping how that
            business presents itself to the world (websites, software, brand identity).
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Today, we work with organizations across education, hospitality, security, and
            professional services — helping them build systems that are secure and reliable, and
            identities that are memorable and professional. Every engagement starts with the same
            question: what does this business actually need to move forward, not just what's trendy
            or convenient for us to sell.
          </p>
        </div>
        <div className="overflow-hidden rounded-lg border border-border shadow-card">
          <img
            src={aboutTeam}
            alt="The Zebnex team collaborating"
            width={1600}
            height={900}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="border-y border-border bg-secondary/30 py-20">
        <div className="container-page max-w-3xl">
          <p className="eyebrow">Company profile</p>
          <h2 className="mt-4 text-3xl font-semibold">Tailored, never templated</h2>
          <div className="hairline mt-6" />
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Zebnex Tech Solutions provides tailored technology solutions for businesses of all sizes.
            We combine deep technical capability — web development, networking, database management,
            data analysis, cloud services, cybersecurity, and software development — with strategic
            branding expertise, so that the systems a business runs on and the image it presents to
            customers are built with the same level of care.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We don't believe in one-size-fits-all packages. Every business we work with has a
            different starting point, different constraints, and different goals — and our job is to
            design solutions around that reality, not around a template.
          </p>
        </div>
      </section>

      <section className="container-page py-20">
        <p className="eyebrow">Leadership</p>
        <div className="mt-8 grid gap-12 lg:grid-cols-[360px_1fr] lg:items-start">
          <div className="overflow-hidden rounded-lg border border-border shadow-card">
            <img
              src={ceoPortrait}
              alt="Ian Kariuki, CEO and Founder of Zebnex Tech Solutions"
              width={1024}
              height={1280}
              loading="lazy"
              className="w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold">Ian Kariuki</h2>
            <p className="mt-2 text-sm tracking-wide text-muted-foreground uppercase">
              CEO &amp; Founder
            </p>
            <blockquote className="mt-8 border-l-2 border-navy pl-6">
              <p className="font-display text-lg leading-relaxed">
                “The best solution is the one a client can actually run and grow with. If something
                simpler serves them better, that's what we recommend.”
              </p>
            </blockquote>
            <p className="mt-8 leading-relaxed text-muted-foreground">
              Ian founded Zebnex Tech Solutions with a vision of making enterprise-grade technology
              and branding accessible to businesses that might otherwise be priced out of it or
              underserved by generalist agencies. Under his leadership, Zebnex has grown into a
              trusted partner for organizations looking for technical depth without losing the
              personal, consultative approach of a smaller firm.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30 py-20">
        <div className="container-page max-w-3xl">
          <p className="eyebrow">Our mission</p>
          <h2 className="mt-4 text-3xl font-semibold">
            Delivering innovation, reliability, and customer-focused solutions
          </h2>
          <div className="hairline mt-6" />
          <p className="mt-6 leading-relaxed text-muted-foreground">
            We measure success not by the complexity of what we build, but by how well it serves the
            people using it. That means staying current with new technology and design trends, while
            never losing sight of reliability — a system that impresses on day one but fails on day
            sixty isn't a win for anyone. Every project is approached with the client's long-term
            interest in mind, not just the immediate deliverable.
          </p>
        </div>
      </section>

      <section className="container-page py-20">
        <p className="eyebrow">Our values</p>
        <div className="mt-10">
          {VALUES.map((value, i) => (
            <div
              key={value.title}
              className={`grid gap-4 py-8 md:grid-cols-[220px_1fr] ${i > 0 ? "border-t border-border" : ""}`}
            >
              <h3 className="font-display text-xl font-semibold">{value.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{value.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border py-20">
        <div className="container-page max-w-3xl">
          <p className="eyebrow">Why we do this work</p>
          <p className="mt-6 font-display text-xl leading-relaxed">
            Technology and branding both come down to the same thing: helping a business be
            understood — by the systems it depends on, and by the customers it serves. We got into
            this work because we enjoy solving that problem for different kinds of businesses, again
            and again, in ways that actually hold up over time.
          </p>
        </div>
      </section>

      <CtaBand
        title="Want to Know More About How We Work?"
        body="We're happy to walk you through our process, share examples of past work, or just have a conversation about where your business is headed."
        buttonLabel="Get in Touch"
      />
    </>
  );
}
