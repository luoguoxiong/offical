const SectionHeading = ({
  eyebrow,
  title,
  description,
  center = true,
  width = "720px",
}: {
  eyebrow: string;
  title: string;
  description: string;
  center?: boolean;
  width?: string;
}) => {
  return (
    <div
      className={`w-full ${center ? "mx-auto text-center" : ""}`}
      style={{ maxWidth: width }}
    >
      <span className="mb-4 inline-block text-sm font-bold tracking-[0.2em] text-blue-600 uppercase dark:text-blue-400">
        {eyebrow}
      </span>
      <h2 className="mb-4 text-3xl font-bold leading-tight text-black sm:text-4xl md:text-[42px] dark:text-white">
        {title}
      </h2>
      <p className="text-base leading-relaxed text-body-color md:text-lg dark:text-body-color-dark">
        {description}
      </p>
    </div>
  );
};

export default SectionHeading;
