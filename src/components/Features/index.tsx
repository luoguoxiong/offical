import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import card01 from './images/card01.png'
import card02 from './images/card02.jpg'
import card03 from './images/card03.jpg'
import card04 from './images/card04.jpg'
import card05 from './images/card051.jpg'
import card06 from './images/card06.jpg'


const images = [card01,card02,card03,card04,card05,card06]


const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-10">
        <div className="container">
          <SectionTitle
            title="ABOUT PROSOLE"
            paragraph="A specialized, startup-friendly supply chain for shoe care and accessories.
We are a professional supply chain service company specializing in shoe care and footwear accessories, providing global clients with one-stop solutions from product development and customized manufacturing to final delivery."
            center
          />

          <div className="grid grid-cols-1 place-items-center gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {images.map((feature,index) => (
              <SingleFeature key={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
