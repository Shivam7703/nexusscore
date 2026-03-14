import { bann } from "@/assets";
import Aboutchoose from "@/components/about/aboutchoose";
import Ourmission from "@/components/about/mission";
import CareerPage from "@/components/career/careers";
import WhoWeAreLooking from "@/components/career/lookingfor";

import Banner from "@/components/global/banner";
import AboutSection from "@/components/home/AboutSection";
import CountDown from "@/components/home/Contdown";
import Testimonials from "@/components/home/testimonial";
import { aboutdata2, countDown } from "@/data/homeData";

export default function About() {
  return (
    <>
      <Banner
        img={bann}
        title={"Career"}
        para={
          "Experienced visa consultants in Noida deliver clear guidance, professional support, and reliable immigration solutions for global opportunities."
        }
        slug={"Career"}
      />
      <CareerPage/>
      <WhoWeAreLooking/>
    </>
  );
}
