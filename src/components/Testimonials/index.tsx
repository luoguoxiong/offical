import Image, { StaticImageData } from "next/image";

import card01 from "./image/card01.jpg";
import card02 from "./image/card02.jpg";
import card03 from "./image/card03.jpg";
import card04 from "./image/card04.jpg";
import card05 from "./image/card05.jpg";
import card06 from "./image/card06.jpg";
import SectionTitle from "../Common/SectionTitle";

type BusinessItem = {
  id: number;
  title: string;
  image: StaticImageData;
  features: string[];
};

const businessData: BusinessItem[] = [
  {
    id: 1,
    title: "Supermarkets",
    image: card01,
    features: [
      "Guaranteed Product Quality",
      "Stable Supply Chain",
      "Brand Support",
    ],
  },
  {
    id: 2,
    title: "Wholesalers",
    image: card02,
    features: [
      "Bulk Purchase Discounts",
      "Wide Range of Products",
      "Fast Delivery",
    ],
  },
  {
    id: 3,
    title: "Footwear Brands",
    image: card03,
    features: [
      "Custom Product Design",
      "Premium Materials",
      "Co-Branding Opportunities",
    ],
  },
  {
    id: 4,
    title: "Online Brand Operators",
    image: card04,
    features: [
      "E-Commerce Compatibility",
      "Small-Batch Customization",
      "7-Day Customization Service",
    ],
  },
  {
    id: 5,
    title: "Physical Stores",
    image: card05,
    features: [
      "High-End Display Designs",
      "Custom Services",
      "In-Store Support",
    ],
  },
  {
    id: 6,
    title: "Brand Customization Clients",
    image: card06,
    features: [
      "Comprehensive Customization Services",
      "Strict Quality Control",
      "Flexible Production Capacity",
    ],
  },
];

const BusinessGrid = () => {
  return (
    <section className="bg-gray-light py-16 md:py-20 lg:py-28">
      <div className="container">

      <SectionTitle
            title="WHO WE SUPPORT?"
            paragraph="" 
            center
          />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {businessData.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              {/* 圆形图片 */}
              <div className="mb-6 flex justify-center">
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* 标题 */}
              <h3 className="mb-6 text-center text-xl font-semibold">
                {item.title}
              </h3>

              {/* 列表 */}
              <ul className="space-y-3">
                {item.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <span className="mr-3 text-primary">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessGrid;
