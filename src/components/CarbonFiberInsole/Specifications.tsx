import InsoleDiagram from "./InsoleDiagram";
import SectionHeading from "@/components/Common/SectionHeading";

const specs = [
  { label: "Model", value: "PS-CF100" },
  { label: "Construction", value: "5-layer composite build" },
  { label: "Plate material", value: "3K carbon fiber, epoxy resin, autoclave cured" },
  { label: "Plate thickness", value: "1.2 mm (± 0.05 mm)" },
  { label: "Total thickness", value: "3.8 mm at forefoot" },
  { label: "Weight", value: "32 g per pair (EU 42)" },
  { label: "Torsional rigidity", value: "18 N·m/rad — Class III" },
  { label: "Energy return", value: "92%" },
  { label: "Size range", value: "EU 35–46 / US 4–13, trimmable toe" },
  { label: "Surface finish", value: "Matte twill, gloss twill or custom print" },
  { label: "MOQ", value: "500 pairs per size run" },
  { label: "Lead time", value: "15–25 days after sample approval" },
  { label: "Packaging", value: "OPP bag, custom printed box, FSC option" },
  { label: "Compliance", value: "REACH / RoHS / CPSIA available on request" },
];

const Specifications = () => {
  return (
    <section
      id="specifications"
      className="bg-white py-20 md:py-24 lg:py-28 dark:bg-black"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Technical Data"
          title="Specifications you can quote to your buyers"
          description="Values below are measured on production tooling, not laboratory one-offs. Full test reports are available for sampling and bulk orders."
        />

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex justify-center lg:justify-start">
            <InsoleDiagram />
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-white/10">
            <dl className="divide-y divide-gray-200 dark:divide-white/10">
              {specs.map((spec, index) => (
                <div
                  key={spec.label}
                  className={`grid grid-cols-1 gap-1 px-6 py-4 sm:grid-cols-[150px_1fr] sm:gap-4 ${
                    index % 2 === 0
                      ? "bg-white dark:bg-white/5"
                      : "bg-gray-light/60 dark:bg-transparent"
                  }`}
                >
                  <dt className="text-sm font-semibold text-black dark:text-white">
                    {spec.label}
                  </dt>
                  <dd className="text-sm leading-relaxed text-body-color dark:text-body-color-dark">
                    {spec.value}
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

export default Specifications;
