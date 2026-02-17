"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

import { visaSliderdata as data } from "@/data/homeData";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function VisaSlider() {
  const uniqueId = "tourpack123";

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
      924: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <section className="lg:px-28 md:px-20 sm:p-12 p-6 text-center bg-zinc-100 relative slider1">
      {data?.title1 && (
        <h4 className="text-zinc-700  mx-auto mb-3 sm:mb-5 font-semibold uppercase text-sm border-2 border-blue-400 bg-gradient-to-r from-blue-50 via-violet-50 to-red-50 w-max px-4 py-2 rounded-full shadow-sm">
          {data?.title1}
        </h4>
      )}
      <h2 className="text-zinc-800 max-w-2xl mx-auto font-extrabold !leading-tight text-2xl md:text-4xl">
        {data?.title2}
      </h2>

      {/* Swiper */}
      <Swiper
        {...swiperOptions}
        className={`mySwiper md:mt-12 my-8 w-full max-w-6xl px-5 ${uniqueId}`}
      >
        {data?.cards.map((card: any) => (
          <SwiperSlide key={card.id} className="mb-14 mt-3 w-full group">
  <div className="w-full text-center text-white bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
    {/* IMAGE SECTION */}
    <div className="relative h-44 sm:h-52 overflow-hidden">
      <Image
        alt="nexuscore"
        src={card?.img}
        width={600}
        height={400}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Floating Badge */}
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-blue-800 text-xs font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
        Featured
      </div>
    </div>

    {/* CONTENT SECTION */}
    <div className="relative p-6 bg-white group-hover:bg-gradient-to-br group-hover:from-blue-800 group-hover:to-blue-900 transition-all duration-500">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full -ml-12 -mb-12" />
      </div>

      {/* NUMBER BADGE */}
      <div className="relative mx-auto -mt-14 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-700 to-blue-900 border-4 border-white text-3xl font-bold shadow-xl transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
        <span className="text-white">{card?.id}</span>
        {/* <div className="absolute inset-0 rounded-full bg-blue-600  opacity-0 group-hover:opacity-75" /> */}
      </div>

      {/* TEXT CONTENT */}
      <div className="relative">
        <h2 className="mt-3 md:mt-4 text-lg sm:text-xl font-bold text-zinc-800 group-hover:text-white transition-colors duration-300 leading-tight">
          {card?.heading}
        </h2>

        <p className="mt-2 md:mt-3 text-sm md:text-base text-zinc-600 group-hover:text-white/90 transition-colors duration-300 line-clamp-3">
          {card?.text}
        </p>
      </div>
    </div>

    {/* BUTTON SECTION */}
    <Link
      href="/services"
      className="relative flex items-center justify-center gap-2 p-4 font-semibold text-sm text-white bg-black overflow-hidden group-hover:bg-black transition-all duration-500"
    >
      <div className="absolute top-0 left-0 h-full rounded-b-lg w-0 bg-gradient-to-r from-red-700  to-red-500 group-hover:w-full group-hover:h-full transition-all duration-500" />
      <span className="relative z-10">Learn More</span>
      <FaArrowRightLong className="relative z-10 text-xs transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
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
