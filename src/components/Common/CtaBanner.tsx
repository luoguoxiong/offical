const CtaBanner = ({
  eyebrow,
  title,
  description,
  primary,
  secondary,
  dark = true,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  dark?: boolean;
}) => {
  return (
    <section
      className={`relative overflow-hidden py-20 md:py-24 lg:py-28 ${
        dark ? "bg-[#0B0E14]" : "bg-gray-light/60 dark:bg-white/[0.03]"
      }`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0 2px, transparent 2px 9px), repeating-linear-gradient(-45deg, rgba(255,255,255,0.04) 0 2px, transparent 2px 9px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[130px]"
      />

      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block text-sm font-bold tracking-[0.2em] text-blue-400 uppercase">
            {eyebrow}
          </span>
          <h2 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-[42px]">
            {title}
          </h2>
          <p className="text-base leading-relaxed text-white/70 md:text-lg">
            {description}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={primary.href}
              className="rounded-md bg-primary px-8 py-4 text-base font-semibold text-white shadow-submit transition duration-300 hover:bg-primary/90"
            >
              {primary.label}
            </a>
            {secondary && (
              <a
                href={secondary.href}
                className="rounded-md border border-white/25 px-8 py-4 text-base font-semibold text-white transition duration-300 hover:border-white/60 hover:bg-white/5"
              >
                {secondary.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
