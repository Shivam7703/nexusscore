import React from "react";
import { canadapnp as data } from "@/data/homeData";
import Image from "next/image";
import { FaArrowRightLong, FaCircleArrowRight, FaCircleCheck } from "react-icons/fa6";
import Link from "next/link";

export default function Canadapnp() {
  return (
    <section className="lg:px-20 md:px-16 sm:p-12 p-6 text-center relative bg-zinc-100">
      {data?.title1 && (
        <h4 className="text-blue-800 font-bold sm:text-lg mx-auto text-sm mb-2 border-blue-700 w-max border-b px-3 py-2">
          {data.title1}
        </h4>
      )}

      <h2 className="text-zinc-800 font-extrabold !leading-tight text-2xl md:text-4xl max-w-2xl mx-auto mb-10">
        {data.title2}
      </h2>

     <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {data?.cards?.map((cou) => (
          <div
            key={cou.id}
            className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
          >
            {/* Image Container with Overlay */}
            <div className="relative h-56 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Image
                src={cou.img}
                alt={cou.heading}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
                            
            </div>

            {/* Content */}
            <div className=" relative pt-10 pb-8 px-6 text-center space-y-4">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 !z-20">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                  <Image
                    src={cou.flag}
                    alt={cou.heading}
                    className="relative h-16 w-16 rounded-full border-4 border-white object-cover shadow-xl ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300"
                  />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                {cou.heading}
              </h2>
              
              <p className="text-gray-600 leading-relaxed min-h-[3rem]">
                {cou?.text}
              </p>

              {/* Enhanced Button */}
              <div className="pt-4">
                <button className="group/btn relative inline-flex items-center gap-3 px-8 py-3 overflow-hidden rounded-full border-2 border-gray-800 bg-white font-semibold text-gray-800 transition-all duration-300 hover:text-white hover:border-transparent">
                  <span className="relative z-20 text-sm tracking-wide">Learn more</span>
                  
                  <div className="relative z-20 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg group-hover/btn:shadow-xl group-hover/btn:scale-110 transition-all duration-300">
                    <FaArrowRightLong className="w-4 h-4 text-white" />
                  </div>
                  
                  {/* Animated Background */}
                  <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 group-hover/btn:w-full transition-all duration-500 ease-out"></div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </button>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-pink-400/20 to-yellow-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
