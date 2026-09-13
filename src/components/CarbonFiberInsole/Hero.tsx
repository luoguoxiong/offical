import Image from "next/image";
import Link from "next/link";

const metrics = [
  { value: "1.2", unit: "mm", label: "Carbon plate thickness" },
  { value: "32", unit: "g", label: "Weight per pair · EU 42" },
  { value: "92", unit: "%", label: "Energy return rate" },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0B0E14] pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Carbon weave texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.045) 0 2px, transparent 2px 9px), repeating-linear-gradient(-45deg, rgba(255,255,255,0.045) 0 2px, transparent 2px 9px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-32 h-[420px] w-[420px] rounded-full bg-primary/25 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-[380px] w-[380px] rounded-full bg-blue-500/20 blur-[130px]"
      />

      <div className="container relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-white/80 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              Model PS-CF100
            </span>

            <h1 className="mt-6 text-4xl leading-[1.1] font-extrabold text-white sm:text-5xl lg:text-6xl">
              Carbon Core
              <span className="block bg-gradient-to-r from-blue-400 to-primary bg-clip-text text-transparent">
                Performance Insole
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              A genuine 3K carbon fiber plate bonded into an anatomical comfort
              chassis. It stiffens the arch, controls midfoot torsion and
              returns energy on every push-off — without adding bulk to the
              shoe.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="rounded-md bg-primary px-8 py-4 text-base font-semibold text-white shadow-submit transition duration-300 hover:bg-primary/90"
              >
                Request a Free Sample
              </Link>
              <Link
                href="#specifications"
                className="rounded-md border border-white/25 px-8 py-4 text-base font-semibold text-white transition duration-300 hover:border-white/60 hover:bg-white/5"
              >
                View Specifications
              </Link>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm"
                >
                  <dt className="flex items-baseline gap-1">
                    <span className="text-2xl font-extrabold text-white sm:text-3xl">
                      {metric.value}
                    </span>
                    <span className="text-sm font-semibold text-blue-400">
                      {metric.unit}
                    </span>
                  </dt>
                  <dd className="mt-1 text-xs leading-snug text-white/60">
                    {metric.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.55)]">
              <Image
                src="/images/products/carbon-insole-hero.jpg"
                alt="PROSOLE carbon fiber performance insole"
                width={1200}
                height={800}
                priority
                className="h-auto w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 left-6 hidden rounded-xl border border-white/10 bg-[#151A24]/95 px-5 py-4 shadow-xl backdrop-blur sm:block">
              <p className="text-xs font-semibold tracking-[0.18em] text-blue-400 uppercase">
                3K Twill Weave
              </p>
              <p className="mt-1 text-sm text-white/70">
                100% real carbon fiber plate — not printed film
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
