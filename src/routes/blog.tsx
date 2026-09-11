import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import slideAnalytics from "@/assets/slide-analytics.jpg";
import slideBranding from "@/assets/slide-branding.jpg";
import slideNetwork from "@/assets/slide-network.jpg";
import slideSecurity from "@/assets/slide-security.jpg";
import slideWeb from "@/assets/slide-web.jpg";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CATEGORIES, POSTS } from "@/lib/site-data";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights & Ideas | Zebnex Tech Solutions Blog" },
      {
        name: "description",
        content:
          "Practical thinking on technology, security and branding — written for business owners and decision-makers, not just engineers.",
      },
      { property: "og:title", content: "Insights & Ideas" },
      {
        property: "og:description",
        content: "Tech trends, cybersecurity tips, branding strategy and cloud adoption guidance.",
      },
    ],
  }),
  component: BlogPage,
});

export const POST_IMAGES = {
  security: slideSecurity,
  network: slideNetwork,
  branding: slideBranding,
  web: slideWeb,
  analytics: slideAnalytics,
} as const;

const FILTERS = ["All", ...CATEGORIES] as const;

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function BlogPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [email, setEmail] = useState("");

  const visible = filter === "All" ? POSTS : POSTS.filter((p) => p.category === filter);
  const [featured, ...rest] = visible;

  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Insights & Ideas"
        subtitle="Practical thinking on technology, security, and branding — written for business owners and decision-makers, not just engineers."
        image={slideWeb}
      />

      <div className="container-page py-16">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                filter === item
                  ? "border-navy bg-navy text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-navy hover:text-navy"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {featured && (
          <Link
            to="/blog/$slug"
            params={{ slug: featured.slug }}
            className="group mt-12 grid overflow-hidden rounded-lg border border-border bg-card shadow-card transition-all hover:shadow-lift lg:grid-cols-2"
          >
            <img
              src={POST_IMAGES[featured.image]}
              alt=""
              loading="lazy"
              className="h-64 w-full object-cover lg:h-full"
            />
            <div className="p-8 lg:p-10">
              <p className="eyebrow">{featured.category}</p>
              <h2 className="mt-4 font-display text-2xl leading-snug font-semibold sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{featured.excerpt}</p>
              <p className="mt-6 text-xs text-muted-foreground">
                {formatDate(featured.date)} · {featured.readTime}
              </p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-navy">
                Read More
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        )}

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <img
                src={POST_IMAGES[post.image]}
                alt=""
                loading="lazy"
                className="h-44 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <p className="eyebrow">{post.category}</p>
                <h3 className="mt-3 font-display text-base leading-snug font-semibold">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
                <p className="mt-4 text-xs text-muted-foreground">
                  {formatDate(post.date)} · {post.readTime}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 rounded-lg border border-border bg-secondary/40 p-8 md:flex md:items-center md:justify-between md:gap-10">
          <div>
            <h2 className="font-display text-xl font-semibold">Enjoying our insights?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Get new articles delivered straight to your inbox.
            </p>
          </div>
          <form
            className="mt-5 flex gap-2 md:mt-0 md:w-96"
            onSubmit={(e) => {
              e.preventDefault();
              if (!email.trim()) return;
              setEmail("");
              toast.success("You're on the list — thanks for subscribing.");
            }}
          >
            <Input
              type="email"
              required
              aria-label="Email address"
              placeholder="you@company.co.ke"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </div>

      <CtaBand
        title="Have a Topic You'd Like Us to Cover?"
        body="We're always looking for the questions our clients are actually asking — reach out and let us know what you'd find useful."
        buttonLabel="Contact Us"
      />
    </>
  );
}
