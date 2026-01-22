import React from 'react'
import { FaHatCowboy } from 'react-icons/fa6'
import { GiFarmer, GiPlantRoots } from 'react-icons/gi';
import { ImLab } from 'react-icons/im';
import { SiCodeclimate } from 'react-icons/si';

function Sustainsec2() {
const data = [
  {
    id: 1,
    icon: <GiFarmer />,
    heading: "Biodegradable Solutions for Safer Farming",
    subheading: "Wembley innovates biodegradable pesticides and herbicides",
    text: "Wembley innovates biodegradable pesticides and herbicides with reduced environmental effects and protection for crops. Our solutions are designed to be safe for soil & water."
  },
  {
    id: 2,
    icon: <SiCodeclimate />,
    heading: "Climate-Resilient Farming Solutions",
    subheading: "Helping Crops Survive Changing Weather",
    text: "Innovative formulations help crops adapt to ever-changing climate conditions to keep up the regular production. We ensure stable yields year after year."
  },
  {
    id: 3,
    icon: <ImLab />,
    heading: "Research-Driven Sustainable Practices",
    subheading: "Developing Safer, Nature-Friendly Products",
    text: "Wembley is investing in scientific breakthroughs that help to develop nature-friendly, safe, and efficient crop protection goods with minimal impact on the environment."
  },
  {
    id: 4,
    icon: <GiPlantRoots />,
    heading: "Soil Health & Regeneration",
    subheading: "Protecting Soil for Long-Term Growth",
    text: "Our products ensure soil fertility, hence no degradation and continued agricultural sustainability. By enhancing microbial activity, our products promote stronger plant growth."
  }
];

  return (
    <section className="flex flex-wrap gap-y-4 justify-between md:p-20 sm:14 p-7 !pt-7 text-center relative overflow-hidden">
{data?.map((card:any)=>(
  <div key={card.id} className='sm:w-[48%] md:w-[24%] w-full bg-white shadow-md rounded-xl border-zinc-400 text-center space-y-4 border hover:bg-slate-100 p-6 sm:py-12'>
    <div className='mx-auto text-4xl text-green-800 w-max'>{card?.icon}</div>
    <h2 className='text-green-950 font-bold sm:text-[22px] text-xl'>{card?.heading}</h2>
    {/* <h3 className='text-green-950 font2 sm:text-xl text-lg '>{card?.subheading}</h3> */}
<p className='text-zinc-600'>{card?.text}</p>
  </div>
))}

      <div className="absolute bg-blue-200 bottom-0 left-0 h-2/4 -z-10 w-full max-md:hidden"></div>
    </section>
  )
}

export default Sustainsec2
