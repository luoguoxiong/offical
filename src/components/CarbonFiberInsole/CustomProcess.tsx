import Link from "next/link";
import SectionHeading from "@/components/Common/SectionHeading";

const steps = [
  {
    title: "Design Brief",
    duration: "Day 1–2",
    description:
      "Send us the shoe last, target rigidity, thickness limits and retail price band. We advise on layup, materials and tooling.",
  },
  {
    title: "Prototyping",
    duration: "Day 3–10",
    description:
      "CNC-cut carbon plies are laid, autoclave-cured and bonded to the comfort chassis. First functional samples ship inside ten days.",
  },
  {
    title: "Validation",
    duration: "Day 10–15",
    description:
      "Three-point bending, torsion, compression fatigue and perspiration resistance testing, with signed reports for your files.",
  },
  {
    title: "Mass Production",
    duration: "Day 15–35",
    description:
      "Eight production lines, 5,000 m² of floor space and 100% rigidity sampling on every batch before it leaves the factory.",
  },
];

const capabilities = [
  "Low MOQ from 500 pairs — startup friendly",
  "Custom last, arch height and rigidity grade",
  "Logo printing, woven labels and retail packaging",
  "OEM / ODM with full confidentiality",
  "Export documentation for 30+ countries",
];

const CustomProcess = () => {
  return (
    <section
      id="customization"
      className="bg-white py-20 md:py-24 lg:py-28 dark:bg-black"
    >
      <div className="container">
        <SectionHeading
          eyebrow="OEM / ODM"
          title="From brief to bulk in about five weeks"
          description="We are a supply-chain partner, not just a factory. The Carbon Core is produced on the same eight lines and 5,000 m² floor that serve our global brand clients."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <ol className="relative space-y-8 border-l border-dashed border-gray-300 pl-8 dark:border-white/15">
            {steps.map((step, index) => (
              <li key={step.title} className="relative">
                <span className="absolute top-0 -left-[47px] flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-bold text-black dark:text-white">
                    {step.title}
                  </h3>
                  <span className="rounded-full bg-blue-600/10 px-3 py-0.5 text-xs font-semibold text-blue-600 dark:bg-blue-400/10 dark:text-blue-400">
                    {step.duration}
                  </span>
                </div>
                <p className="mt-2 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>

          <div className="self-start rounded-xl border border-gray-200 bg-gray-light/60 p-8 dark:border-white/10 dark:bg-white/5">
            <h3 className="mb-6 text-xl font-bold text-black dark:text-white">
              What you can customise
            </h3>
            <ul className="space-y-4">
              {capabilities.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base text-body-color dark:text-body-color-dark"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3 w-3"
                    >
                      <path d="m5 13 4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="#contact"
              className="mt-8 inline-block rounded-md bg-primary px-7 py-3.5 text-base font-semibold text-white shadow-submit transition duration-300 hover:bg-primary/90"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomProcess;
