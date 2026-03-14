import React from "react";
import { canadapnp as data } from "@/data/homeData";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

export default function Canadapnp() {
  return (
    <section className="lg:px-20 md:px-16 sm:p-12 p-6 text-center relative bg-zinc-800/10">
      {data?.title1 && (
         <h4 className="text-zinc-700  mx-auto mb-3 sm:mb-5 font-semibold uppercase text-sm border-2 border-blue-400 bg-gradient-to-r from-blue-50 via-violet-50 to-red-50 w-max px-4 py-2 rounded-full shadow-sm">
                        {data?.title1}
                      </h4>
      )}

      <h2 className="text-zinc-800 font-extrabold !leading-tight text-2xl md:text-4xl max-w-4xl mx-auto mb-10">
        {data.title2}
      </h2>

     <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-3 md:gap-8 max-w-7xl mx-auto">
        {data?.cards?.map((cou) => (
       <div
  key={cou.id}
  className="group relative rounded-[30px] overflow-hidden
             bg-white 
             border border-white
             shadow-[0_25px_60px_-20px_rgba(0,0,0,0.25)]
             transition-all duration-500
             hover:-translate-y-3 hover:shadow-[0_45px_90px_-25px_rgba(0,0,0,0.4)]"
>
  {/* IMAGE */}
  <div className="relative md:h-60 h-48 overflow-hidden">
    <Image
      src={cou.img}
      alt="Canada PNP"
      fill
      className="object-cover transition-transform rounded-t-3xl duration-700
                 group-hover:scale-110"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t
                    from-black/75 via-black/30 to-transparent" />

    {/* Title on Image */}
    <div className="absolute bottom-5 left-6 z-20 text-left">
      <h3 className="text-white text-xl font-semibold tracking-tight">
{cou?.heading}      </h3>
      <p className="text-white/80 text-sm">
        Provincial Nominee Program
      </p>
    </div>
  </div>

  {/* CONTENT */}
  <div className="relative px-7 py-10">

    {/* FLOATING FLAG */}
    <div className="absolute -top-9 right-6 z-30">
      <div className="relative">
      
        <Image
          src={cou.flag}
          alt="Canada"
          className="relative h-16 w-16 rounded-full
                     border-4 border-white shadow-xl"
        />
      </div>
    </div>

    {/* DESCRIPTION */}
    <p className="text-gray-600 text-sm leading-relaxed mb-6">
    {cou?.text}
    </p>

    {/* KEY DETAILS */}
    <div className="grid grid-cols-2 gap-4 mb-8">
      {cou?.points?.map((item, i) => (
        <div
          key={i}
          className="group/detail relative rounded-xl p-4
                     bg-white/80 backdrop-blur
                     border border-gray-200
                     transition-all duration-300
                     hover:-translate-y-1 shadow-lg"
        >
          
          <p className="font-semibold text-sm text-gray-900">
            {item}
          </p>

          <div className="absolute inset-0 rounded-xl opacity-0
                          group-hover/detail:opacity-20
                          bg-gradient-to-br from-indigo-400 to-purple-400
                          transition" />
        </div>
      ))}
    </div>

    {/* CTA */}
    <div className="flex justify-between items-center">
      <span className="inline-flex items-center gap-2 text-xs font-medium
                       px-4 py-2 rounded-full
                       bg-blue-100 text-blue-700">
        ✔ PR Pathway
      </span>

      <Link href={cou?.link}
        className="relative inline-flex items-center gap-3 px-7 py-3
             rounded-full text-sm font-medium text-white
                   bg-gradient-to-r from-red-600 via-rose-600 to-pink-600
                   shadow-lg hover:shadow-xl
                   transition-all duration-300 overflow-hidden"
      >
        <span className="relative z-10">Check Eligibility</span>
        <FaArrowRightLong className="relative z-10 text-sm" />
        {/* shine */}
        <span className="absolute inset-0 -translate-x-full
                         bg-gradient-to-r from-transparent
                         via-white/30 to-transparent
                         transition-transform duration-700
                         group-hover:translate-x-full" />
      </Link>
    </div>
  </div>
</div>

        ))}
      </div>
    </section>
  );
}
