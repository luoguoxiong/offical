import Image from "next/image";

const stats = [
  {
    value: "12 Years",
    label: "Factory",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M11 14h2a3 3 0 0 1 3 3v1H8v-1a3 3 0 0 1 3-3Zm6-8 3 2v3a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V8l3-2Zm-13 0 3 2v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V8l3-2Zm6.5 8.5L7 11l1.2-1.5L11 11l3.8-3L16 9.5l-5.5 5Z" />
      </svg>
    ),
  },
  {
    value: "8",
    label: "Production Lines",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M2 20V9l6 4V9l6 4V4h8v16H2Zm4-3h2v-2H6v2Zm0-4h2v-2H6v2Zm6 4h2v-2h-2v2Zm0-4h2v-2h-2v2Zm6 4h2V8h-2v9Z" />
      </svg>
    ),
  },
  {
    value: "5,000 m²",
    label: "Factory Floor Space",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M4 21V9l6 4V9l6 4V4h4v17H4Zm3-4h2v-2H7v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Z" />
      </svg>
    ),
  },
  {
    value: "100+",
    label: "Workers",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM9 13c-3 0-6 1.5-6 3.5V19h12v-2.5C15 14.5 12 13 9 13Zm7.5.5c-.5 0-1 .05-1.5.15 1.2.9 2 2.1 2 3.35V19h5v-1.5c0-2-2.7-4-5.5-4Z" />
      </svg>
    ),
  },
  {
    value: "1000+",
    label: "Product Formulations",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M9 3h6v2h-1v4.5l4.6 8A2 2 0 0 1 16.9 21H7.1a2 2 0 0 1-1.7-3.5L10 9.5V5H9V3Zm3 8.5L9.6 16h4.8L12 11.5Z" />
      </svg>
    ),
  },
  {
    value: "30+",
    label: "Countries Served",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 2c1.3 0 2.5.3 3.6.8L14 7h-3l-1.5 2.5L7 11l-1.8-1A8 8 0 0 1 12 4ZM5 13.5l3 1 1.5 3.5-1 2A8 8 0 0 1 5 13.5Zm13.6 2.6A8 8 0 0 1 14 19.7l.5-2.7 3-2 .9.9.2.2Z" />
      </svg>
    ),
  },
];

const advantages = [
  "Complete Supply Chain Integration in Shoe Care & Accessories.",
  "Highly Flexible Customization with Low MOQs.",
  "Multi-Level Client Solutions.",
  "Professional Product Development & Strategic Support.",
  "Overseas Market Expertise & Compliance Awareness.",
];

const AboutUs = () => {
  return (
    <section id="about-us" className="overflow-hidden bg-white py-16 md:py-20 lg:py-24">
      <div className="container">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* 左侧：公司简介 + 工厂照片 */}
          <div>
            <h2 className="mb-6 text-2xl font-bold text-blue-700 md:text-3xl">
              DONGGUAN PROSOLE SPORTS LIMITED
            </h2>

            <p className="mb-4 text-base leading-7 text-body-color dark:text-white">
              Is a specialized, startup-friendly supply chain partner in the
              shoe care and footwear accessories industry.
            </p>
            <p className="mb-4 text-base leading-7 text-body-color dark:text-white">
              With{" "}
              <strong className="text-blue-700">
                12 years of manufacturing experience
              </strong>
              , we have been focused on one thing – delivering reliable,
              scalable, and high-quality solutions for global brands and
              emerging businesses.
            </p>
            <p className="mb-4 text-base leading-7 text-body-color dark:text-white">
              Our factory is equipped with{" "}
              <strong className="text-blue-700">8 production lines</strong> and
              spans over{" "}
              <strong className="text-blue-700">5,000 m²</strong>, supported by{" "}
              <strong className="text-blue-700">100+ skilled workers</strong> to
              ensure stable capacity and consistent quality.
            </p>
            <p className="mb-4 text-base leading-7 text-body-color dark:text-white">
              We offer a wide range of solutions with{" "}
              <strong className="text-blue-700">
                1,000+ product formulations
              </strong>
              , enabling flexible customization to meet diverse market needs.
            </p>
            <p className="mb-8 text-base leading-7 text-body-color dark:text-white">
              Today, we serve clients across{" "}
              <strong className="text-blue-700">30+ countries</strong>,
              supporting startups and growing brands with low MOQs, fast
              turnaround times, and flexible customization options.
            </p>

            <div className="overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/images/about/factory.png"
                alt="Prosole Factory"
                width={880}
                height={485}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* 右侧：ABOUT US 标题 + 数据卡片 + 优势列表 */}
          <div>
            <h2 className="mb-3 text-center text-4xl font-extrabold tracking-wide text-blue-700 md:text-5xl">
              ABOUT US
            </h2>
            <h3 className="mx-auto mb-10 max-w-md text-center text-xl font-bold leading-snug text-blue-700 md:text-2xl">
              THE BENEFITS AND VALUES OF WORKING WITH US
            </h3>

            <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                    {stat.icon}
                  </span>
                  <div>
                    <div className="text-2xl font-extrabold text-blue-700 md:text-3xl">
                      {stat.value}
                    </div>
                    <div className="text-sm font-semibold text-body-color dark:text-white">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <ul className="space-y-4">
              {advantages.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start text-base font-medium text-body-color dark:text-white md:text-lg"
                >
                  <span className="mr-3 shrink-0 font-bold text-blue-700">
                    {String(index + 1).padStart(2, "0")}.
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
