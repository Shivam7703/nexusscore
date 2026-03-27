import AboutSection from "@/components/home/AboutSection";
import Blogs from "@/components/home/blog";
import CountDown from "@/components/home/Contdown";
import Greenbox from "@/components/home/greenbox";
import BannerSlider from "@/components/home/HomeBanner";
import Testimonials from "@/components/home/testimonial";
import { aboutdata, countDown } from "@/data/homeData";
import FaqSection from "@/components/home/faq";
import VisaSlider from "@/components/home/visaslider";
import Country from "@/components/home/country";
import WorkProcessSlider from "@/components/home/workingprocess";
import Canadapnp from "@/components/home/canadapnp";
import WhychooseSection from "@/components/home/whychoose";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Registered Immigration Consultants In Noida | Legit Visa Expert",
  description:
    "Nexuscore Overseas is trusted Immigration Consultants in Noida. Experienced Immigration Consultants. Noida's Best Immigrtion Consultants with 100% Client Satisfaction.",
  keywords: [
    "Immigration Consultants In Noida",
    "Best Immigration Consultants In Delhi",
    "Best Immigration Consultants In Noida",
    "Visa Consultants in noida",
    "Immigration Consultants in India",
  ],
  alternates: {
    canonical: "https://www.nexuscoreoverseas.com/",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nexuscore Overseas",
  url: "https://www.nexuscoreoverseas.com/",
  description:
    "Nexuscore Overseas is trusted Immigration Consultants in Noida. Experienced Immigration Consultants. Noida's Best Immigration Consultants with 100% Client Satisfaction.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  areaServed: ["Noida", "Delhi", "India"],
  serviceType: "Immigration Consultancy",
};

export default function Home() {
  return (
    <>
      <Script
        id="schema-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="">
        <BannerSlider />
        <Greenbox />
        <AboutSection data={aboutdata} />
        <VisaSlider />
        <Country />
        <CountDown data={countDown} />
        <WorkProcessSlider />
        <Canadapnp />
        <WhychooseSection />
        <FaqSection />
        <Testimonials />
        <Blogs isHome={true} />
      </div>
    </>
  );
}