"use client";

import { useState } from "react";
import SectionHeading from "@/components/Common/SectionHeading";

const faqs = [
  {
    question: "Is the plate made of real carbon fiber?",
    answer:
      "Yes. The core is a 3K twill carbon fiber laminate cured with high-temperature epoxy under autoclave pressure. It is not a printed film or a decorative overlay, and we can provide the material certificate with every bulk order.",
  },
  {
    question: "Will a 1.2 mm plate change the fit of my shoe?",
    answer:
      "The complete build is 3.8 mm at the forefoot, which fits most sports and lifestyle shoes without changing your size. For very low-volume racing flats we also offer a 2.6 mm slim version with the same plate rigidity.",
  },
  {
    question: "Can the insole be trimmed to size?",
    answer:
      "Every pair carries printed trim guides from EU 35 to EU 46. Cut along the guide with standard scissors — the carbon plate stops short of the toe area, so the trim is always made through comfort material only.",
  },
  {
    question: "What is the MOQ and can I mix sizes?",
    answer:
      "The minimum is 500 pairs per size run, and sizes can be mixed within that run. For a first project we can split the run across up to four sizes at no extra cost.",
  },
  {
    question: "How long does sampling take?",
    answer:
      "Standard samples ship in 7–10 days after the brief is confirmed. If you need a custom last or a specific rigidity grade, allow 12–15 days including one round of revision.",
  },
  {
    question: "Can you produce under our own brand?",
    answer:
      "Absolutely. We print or emboss your logo on the top cloth, produce custom woven labels, and pack to your retail specification — poly bag, printed box or FSC-certified carton.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-gray-light/60 py-20 md:py-24 lg:py-28 dark:bg-white/[0.03]"
    >
      <div className="container">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions buyers ask before sampling"
          description="If your question is not here, message us directly — our engineers answer technical queries within one working day."
        />

        <div className="mx-auto mt-16 max-w-3xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white transition dark:border-white/10 dark:bg-white/5"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-semibold text-black md:text-lg dark:text-white">
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary/40 text-primary transition duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="h-4 w-4"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
