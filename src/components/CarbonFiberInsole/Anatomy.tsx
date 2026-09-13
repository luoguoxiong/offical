import Image from "next/image";
import SectionHeading from "@/components/Common/SectionHeading";

const layers = [
  {
    name: "Breathable Mesh Top Cloth",
    thickness: "0.4 mm",
    color: "bg-sky-500",
    description:
      "Warp-knitted polyester with silver-ion antibacterial finish. Moves sweat away from the plantar surface and resists odour build-up.",
  },
  {
    name: "Anatomical EVA Cushioning",
    thickness: "1.3 mm",
    color: "bg-indigo-500",
    description:
      "Dual-density EVA shaped to the medial arch. Absorbs impact at heel strike while keeping the metatarsal area responsive.",
  },
  {
    name: "3K Carbon Fiber Plate",
    thickness: "1.2 mm",
    color: "bg-[#111827] dark:bg-white",
    description:
      "The structural core. Autoclave-cured 3K twill carbon fibre bonded with high-temperature epoxy, spanning heel to forefoot for rigidity and energy return.",
  },
  {
    name: "TPU Stability Bridge",
    thickness: "0.6 mm",
    color: "bg-blue-600",
    description:
      "A thermoplastic cradle wrapping the heel and midfoot. Controls rearfoot roll and keeps the plate correctly seated under load.",
  },
  {
    name: "Anti-Slip Base Fabric",
    thickness: "0.3 mm",
    color: "bg-slate-400",
    description:
      "High-friction non-woven backing that grips the shoe lining so the insole stays exactly where you placed it.",
  },
];

const Anatomy = () => {
  return (
    <section
      id="anatomy"
      className="bg-gray-light/60 py-20 md:py-24 lg:py-28 dark:bg-white/[0.03]"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Layered Construction"
          title="Five layers. One engineered system."
          description="The plate alone is not the product. It is the way the plate is bonded, cradled and cushioned that decides how the insole feels after 20 kilometres."
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-two">
              <Image
                src="/images/products/carbon-insole-layers.jpg"
                alt="Cross section of the carbon fiber insole layers"
                width={1024}
                height={1024}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute top-4 left-4 rounded-md bg-black/70 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
              Total build-up: 3.8 mm
            </div>
          </div>

          <ul className="space-y-4">
            {layers.map((layer, index) => (
              <li
                key={layer.name}
                className="flex gap-5 rounded-xl border border-gray-200 bg-white p-5 transition duration-300 hover:shadow-three dark:border-white/10 dark:bg-white/5"
              >
                <span className="relative mt-1 flex w-3 shrink-0 justify-center">
                  <span
                    className={`h-full w-3 rounded-full ${layer.color}`}
                    aria-hidden
                  />
                </span>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-bold text-black dark:text-white">
                      {layer.name}
                    </h3>
                    <span className="rounded-full bg-gray-100 px-3 py-0.5 text-xs font-semibold text-body-color dark:bg-white/10 dark:text-body-color-dark">
                      {layer.thickness}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-body-color dark:text-body-color-dark">
                    {layer.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Anatomy;
