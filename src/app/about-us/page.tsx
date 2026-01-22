import { bann } from "@/assets";
import Aboutchoose from "@/components/about/aboutchoose";
import Ourmission from "@/components/about/mission";
import Commited from "@/components/about/mission";
import Section1 from "@/components/about/section1";
import Section2 from "@/components/about/section2";
import Section3 from "@/components/about/section3";
import Section4 from "@/components/about/section4";
import Banner from "@/components/global/banner";
import AboutSection from "@/components/home/AboutSection";
import CountDown from "@/components/home/Contdown";
import Testimonials from "@/components/home/testimonial";
import { countDown } from "@/data/homeData";

export default function About() {
  return (
    <>
      <Banner
        img={bann}
        title={"About Us"}
        para={
          "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
        slug={"about-us"}
      />
      <AboutSection />
      <CountDown data={countDown} />
      <Ourmission /> 
      <Aboutchoose/>
    </>
  );
}
