
import Image from "next/image";
import Link from "next/link";

import { workingprocess as data } from "@/data/homeData";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";

export default function WorkProcessSlider() {

 

  return (
    <section className="lg:px-28 md:px-20 sm:p-12 py-9 p-2 text-center bg-zinc-900/5 relative">
      {data?.title1 && (
         <h4 className="text-zinc-700  mx-auto mb-3 sm:mb-5 font-semibold uppercase text-sm border-2 border-blue-400 bg-gradient-to-r from-blue-50 via-violet-50 to-red-50 w-max px-4 py-2 rounded-full shadow-sm">
                  {data?.title1}
                </h4>
      )}
      <h2 className="text-zinc-800 font-extrabold !leading-tight text-2xl md:text-4xl max-w-2xl mx-auto">
        {data?.title2}
      </h2>

      <div
        className={`grid grid-cols-2 md:grid-cols-4 md:mt-16 gap-y-5 mt-3 w-full `}
      >
        {data?.cards.map((card: any) => (
     <div key={card.id} className=" relative w-full group ">
  <div className="w-full overflow-hidden text-center sm:p-5 p-2">

    {/* STEP LABEL */}
    <div className="relative mb-6 flex justify-center">
      <div className="relative inline-block">
        {/* Horizontal connector line */}
        <div
          className="absolute top-1/2 -translate-y-1/2 h-px bg-zinc-600 -z-10"
          style={{ left: "-190%", width: "450px" }}
        />
        {/* Step badge */}
        <div className="relative bg-gradient-to-r from-slate-800 to-slate-900 group-hover:from-indigo-600 group-hover:to-blue-500 text-white px-7 py-2.5 rounded-full font-bold text-xs tracking-widest uppercase shadow-lg transition-all duration-500">
          Step {String(card?.id).padStart(2, "0")}
        </div>
        {/* Arrow down */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-[9px] w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[9px] border-t-slate-900 group-hover:border-t-blue-500 transition-colors duration-500" />
      </div>
    </div>

    {/* POLYGONAL IMAGE SECTION */}
    <div className="relative mx-auto w-44 h-44 sm:w-60 sm:h-60 z-40">

      {/* Rotating gradient ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400 via-sky-400 to-emerald-400 group-hover:from-amber-400 group-hover:via-rose-400 group-hover:to-indigo-500 transition-all duration-700  overflow-hidden"  style={{
          clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
        }}/>

      {/* White gap ring */}
      <div className="absolute inset-[3px] overflow-hidden bg-white"  style={{
          clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
        }}/>

      {/* Polygonal clip image */}
      <div
        className="absolute inset-[10px] overflow-hidden shadow-xl transition-transform duration-700 group-hover:scale-105"
       style={{
          clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
        }}
      >
        <Image
          alt="nexuscore"
          src={card?.img}
          width={600}
          height={400}
          className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700"
      style={{
          clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
        }}  />
        {/* Shimmer overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/30 via-transparent to-white/10 group-hover:opacity-0 transition-opacity duration-500" />
      </div>

      {/* Check badge */}
      <div className="absolute top-9 right-1 z-10 w-9 h-9 rounded-full bg-gradient-to-br from-rose-500 to-orange-500 group-hover:from-emerald-400 group-hover:to-teal-500 flex items-center justify-center shadow-lg text-white text-base transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
        <FaCheckCircle />
      </div>

    </div>

    {/* CONTENT CARD */}
    <div className="relative overflow-hidden pt-14 md:pt-20 pb-7 sm:px-6 px-3 -mt-12 md:-mt-16 sm:rounded-2xl rounded-lg shadow-lg border border-slate-100 bg-white group-hover:border-indigo-100 transition-all duration-500">

      {/* Animated gradient background fill */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-blue-700 to-slate-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />


      {/* Text */}
      <div className="relative z-10">
        <h2 className="text-lg sm:text-xl font-extrabold text-slate-800 group-hover:text-white transition-colors duration-300 leading-snug mb-2 tracking-tight">
          {card?.heading}
        </h2>
        <div className="w-8 h-[2px] bg-indigo-400 group-hover:bg-white/50 mx-auto mb-3 group-hover:w-20 transition-all duration-500 rounded-full" />
        <p className="md:text-lg text-slate-800 group-hover:text-slate-200 transition-colors duration-300 leading-relaxed line-clamp-3">
          {card?.text}
        </p>
      </div>
    </div>

  </div>
</div>

        ))}
      </div>

     
    </section>
  );
}