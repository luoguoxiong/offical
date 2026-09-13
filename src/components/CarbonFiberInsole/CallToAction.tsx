const contacts = [
  {
    label: "Email",
    value: "wslyfs2010@gmail.com",
    href: "mailto:wslyfs2010@gmail.com",
  },
  {
    label: "WhatsApp",
    value: "+86 15017139740",
    href: "https://wa.me/8615017139740",
  },
];

const CallToAction = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0B0E14] py-20 md:py-24 lg:py-28"
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
            Get Started
          </span>
          <h2 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-[42px]">
            Put the Carbon Core into your next collection
          </h2>
          <p className="text-base leading-relaxed text-white/70 md:text-lg">
            Tell us your shoe type, target rigidity and volume. We will send a
            free sample pair and a tailored quotation within 24 hours.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:wslyfs2010@gmail.com?subject=Carbon%20Core%20Insole%20Enquiry"
              className="rounded-md bg-primary px-8 py-4 text-base font-semibold text-white shadow-submit transition duration-300 hover:bg-primary/90"
            >
              Request a Free Sample
            </a>
            <a
              href="https://wa.me/8615017139740"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-white/25 px-8 py-4 text-base font-semibold text-white transition duration-300 hover:border-white/60 hover:bg-white/5"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 border-t border-white/10 pt-8 sm:flex-row sm:gap-10">
            {contacts.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-base text-white/70 transition hover:text-white"
              >
                <span className="mr-2 font-semibold text-blue-400">
                  {item.label}:
                </span>
                {item.value}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
