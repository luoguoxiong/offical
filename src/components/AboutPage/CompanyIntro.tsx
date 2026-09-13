import Image from "next/image";

const facts = [
  { value: "12", unit: "Years", label: "Manufacturing experience" },
  { value: "8", unit: "Lines", label: "Dedicated production lines" },
  { value: "30+", unit: "", label: "Countries served" },
];

const CompanyIntro = () => {
  return (
    <section className="bg-white py-20 md:py-24 lg:py-28 dark:bg-black">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-2xl shadow-two">
              <Image
                src="/images/about/factory.png"
                alt="PROSOLE production facility in Dongguan"
                width={880}
                height={485}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-xl border border-gray-200 bg-white px-6 py-5 shadow-two sm:block dark:border-white/10 dark:bg-[#151A24]">
              <p className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">
                5,000 m²
              </p>
              <p className="mt-1 text-sm text-body-color dark:text-body-color-dark">
                Factory floor in Dongguan
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="mb-4 inline-block text-sm font-bold tracking-[0.2em] text-blue-600 uppercase dark:text-blue-400">
              Who We Are
            </span>
            <h2 className="mb-6 text-3xl font-bold leading-tight text-black sm:text-4xl dark:text-white">
              A supply-chain partner built for footwear brands
            </h2>

            <p className="mb-4 text-base leading-relaxed text-body-color md:text-lg dark:text-body-color-dark">
              Dongguan Prosole Sports Limited is a specialized supply chain
              partner in the shoe care and footwear accessories industry. For
              over a decade we have focused on one thing — helping brands turn
              an idea into a shelf-ready product.
            </p>
            <p className="mb-4 text-base leading-relaxed text-body-color md:text-lg dark:text-body-color-dark">
              Our plant runs{" "}
              <strong className="text-black dark:text-white">
                8 production lines across 5,000 m²
              </strong>{" "}
              with more than 100 skilled workers, giving us the capacity to
              handle both a 500-pair startup run and a full seasonal programme.
            </p>
            <p className="mb-8 text-base leading-relaxed text-body-color md:text-lg dark:text-body-color-dark">
              With{" "}
              <strong className="text-black dark:text-white">
                1,000+ product formulations
              </strong>{" "}
              developed in-house, most projects never start from a blank page —
              we start from a proven base and tune it to your market, price
              point and performance target.
            </p>

            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-lg border border-gray-200 bg-gray-light/60 px-5 py-4 dark:border-white/10 dark:bg-white/5"
                >
                  <dt className="flex items-baseline gap-1">
                    <span className="text-2xl font-extrabold text-blue-600 md:text-3xl dark:text-blue-400">
                      {fact.value}
                    </span>
                    {fact.unit && (
                      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                        {fact.unit}
                      </span>
                    )}
                  </dt>
                  <dd className="mt-1 text-xs leading-snug text-body-color dark:text-body-color-dark">
                    {fact.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;
