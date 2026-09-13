import SectionHeading from "@/components/Common/SectionHeading";

const channels = [
  {
    label: "Email",
    value: "wslyfs2010@gmail.com",
    note: "Best for briefs, drawings and sample requests",
    href: "mailto:wslyfs2010@gmail.com",
    icon: "M3 6h18v12H3V6Zm0 0 9 7 9-7",
  },
  {
    label: "WhatsApp",
    value: "+86 15017139740",
    note: "Fastest reply — message us any working day",
    href: "https://wa.me/8615017139740",
    icon: "M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 2a8 8 0 1 1-4.1 14.9l-.5-.3-2.6.7.7-2.5-.3-.6A8 8 0 0 1 12 4Zm-3 5c0 3 3.2 5.6 6.2 5.6.7 0 1.3-.6 1.3-1.3 0-.3-.1-.6-.3-.8l-1.1-1.3c-.3-.4-.9-.4-1.2-.1l-.6.6c-1.5-.7-2.6-1.8-3.3-3.3l.6-.6c.3-.3.3-.9-.1-1.2L9.3 7.4c-.2-.2-.5-.3-.8-.3C7.9 7.1 7.5 7.5 7.5 7.9c0 .6.1 1.2.2 1.8",
  },
  {
    label: "Office",
    value: "Nancheng Street, Dongguan",
    note: "Room 1315, Zhonghuan 100 Plaza, No. 92 Hongfu Road, Dongguan, Guangdong",
    icon: "M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  },
  {
    label: "Factory",
    value: "Huangjiang Town, Dongguan",
    note: "Floor 1, Building 91, Qinglong Road, Huangjiang Town, Dongguan, Guangdong",
    icon: "M3 21V9l6 4V9l6 4V4h6v17H3Zm4-4h2v-2H7v2Zm4 0h2v-2h-2v2Zm4 0h2V8h-2v9Z",
  },
];

const ContactInfo = () => {
  return (
    <section className="bg-white pb-4 pt-20 md:pt-24 lg:pt-28 dark:bg-black">
      <div className="container">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Talk directly to the people who make it"
          description="No ticket queue. Your enquiry reaches the marketing and engineering team that will actually run your project."
        />

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((item) => {
            const content = (
              <>
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400">
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
                <p className="text-xs font-bold tracking-[0.18em] text-blue-600 uppercase dark:text-blue-400">
                  {item.label}
                </p>
                <p className="mt-2 text-lg font-bold text-black dark:text-white">
                  {item.value}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-body-color dark:text-body-color-dark">
                  {item.note}
                </p>
              </>
            );

            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="group block rounded-xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-feature-2 dark:border-white/10 dark:bg-white/5"
              >
                {content}
              </a>
            ) : (
              <div
                key={item.label}
                className="block rounded-xl border border-gray-200 bg-white p-7 dark:border-white/10 dark:bg-white/5"
              >
                {content}
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-xl border border-gray-200 bg-gray-light/60 px-7 py-5 sm:flex-row dark:border-white/10 dark:bg-white/5">
          <p className="text-base text-body-color dark:text-body-color-dark">
            <span className="font-semibold text-black dark:text-white">
              Working hours:
            </span>{" "}
            Monday – Saturday, 09:00 – 18:30 (GMT+8)
          </p>
          <p className="text-base text-body-color dark:text-body-color-dark">
            <span className="font-semibold text-black dark:text-white">
              Average reply time:
            </span>{" "}
            within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
