import ScrollUp from "@/components/Common/ScrollUp";
import Anatomy from "@/components/CarbonFiberInsole/Anatomy";
import Applications from "@/components/CarbonFiberInsole/Applications";
import CallToAction from "@/components/CarbonFiberInsole/CallToAction";
import CustomProcess from "@/components/CarbonFiberInsole/CustomProcess";
import Faq from "@/components/CarbonFiberInsole/Faq";
import Hero from "@/components/CarbonFiberInsole/Hero";
import Highlights from "@/components/CarbonFiberInsole/Highlights";
import Specifications from "@/components/CarbonFiberInsole/Specifications";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carbon Fiber Performance Insole | PROSOLE",
  description:
    "PROSOLE Carbon Core PS-CF100: a genuine 3K carbon fiber performance insole with a 1.2 mm plate, 32 g per pair and 92% energy return. OEM / ODM from 500 pairs.",
};

const CarbonFiberInsolePage = () => {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Highlights />
      <Anatomy />
      <Specifications />
      <Applications />
      <CustomProcess />
      <Faq />
      <CallToAction />
    </>
  );
};

export default CarbonFiberInsolePage;
