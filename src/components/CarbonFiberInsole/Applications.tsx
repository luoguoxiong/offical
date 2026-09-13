import SectionHeading from "@/components/Common/SectionHeading";

const applications = [
  {
    title: "Road & Track Cycling",
    description:
      "Stiffens the shoe sole so more pedal force reaches the crank instead of being absorbed by foam.",
    icon: "M5 18a7 7 0 1 1 3-12.9M19 18a7 7 0 1 0-3-12.9m-8 3.4h8M8.5 6.5 12 4l3.5 2.5",
  },
  {
    title: "Running & Marathon",
    description:
      "Cuts midfoot twist on long road efforts and keeps the arch supported when the legs fatigue late in the race.",
    icon: "M13 3 7 12h4l-1 9 8-11h-4l1-7Z",
  },
  {
    title: "Trail & Hiking",
    description:
      "Spreads pressure over sharp rock and root, protecting the plantar fascia on long descents with a loaded pack.",
    icon: "M3 19h18L14 6l-2.5 5L9 8l-6 11Z",
  },
  {
    title: "Court Sports",
    description:
      "Basketball, tennis and volleyball players get a stable platform for hard lateral cuts and repeated landings.",
    icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 0c3 3 3 17 0 20M12 2c-3 3-3 17 0 20M2.5 9h19M2.5 15h19",
  },
  {
    title: "Football & Rugby",
    description:
      "Fits low-profile boots without altering cleat fit, adding stiffness for acceleration and kicking power.",
    icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 5 2.5 5 5 2.5-5 2.5L12 22l-2.5-5L4.5 14.5 9.5 12 12 7Z",
  },
  {
    title: "Gym & HIIT",
    description:
      "A stable, non-compressible base for squats, box jumps and sled work where soft cushioning works against you.",
    icon: "M4 9v6M20 9v6M7 6v12M17 6v12M7 12h10",
  },
];

const Applications = () => {
  return (
    <section
      id="applications"
      className="bg-gray-light/60 py-20 md:py-24 lg:py-28 dark:bg-white/[0.03]"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Where It Works"
          title="Built for every sport that loads the forefoot"
          description="One plate, tuned into multiple rigidity grades. We match the layup to the movement pattern of the sport rather than forcing a single stiffness on every category."
        />

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {applications.map((item) => (
            <div
              key={item.title}
              className="flex gap-5 rounded-xl border border-gray-200 bg-white p-7 transition duration-300 hover:border-primary/40 hover:shadow-three dark:border-white/10 dark:bg-white/5"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-black text-white dark:bg-white dark:text-black">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d={item.icon} />
                </svg>
              </span>
              <div>
                <h3 className="mb-2 text-lg font-bold text-black dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-body-color dark:text-body-color-dark">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Applications;
