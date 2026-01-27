import AboutSection from "@/components/home/AboutSection";

import Blogs from "@/components/home/blog";
import CountDown from "@/components/home/Contdown";
import Greenbox from "@/components/home/greenbox";
import BannerSlider from "@/components/home/HomeBanner";
import Testimonials from "@/components/home/testimonial";
import { countDown } from "@/data/homeData";
import FaqSection from "@/components/home/faq";
import VisaSlider from "@/components/home/visaslider";
import Country from "@/components/home/country";
import WorkProcessSlider from "@/components/home/workingprocess";
import Canadapnp from "@/components/home/canadapnp";
import WhychooseSection from "@/components/home/whychoose";

export default function Home() {
  return (
    <div className="">
<BannerSlider/>
<Greenbox/>
<AboutSection/>
<VisaSlider/>
<Country/>
<CountDown data={countDown}/>
<WorkProcessSlider/>
<Canadapnp/>
<WhychooseSection/>
<FaqSection/>
<Testimonials/>
<Blogs isHome={true} />


  </div>
  );
}
