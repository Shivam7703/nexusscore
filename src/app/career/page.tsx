import Commited from "@/components/about/mission";
import Section1 from "@/components/about/section1";
import Section2 from "@/components/about/section2";
import Section3 from "@/components/about/section3";
import Section4 from "@/components/about/section4";
import WhyWork from "@/components/career/whywork";
import Banner from "@/components/global/banner";
import FaqSection from "@/components/home/faq";
import HealthyLife from "@/components/home/healthylife";
import Testimonials from "@/components/home/testimonial";
import { careerBanner, whywork } from "@/data/homeData";
import { MdArrowRightAlt } from "react-icons/md";

export default function About() {
  return (
    <>
      <Banner
        img={careerBanner?.img}
        title={careerBanner.title}
        para={careerBanner.para}
        slug={careerBanner.slug}
      />

      {/* <Section1 aboutdata={aboutsec1}/> */}
      {/* <Section2/> */}
      <Section3 />
      {/* <Testimonials/> */}
      {/* <Commited/> */}
      {/* <FaqSection/> */}
      <WhyWork data={whywork} />
      <Section4 />
      <section className="lg:px-24 md:px-20 sm:p-16 p-6 text-center space-y-7  text-zinc-800">
        <h2 className="sm:text-4xl font-bold text-2xl">Join Our Journey</h2>
        <p className="text-zinc-600 text-lg md:text-xl font-semibold max-w-3xl mx-auto">
          Be part of a company that’s redefining modern farming with smart,
          simple, and sustainable agri-solutions. Let’s grow together—because
          when farmers thrive, the world thrives.
        </p>
        <a
          href={"mailto:career@wemblyinternational.com"}
          className="w-max mx-auto"
        >
          <div className="flex mx-auto mt-5  items-center rounded-3xl gap-4 text-nowrap px-6 py-2 text-green1 bg-zinc-300 duration-300 hover:bg-black hover:text-white w-max">
            <p className="text-sm font-bold">Send Your CV</p>
            <MdArrowRightAlt className="animate-x text-3xl" />
          </div>
        </a>
      </section>
    </>
  );
}
