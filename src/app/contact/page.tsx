import Breadcrumb from "@/components/Common/Breadcrumb";
import CtaBanner from "@/components/Common/CtaBanner";
import ScrollUp from "@/components/Common/ScrollUp";
import ContactForm from "@/components/ContactPage/ContactForm";
import ContactInfo from "@/components/ContactPage/ContactInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact PROSOLE | Footwear Supply Chain Enquiries",
  description:
    "Reach the PROSOLE team for insoles, shoe care and footwear accessories. Email wslyfs2010@gmail.com or WhatsApp +86 15017139740 — we reply within 24 hours.",
};

const ContactPage = () => {
  return (
    <>
      <ScrollUp />
      <Breadcrumb
        pageName="Contact Us"
        description="Send us your brief, drawings or target price — our engineering and marketing team answers every enquiry within one working day."
      />
      <ContactInfo />
      <ContactForm />
      <CtaBanner
        eyebrow="Already Know What You Need"
        title="Looking for a ready-made product instead?"
        description="Our Carbon Core performance insole is in production today, with samples available for immediate evaluation."
        primary={{ label: "View the Carbon Core", href: "/carbon-fiber-insole" }}
        secondary={{ label: "WhatsApp Us", href: "https://wa.me/8615017139740" }}
      />
    </>
  );
};

export default ContactPage;
