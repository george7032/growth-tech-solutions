import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CtaBand({
  title,
  body,
  buttonLabel,
  to = "/contact",
}: {
  title: string;
  body: string;
  buttonLabel: string;
  to?: string;
}) {
  return (
    <section className="bg-navy text-primary-foreground">
      <div className="container-page flex flex-col items-start gap-8 py-20 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base text-primary-foreground/75">{body}</p>
        </div>
        <Link
          to={to}
          className="group inline-flex shrink-0 items-center gap-2 rounded-md bg-primary-foreground px-6 py-3.5 text-sm font-medium text-navy transition-all hover:bg-silver-muted"
        >
          {buttonLabel}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
