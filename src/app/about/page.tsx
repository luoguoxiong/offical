import Breadcrumb from "@/components/Common/Breadcrumb";
import CtaBanner from "@/components/Common/CtaBanner";
import ScrollUp from "@/components/Common/ScrollUp";
import Capabilities from "@/components/AboutPage/Capabilities";
import CompanyIntro from "@/components/AboutPage/CompanyIntro";
import Milestones from "@/components/AboutPage/Milestones";
import WhyPartner from "@/components/AboutPage/WhyPartner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About PROSOLE | Shoe Care & Footwear Accessories Supply Chain",
  description:
    "Dongguan Prosole Sports Limited — 12 years of manufacturing, 8 production lines, 5,000 m² plant and 1,000+ formulations serving footwear brands in 30+ countries.",
};

const AboutPage = () => {
  return (
    <>
      <ScrollUp />
      <Breadcrumb
        pageName="About PROSOLE"
        description="A specialized, startup-friendly supply chain partner for shoe care and footwear accessories — from first brief to finished, packed product."
      />
      <CompanyIntro />
      <Milestones />
      <Capabilities />
      <WhyPartner />
      <CtaBanner
        eyebrow="Work With Us"
        title="Let's build your next footwear line"
        description="Tell us what you want to launch. We will come back with material options, a target cost and a sampling plan within 24 hours."
        primary={{ label: "Request a Quote", href: "mailto:wslyfs2010@gmail.com?subject=Project%20Enquiry" }}
        secondary={{ label: "Contact Our Team", href: "/contact" }}
      />
    </>
  );
};

export default AboutPage;
