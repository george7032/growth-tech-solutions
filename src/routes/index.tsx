import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Cloud,
  Code2,
  Database,
  Globe,
  Layers,
  Network,
  Palette,
  ShieldCheck,
  ShieldHalf,
  MapPin,
  TrendingUp,
} from "lucide-react";

import heroImage from "@/assets/hero-office.jpg";
import projectTenant from "@/assets/project-tenant.jpg";
import projectTicketing from "@/assets/project-ticketing.jpg";
import slideAnalytics from "@/assets/slide-analytics.jpg";
import slideBranding from "@/assets/slide-branding.jpg";
import slideNetwork from "@/assets/slide-network.jpg";
import slideSecurity from "@/assets/slide-security.jpg";
import slideWeb from "@/assets/slide-web.jpg";
import { CtaBand } from "@/components/site/CtaBand";
import { ImageMarquee } from "@/components/site/ImageMarquee";
import { Button } from "@/components/ui/button";
import { CLIENTS, POSTS, PROJECTS, SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zebnex Tech Solutions | Technology & Branding for Kenyan Business" },
      {
        name: "description",
        content:
          "Secure networks, cloud, custom software, websites and brand identity — one technology partner for growing businesses in Kenya. Book a free consultation.",
      },
      { property: "og:title", content: "Technology and Identity, Built for Growth" },
      {
        property: "og:description",
        content:
          "Zebnex Tech Solutions helps businesses run securely, connect confidently and stand out in the market.",
      },
    ],
  }),
  component: HomePage,
});

const ICONS = {
  "web-development": Globe,
  networking: Network,
  "database-management": Database,
  "data-analysis": BarChart3,
  "cloud-services": Cloud,
  cybersecurity: ShieldHalf,
  "software-development": Code2,
  branding: Palette,
} as const;

const SLIDES = [
  { src: slideNetwork, label: "Network & infrastructure", caption: "Structured cabling, wireless design and monitoring." },
  { src: projectTicketing, label: "TUK Ticketing System", caption: "Mobile and kiosk ticketing for a transport operator." },
  { src: projectTenant, label: "Tenant Management System", caption: "Units, leases, rent invoicing and arrears in one place." },
  { src: slideBranding, label: "Brand identity", caption: "Logos, palettes and guidelines that stay consistent." },
  { src: slideWeb, label: "Websites & web apps", caption: "Fast, responsive sites that are easy to maintain." },
];

const REASONS = [
  {
    icon: Layers,
    title: "One partner, many disciplines",
    body: "No juggling multiple vendors for web, network, cloud and brand work.",
  },
  {
    icon: ShieldCheck,
    title: "Security-first thinking",
    body: "Every system we build considers protection from day one, not as an afterthought.",
  },
  {
    icon: MapPin,
    title: "Local understanding, global standards",
    body: "We build for the realities of doing business in Kenya, to the standards used internationally.",
  },
  {
    icon: TrendingUp,
    title: "Solutions that scale with you",
    body: "What we build today is designed to grow with your business, not to be replaced in a year.",
  },
];

const POST_IMAGES = {
  security: slideSecurity,
  network: slideNetwork,
  branding: slideBranding,
  web: slideWeb,
  analytics: slideAnalytics,
} as const;

function HomePage() {
  const latest = POSTS.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy-deep">
        <img
          src={heroImage}
          alt="Team collaborating in a modern office"
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/30" />
        <div className="container-page relative py-28 sm:py-40">
          <div className="max-w-2xl animate-rise">
            <p className="eyebrow text-silver/70">Zebnex Tech Solutions</p>
            <h1 className="mt-6 text-4xl leading-[1.08] font-semibold text-primary-foreground sm:text-5xl lg:text-6xl">
              Technology and Identity, Built for Growth
            </h1>
            <div className="mt-8 h-px w-24 bg-silver/70" />
            <p className="mt-8 text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
              Zebnex Tech Solutions helps businesses run securely, connect confidently, and stand out
              in the market — through smart, reliable technology and branding that leaves a lasting
              impression. Whether you're building your first website, securing your network, or
              reimagining your brand identity, we bring the technical depth and creative eye to get
              it right.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-md bg-primary-foreground px-7 py-4 text-sm font-medium text-navy transition-colors hover:bg-silver-muted"
              >
                Book a Free Consultation
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-7 py-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Explore our services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction strip */}
      <section className="container-page grid gap-12 py-20 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <p className="eyebrow">End to end</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Your Technology Partner, End to End
          </h2>
          <div className="hairline mt-6" />
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Most businesses don't need a dozen different vendors — they need one partner who
            understands the whole picture. From the servers that keep your business running, to the
            software that solves your unique problems, to the brand that makes customers remember
            you, Zebnex brings it all under one roof.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We work with startups taking their first digital steps and established companies scaling
            into new markets, tailoring every solution to where you are and where you're headed.
          </p>
        </div>
        <div className="overflow-hidden rounded-lg border border-border shadow-card">
          <img
            src={slideNetwork}
            alt="Server room supporting business operations"
            width={1600}
            height={1000}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Sliding images */}
      <ImageMarquee slides={SLIDES} />

      {/* Services */}
      <section className="container-page py-20">
        <p className="eyebrow">What we do</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold sm:text-4xl">
          A full spectrum of technology and branding services
        </h2>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          Designed to work together or stand alone — whatever your business needs right now.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.slug as keyof typeof ICONS];
            return (
              <Link
                key={service.slug}
                to="/services"
                hash={service.slug}
                className="group rounded-lg border border-border bg-secondary/30 p-6 transition-all hover:-translate-y-1 hover:bg-card hover:shadow-lift"
              >
                <Icon className="size-6 stroke-[1.4] text-navy transition-colors group-hover:text-navy-deep" />
                <h3 className="mt-5 font-display text-base font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.tagline}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-navy">
                  Learn more
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Selected projects */}
      <section className="border-y border-border bg-secondary/30 py-20">
        <div className="container-page">
          <p className="eyebrow">Selected work</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Systems we've built</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {PROJECTS.map((project, i) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-lg border border-border bg-card shadow-card"
              >
                <img
                  src={i === 0 ? projectTicketing : projectTenant}
                  alt={project.title}
                  width={1400}
                  height={1000}
                  loading="lazy"
                  className="h-56 w-full object-cover"
                />
                <div className="p-7">
                  <h3 className="font-display text-lg font-semibold">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose Zebnex */}
      <section className="container-page py-20">
        <p className="eyebrow">Why businesses choose Zebnex</p>
        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Reliability You Can Build On</h2>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason) => (
            <div key={reason.title}>
              <reason.icon className="size-6 stroke-[1.4] text-navy" />
              <h3 className="mt-5 font-display text-base font-semibold">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reason.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Clients */}
      <section className="border-y border-border py-16">
        <div className="container-page text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl">Trusted by Businesses Across Kenya</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
            We're proud to have earned the trust of organizations across different industries — from
            education and hospitality to security and professional services.
          </p>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {CLIENTS.map((client) => (
              <li
                key={client}
                className="font-display text-sm font-medium tracking-wide text-muted-foreground/70 transition-colors hover:text-navy"
              >
                {client}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Insights preview */}
      <section className="container-page py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">From our blog</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Insights &amp; ideas</h2>
          </div>
          <Link
            to="/blog"
            className="group inline-flex items-center gap-1 text-sm font-medium text-navy"
          >
            View All Insights
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {latest.map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="group overflow-hidden rounded-lg border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <img
                src={POST_IMAGES[post.image]}
                alt=""
                loading="lazy"
                className="h-44 w-full object-cover"
              />
              <div className="p-6">
                <p className="eyebrow">{post.category}</p>
                <h3 className="mt-3 font-display text-base leading-snug font-semibold">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand
        title="Ready to Build Something That Lasts?"
        body="Whether you need a secure network, a standout website, or a brand people remember — let's talk about what's next for your business."
        buttonLabel="Get a Free Consultation"
      />
    </>
  );
}
