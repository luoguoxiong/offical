import SectionHeading from "@/components/Common/SectionHeading";

const highlights = [
  {
    title: "Real 3K Carbon Plate",
    description:
      "Autoclave-cured 3K carbon fiber with epoxy resin delivers Class III rigidity at a fraction of the weight of steel or TPU shanks.",
    icon: (
      <path d="M4 5h16v3H4V5Zm0 5.5h16v3H4v-3ZM4 16h16v3H4v-3Zm4-9.5v14M16 5.5v14" />
    ),
  },
  {
    title: "Ultra-Light Profile",
    description:
      "Only 1.2 mm at the plate and 32 g per pair. Adds performance without changing the fit or volume of your footwear.",
    icon: (
      <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 4.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 3.6a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8Z" />
    ),
  },
  {
    title: "Torsional Control",
    description:
      "Rated at 18 N·m/rad, the plate bridges the heel and forefoot to stop excessive midfoot twist on hard cuts and sprints.",
    icon: (
      <path d="M3 6h18v4H3V6Zm0 8h18v4H3v-4Zm7-8v12m4-12v12" />
    ),
  },
  {
    title: "Explosive Energy Return",
    description:
      "Stores load at heel strike and releases it at toe-off, measured at 92% energy return for a snappier, less fatiguing stride.",
    icon: (
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    ),
  },
  {
    title: "Anatomical Heel Cup",
    description:
      "A deep thermoplastic heel cradle locks the calcaneus in place, improving alignment and reducing heel slip inside the shoe.",
    icon: (
      <path d="M6 4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4Zm0 4v8h12V8H6Z" />
    ),
  },
  {
    title: "Breathable & Antibacterial",
    description:
      "Moisture-wicking top cloth with silver-ion treatment keeps the foot cool and odour-free through long training sessions.",
    icon: (
      <path d="M12 21s7-4.3 7-10a7 7 0 1 0-14 0c0 5.7 7 10 7 10Zm0-13a3 3 0 0 1 3 3" />
    ),
  },
];

const Highlights = () => {
  return (
    <section
      id="highlights"
      className="bg-white py-20 md:py-24 lg:py-28 dark:bg-black"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Why Carbon Core"
          title="Six engineering advantages in one insole"
          description="Every layer of the Carbon Core is specified for a measurable job — rigidity, weight, comfort or hygiene — and validated on the bench before it goes into production."
        />

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
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
                  {item.icon}
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

export default Highlights;
