type Slide = { src: string; label: string; caption: string };

export function ImageMarquee({ slides }: { slides: Slide[] }) {
  const loop = [...slides, ...slides];

  return (
    <section aria-label="Our work" className="overflow-hidden border-y border-border bg-secondary/30 py-14">
      <div className="container-page mb-8 flex items-end justify-between gap-6">
        <div>
          <p className="eyebrow">In the field</p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Work we're proud of</h2>
        </div>
      </div>

      <div className="group relative">
        <div className="flex w-max animate-marquee gap-6 group-hover:[animation-play-state:paused]">
          {loop.map((slide, i) => (
            <figure
              key={`${slide.label}-${i}`}
              className="w-[300px] shrink-0 overflow-hidden rounded-lg border border-border bg-card shadow-card sm:w-[420px]"
            >
              <img
                src={slide.src}
                alt={slide.label}
                loading="lazy"
                className="h-[200px] w-full object-cover sm:h-[260px]"
              />
              <figcaption className="p-5">
                <h3 className="font-display text-sm font-semibold">{slide.label}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{slide.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
