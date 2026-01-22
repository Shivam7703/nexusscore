import AboutSection from "@/components/home/AboutSection";
import Benifit from "@/components/home/benifit";

import Blogs from "@/components/home/blog";
import CountDown from "@/components/home/Contdown";
import Greenbox from "@/components/home/greenbox";
import BannerSlider from "@/components/home/HomeBanner";
import Testimonials from "@/components/home/testimonial";
import WhyChoose from "@/components/home/whychoose";
import { countDown } from "@/data/homeData";
import HealthyLife from "@/components/home/healthylife";
import FaqSection from "@/components/home/faq";
import Product from "@/components/products/product";
import ServiceSlider from "@/components/about/section2";
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
<Blogs/>

{/* 
<section className='lg:px-28 md:p-20 sm:p-14 p-6'>
<h2 className="text-zinc-800 text-3xl text-center pb-7 sm:pb-9 md:text-5xl font-bold">
                    All Products
                  </h2>
<Product isslider ={true} categ={""}/>
</section>

<Benifit data = {benefit}/>
<WhyChoose aboutdata={whychoose}/>
<HealthyLife data = {healthy}/>
<FaqSection/> */}
{/* <Partner/> */}
{/* <ServiceSlider/>
<Blogs/> */}
  </div>
  );
}
