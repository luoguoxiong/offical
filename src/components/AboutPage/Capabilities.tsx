import SectionHeading from "@/components/Common/SectionHeading";

const capabilities = [
  {
    title: "Performance Insoles",
    description:
      "Carbon fiber, EVA, PU and gel constructions in multiple rigidity grades, cut to your last.",
    icon: "M3 17h18v3H3v-3Zm2-3c2-4 5-6 7-8 2 2 5 4 7 8H5Zm4-9h6v2H9V5Z",
  },
  {
    title: "Shoe Care",
    description:
      "Cleaners, waterproofing sprays, deodorizers and conditioners formulated for leather, suede and knit.",
    icon: "M9 3h6v2h-1v4.5l4.6 8A2 2 0 0 1 16.9 21H7.1a2 2 0 0 1-1.7-3.5L10 9.5V5H9V3Zm3 8.5L9.6 16h4.8L12 11.5Z",
  },
  {
    title: "Footwear Accessories",
    description:
      "Laces, shoe trees, heel grips, stretchers and travel kits produced to match your brand palette.",
    icon: "M4 7h16v3H4V7Zm2 5h12v3H6v-3Zm-2 5h16v3H4v-3Zm6-13 2-2 2 2M12 20l-2 2 2 2",
  },
  {
    title: "Product Development",
    description:
      "Brief to first sample in 7–10 days, with material selection, prototyping and revision rounds.",
    icon: "M12 3a9 9 0 1 0 9 9h-9V3Zm0 0a9 9 0 0 1 9 9",
  },
  {
    title: "Private Label & Packaging",
    description:
      "Logo printing, woven labels, FSC cartons and retail-ready packaging designed with your team.",
    icon: "M4 8h16v12H4V8Zm2 4h12v2H6v-2Zm4-8 2-2 2 2M4 14h16",
  },
  {
    title: "Compliance & Logistics",
    description:
      "REACH, RoHS and CPSIA documentation prepared for your market, plus export paperwork handling.",
    icon: "M12 2 4 5v6c0 5 3.5 9.3 8 11 4.5-1.7 8-6 8-11V5l-8-3Zm-1 14-4-4 1.4-1.4L11 13.2l4.6-4.6L17 10l-6 6Z",
  },
];

const Capabilities = () => {
  return (
    <section className="bg-white py-20 md:py-24 lg:py-28 dark:bg-black">
      <div className="container">
        <SectionHeading
          eyebrow="What We Make"
          title="One partner for the whole accessories range"
          description="Insoles, care products and accessories are sourced, developed and packed under one roof — fewer suppliers to manage, one quality standard to hold."
        />

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => (
            <div
              key={item.title}
              className="group rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-feature-2 dark:border-white/10 dark:bg-white/5"
            >
              <span className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-blue-600/10 text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-400/10 dark:text-blue-400">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-7 w-7"
                >
                  <path d={item.icon} />
                </svg>
              </span>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                {item.title}
              </h3>
              <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
