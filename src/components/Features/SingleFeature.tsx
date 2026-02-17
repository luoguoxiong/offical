import Image from "next/image";
import { Feature } from "@/types/feature";
import card01 from "../../../public/images/card01.png"
const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { title } = feature;

  return (
    <div className="w-full max-w-[430px]">
      <div className="relative w-full overflow-hidden rounded-xl shadow-lg aspect-[43/35] group">
        <Image
          src={card01}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        {/* <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-5">
          <h3 className="text-white text-lg font-semibold">{title}</h3>
        </div> */}
      </div>
    </div>
  );
};

export default SingleFeature;
