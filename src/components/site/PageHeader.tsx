export function PageHeader({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep">
      <img
        src={image}
        alt=""
        aria-hidden
        className="absolute inset-0 size-full object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/40" />
      <div className="container-page relative py-24 sm:py-32">
        {eyebrow && <p className="eyebrow text-silver/70">{eyebrow}</p>}
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold text-primary-foreground sm:text-5xl">
          {title}
        </h1>
        <div className="mt-6 h-px w-16 bg-silver/60" />
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/75">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
