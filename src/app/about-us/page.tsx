import { bann } from "@/assets";
import Aboutchoose from "@/components/about/aboutchoose";
import Ourmission from "@/components/about/mission";
import Banner from "@/components/global/banner";
import AboutSection from "@/components/home/AboutSection";
import CountDown from "@/components/home/Contdown";
import Testimonials from "@/components/home/testimonial";
import { aboutdata2, countDown } from "@/data/homeData";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "About Nexuscore Overseas",
  description:
    "Nexuscore Overseas is a trusted name among Immigration Consultants in Noida and Visa Consultants in Delhi, offering expert guidance for study, work, and PR visas.",
  keywords: [
    "Immigration Consultants In Noida",
    "Visa Consultants In Delhi",
  ],
  alternates: {
    canonical: "https://www.nexuscoreoverseas.com/about-us",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Nexuscore Overseas",
  url: "https://www.nexuscoreoverseas.com/about-us",
  description:
    "Nexuscore Overseas is a trusted name among Immigration Consultants in Noida and Visa Consultants in Delhi, offering expert guidance for study, work, and PR visas.",
  publisher: {
    "@type": "Organization",
    name: "Nexuscore Overseas",
    url: "https://www.nexuscoreoverseas.com/",
  },
};

export default function About() {
  return (
    <>
      <Script
        id="schema-about-page"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Banner
        img={bann}
        title={"About Us"}
        para={
          "Experienced visa consultants in Noida deliver clear guidance, professional support, and reliable immigration solutions for global opportunities."
        }
        slug={"about-us"}
      />
      <AboutSection data={aboutdata2} />
      <CountDown data={countDown} />
      <Ourmission />
      <Aboutchoose />
      <Testimonials />
    </>
  );
}