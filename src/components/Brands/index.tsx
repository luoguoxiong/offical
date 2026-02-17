import React from "react";
import SectionTitle from "../Common/SectionTitle";

const StatsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
      <SectionTitle
            title="CORE ADVANTAGES"
            paragraph="We provide fully integrated shoe care & accessory solutions with flexible low-MOQ customization, global compliance expertise, and strategic product development support to help brands launch, scale, and grow sustainably."
            center
            mb="80px"
          />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">

          <StatItem number="12" label="Years Factory" />
          <StatItem number="8" label="Production Lines" />
          <StatItem number="5,000 m²" label="Factory Floor Space" />
          <StatItem number="1000+" label="Product Formulations" />
          <StatItem number="100+" label="Workers" />
          <StatItem number="10,000,000+" label="Annual Production Value ($)" />

        </div>
      </div>
    </section>
  );
};

export default StatsSection;

const StatItem = ({ number, label }: { number: string; label: string }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-4xl md:text-5xl font-bold text-[#be0303]">
        {number}
      </h2>
      <p className="text-lg md:text-xl text-gray-700 font-medium">
        {label}
      </p>
    </div>
  );
};
