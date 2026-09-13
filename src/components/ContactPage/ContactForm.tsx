"use client";

import { useState } from "react";

const productOptions = [
  "Performance insoles",
  "Shoe care products",
  "Footwear accessories",
  "Private label programme",
  "Something else",
];

const quantityOptions = [
  "Under 500 pairs",
  "500 – 2,000 pairs",
  "2,000 – 10,000 pairs",
  "More than 10,000 pairs",
];

const nextSteps = [
  "We reply within 24 hours with material options and an indicative cost.",
  "You approve the direction, we build a functional sample in 7–10 days.",
  "After testing and sign-off, mass production starts in 15–25 days.",
];

const initialForm = {
  name: "",
  email: "",
  company: "",
  country: "",
  product: "",
  quantity: "",
  content: "",
};

const inputClass =
  "w-full rounded-md border border-stroke bg-[#f8f8f8] px-5 py-3 text-base text-body-color outline-none transition focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:focus:border-primary";

const labelClass =
  "mb-2 block text-sm font-medium text-dark dark:text-white";

const ContactForm = () => {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setStatus("idle");
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name";
    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
      nextErrors.email = "Invalid email format";
    }
    if (!form.content.trim()) nextErrors.content = "Please tell us what you need";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.code === 200) {
        setStatus("success");
        setForm(initialForm);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    setLoading(false);
  };

  return (
    <section className="bg-white py-20 md:py-24 lg:py-28 dark:bg-black">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-three sm:p-10 dark:border-white/10 dark:bg-white/5">
            <h2 className="mb-2 text-2xl font-bold text-black dark:text-white sm:text-3xl">
              Send us your project brief
            </h2>
            <p className="mb-8 text-base text-body-color dark:text-body-color-dark">
              The more detail you share, the more accurate our first quotation
              will be.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Your Name <span className="text-primary">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className={inputClass}
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@brand.com"
                    className={inputClass}
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="company" className={labelClass}>
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Brand or company name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="country" className={labelClass}>
                    Country / Region
                  </label>
                  <input
                    id="country"
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    placeholder="e.g. Germany"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="product" className={labelClass}>
                    Product Interest
                  </label>
                  <select
                    id="product"
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select a category</option>
                    {productOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="quantity" className={labelClass}>
                    Estimated Quantity
                  </label>
                  <select
                    id="quantity"
                    name="quantity"
                    value={form.quantity}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select a range</option>
                    {quantityOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="content" className={labelClass}>
                    Project Details <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    rows={5}
                    value={form.content}
                    onChange={handleChange}
                    placeholder="Shoe type, target rigidity, material preference, packaging, timeline..."
                    className={`${inputClass} resize-none`}
                  />
                  {errors.content && (
                    <p className="mt-2 text-sm text-red-500">{errors.content}</p>
                  )}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-5">
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-md bg-primary px-9 py-4 text-base font-semibold text-white shadow-submit transition duration-300 hover:bg-primary/90 disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send Enquiry"}
                </button>

                {status === "success" && (
                  <p className="text-sm font-medium text-green-600">
                    Thanks — your enquiry has been sent. We will reply within 24
                    hours.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm font-medium text-red-500">
                    Something went wrong. Please email us directly at
                    wslyfs2010@gmail.com.
                  </p>
                )}
              </div>
            </form>
          </div>

          <div className="self-start rounded-xl border border-gray-200 bg-gray-light/60 p-8 dark:border-white/10 dark:bg-white/5">
            <h3 className="mb-6 text-xl font-bold text-black dark:text-white">
              What happens next
            </h3>
            <ol className="mb-8 space-y-5">
              {nextSteps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-body-color dark:text-body-color-dark">
                    {step}
                  </p>
                </li>
              ))}
            </ol>

            <div className="border-t border-gray-300 pt-6 dark:border-white/15">
              <p className="mb-3 text-sm text-body-color dark:text-body-color-dark">
                Prefer to reach us directly?
              </p>
              <a
                href="mailto:wslyfs2010@gmail.com"
                className="block text-base font-semibold text-blue-600 dark:text-blue-400"
              >
                wslyfs2010@gmail.com
              </a>
              <a
                href="https://wa.me/8615017139740"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-base font-semibold text-blue-600 dark:text-blue-400"
              >
                WhatsApp +86 15017139740
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
