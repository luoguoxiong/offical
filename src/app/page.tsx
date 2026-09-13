import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";

import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PROSOLE",
  description: "PROSOLE",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Banner />
      <Features />
      <Video />
      <AboutUs />
      <Testimonials />
      <Contact />
    </>
  );
}
