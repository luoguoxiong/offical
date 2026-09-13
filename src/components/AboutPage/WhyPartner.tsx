import SectionHeading from "@/components/Common/SectionHeading";

const reasons = [
  {
    title: "Complete supply chain integration",
    description:
      "Formulation, tooling, prototyping, production and packing all happen inside one facility, so a change in one stage does not turn into a three-week delay.",
  },
  {
    title: "Startup-friendly low MOQs",
    description:
      "Programmes start from 500 pairs, and sizes can be mixed inside the run — you can test a market before committing to a full season.",
  },
  {
    title: "Highly flexible customization",
    description:
      "Material, rigidity grade, thickness, colour, logo treatment and retail packaging are all specified by you, not chosen from a fixed catalogue.",
  },
  {
    title: "Product development support",
    description:
      "Our team advises on positioning, cost structure and target retail price so the sample you approve is a product you can actually sell.",
  },
  {
    title: "Overseas market expertise",
    description:
      "We ship to 30+ countries and prepare REACH, RoHS and CPSIA documentation as part of the project, not as an afterthought.",
  },
  {
    title: "Stable capacity, consistent quality",
    description:
      "Eight production lines, 100+ trained operators and 100% rigidity or appearance sampling on every batch before it leaves the factory.",
  },
];

const WhyPartner = () => {
  return (
    <section className="bg-gray-light/60 py-20 md:py-24 lg:py-28 dark:bg-white/[0.03]">
      <div className="container">
        <SectionHeading
          eyebrow="Why PROSOLE"
          title="The benefits of working with us"
          description="We measure ourselves on how quickly a client can launch, and how few surprises they hit along the way."
        />

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, index) => (
            <div
              key={item.title}
              className="rounded-xl border border-gray-200 bg-white p-7 transition duration-300 hover:shadow-three dark:border-white/10 dark:bg-white/5"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="m5 13 4 4L19 7" />
                  </svg>
                </span>
                <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-bold text-black dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-body-color dark:text-body-color-dark">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPartner;
