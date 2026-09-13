import SectionHeading from "@/components/Common/SectionHeading";

const milestones = [
  {
    year: "2013",
    title: "Founded in Dongguan",
    description:
      "Started with a single shoe care production line serving domestic footwear factories.",
  },
  {
    year: "2016",
    title: "Plant expansion",
    description:
      "Moved into a 5,000 m² facility and scaled to 8 dedicated production lines.",
  },
  {
    year: "2019",
    title: "In-house R&D laboratory",
    description:
      "Built a formulation lab that today holds more than 1,000 proven product recipes.",
  },
  {
    year: "2022",
    title: "Global OEM / ODM service",
    description:
      "Began supplying private label programmes to brands across 30+ countries.",
  },
  {
    year: "2026",
    title: "Carbon Core series",
    description:
      "Launched a genuine carbon fiber performance insole platform for sports and lifestyle footwear.",
  },
];

const Milestones = () => {
  return (
    <section className="bg-gray-light/60 py-20 md:py-24 lg:py-28 dark:bg-white/[0.03]">
      <div className="container">
        <SectionHeading
          eyebrow="Our Journey"
          title="From one line to a full supply chain"
          description="Every expansion was driven by the same brief from our clients: make it easier to launch and scale a footwear accessory line."
        />

        <ol className="mx-auto mt-16 max-w-4xl">
          {milestones.map((item, index) => (
            <li
              key={item.year}
              className="group relative flex gap-6 pb-10 last:pb-0 sm:gap-10"
            >
              {index !== milestones.length - 1 && (
                <span
                  aria-hidden
                  className="absolute top-12 left-[27px] h-full w-px bg-gray-300 sm:left-[35px] dark:bg-white/15"
                />
              )}
              <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-white text-sm font-bold text-blue-600 transition duration-300 group-hover:border-primary group-hover:bg-blue-600 group-hover:text-white sm:h-[70px] sm:w-[70px] sm:text-base dark:border-white/15 dark:bg-[#151A24] dark:text-blue-400">
                {item.year}
              </span>
              <div className="pt-2">
                <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Milestones;
