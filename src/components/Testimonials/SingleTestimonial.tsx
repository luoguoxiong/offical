import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { image } = testimonial;

  return (
    <div className="w-full">
      <div className="shadow-two hover:shadow-one ">
        {/* todo 发图片 */}
          <Image
            src={image} // 你的图片路径
            alt="testimonial"
            width={435}
            height={295}
          />
      </div>
    </div>
  );
};

export default SingleTestimonial;
