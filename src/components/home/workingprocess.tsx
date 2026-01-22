"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

import { workingprocess as data } from "@/data/homeData";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";

export default function WorkProcessSlider() {
  const uniqueId = "working123";

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      clickable: true,
    },
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,
    modules: [Autoplay, Pagination, Navigation],
    breakpoints: {
      140: {
        slidesPerView: 1,
      },
      468: {
        slidesPerView: 2,
      },
      824: {
        slidesPerView: 3,
      },
      1124:{
        slidesPerView: 4,
      }
    },
  };

  return (
    <section className="lg:px-28 md:px-20 sm:p-12 p-6 text-center  relative">
      {data?.title1 && (
        <h4 className="text-blue-800 font-bold sm:text-lg mx-auto text-sm mb-2 border-blue-700 w-max border-b px-3 py-2">
          {data?.title1}
        </h4>
      )}
      <h2 className="text-zinc-800 font-extrabold !leading-tight text-2xl md:text-4xl max-w-2xl mx-auto">
        {data?.title2}
      </h2>

      {/* Swiper */}
      <Swiper
        {...swiperOptions}
        className={`mySwiper md:my-16 mt-9 w-full  px-5 ${uniqueId}`}
      >
        {data?.cards.map((card: any) => (
        <SwiperSlide key={card.id} className="mb-14 relative w-full group ">
  <div className="w-full overflow-hidden text-center border border-zinc-200 bg-zinc-200/40 backdrop-blur-md p-5">
    
    {/* STEP LABEL */}
    <div className="relative mb-6 flex  justify-center">
      <div className="relative inline-block border">
        {/* Horizontal lines */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px w-[400px] bg-black/50 -z-10" 
             style={{ left: '-190%' }} />
        {/* Step badge */}
        <div className="relative group-hover:bg-blue-700 bg-gray-900 text-white px-6 py-3 rounded-lg font-bold text-sm">
          STEP {String(card?.id).padStart(2, '0')}
        </div>
        
        {/* Red arrow/triangle pointing down */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-0 h-0 
                        border-l-[8px] border-l-transparent 
                        border-r-[8px] border-r-transparent 
                        border-t-[8px] group-hover:border-t-yellow-600 border-t-red-600" />
      </div>
    </div>

    {/* CIRCULAR IMAGE SECTION */}
    <div className="relative rounded-b-full hover14 z-40 mx-auto w-44 h-44 sm:w-60 sm:h-60 ">
      {/* Outer decorative circle */}
      <div className="absolute bg-white inset-0 rounded-full border-2 border-zinc-400 
                      transition-all duration-700 group-hover:border-yellow-700 
                      " />
      
      {/* Inner circle with image */}
      <div className="absolute inset-4 rounded-full  shadow-lg 
                      transition-transform duration-700 group-hover:scale-105">
        <Image
          alt="nexuscore"
          src={card?.img}
          width={600}
          height={400}
          className="w-full h-full object-cover transition-transform duration-700  
        "
        />
      </div>

      {/* Checkmark badge */}
      <div className="absolute top-2 right-2 z-10 
                      w-8 h-8 sm:w-10 sm:h-10 rounded-full 
                      bg-red-600 flex items-center justify-center 
                      shadow-lg transition-all duration-500 text-xl
                      group-hover:scale-110 group-hover:rotate-12">
        <FaCheckCircle />

      </div>

      {/* Bottom decorative curve */}
      <div className="absolute -bottom-8 left-0 right-0 h-20 bg-gradient-to-t from-gray-100 to-transparent rounded-b-[50%] -z-10 
                      transition-all duration-500
                      group-hover:from-blue-50" />
    </div>

    {/* CONTENT SECTION */}
    <div className="relative overflow-hidden pt-16 pb-8 p-6 bg-white shadow-lg -mt-12 rounded-lg
      ">

      {/* Decorative Background */}
      <div className="absolute h-0 w-full top-0 left-0 bg-gradient-to-br from-blue-900 via-violet-800
                   to-red-700 group-hover:h-full  transition-all duration-500"></div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-25 
                      transition-opacity duration-500 z-0">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full 
                        -mr-16 -mt-16" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full 
                        -ml-12 -mb-12" />
      </div>

      {/* TEXT CONTENT */}
      <div className="relative z-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-800 
                       group-hover:text-white transition-colors duration-300 
                       leading-tight mb-3">
          {card?.heading}
        </h2>

        <p className="text-sm md:text-base text-zinc-600 
                      group-hover:text-white/90 transition-colors duration-300 
                      line-clamp-3">
          {card?.text}
        </p>
      </div>
    </div>
  </div>
</SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons - Enhanced */}
      <div
        className={`${uniqueId}-next absolute z-30 p-3 hover:bg-blue-700 bg-blue-950 shadow-lg hover:shadow-xl text-white right-0 md:right-10 bottom-1/3 md:bottom-1/2 max-md:scale-75 rounded-full cursor-pointer transition-all duration-300 hover:scale-110`}
      >
        <FaArrowRightLong className="text-xl font-bold" />
      </div>
      <div
        className={`${uniqueId}-prev absolute z-20 rounded-full hover:bg-blue-700 p-3 bg-blue-950 shadow-lg hover:shadow-xl text-white left-0 md:left-10 bottom-1/3 md:bottom-1/2 max-md:scale-75 cursor-pointer transition-all duration-300 hover:scale-110`}
      >
        <FaArrowLeftLong className="text-xl font-bold" />
      </div>
    </section>
  );
}