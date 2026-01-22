"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialData as data } from "@/data/homeData";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function Testimonials() {
  const uniqueId = "servic123";

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      clickable: true,
      // dynamicBullets: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      140: {
        slidesPerView: 1,
      },

      1024: {
        slidesPerView: 2,
      },
    },
    speed: 1200,
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay, Pagination, Navigation],
  };
// bg-back
  return (
    <section className=" lg:px-28 md:px-20 sm:p-12 p-6  text-center relative flex flex-col items-center">
      <div className="w-full text-center flex flex-col items-center gap-y-3 mb-8 ">
         {data?.title1 && (
              <h4 className="text-blue-800 font-bold sm:text-lg mx-auto text-sm mb-2 border-blue-700 w-max border-b px-3 py-2">
                {data.title1}
              </h4>
            )}
      
            <h2 className="text-zinc-800 font-extrabold !leading-tight text-2xl md:text-4xl max-w-2xl mx-auto mb-10">
              {data.title2}
            </h2>
      </div>

      <Swiper
        {...swiperOptions}
        className={`mySwiper w-full max-w-6xl mx-auto px-5 ${uniqueId}`}
      >
        {" "}
 {data?.testimonials?.map((cards: any) => (
  <SwiperSlide
    key={cards.id}
    className="mb-12 sm:pl-16 w-full sm:text-left text-center"
  >
    
    <div className="relative flex max-sm:flex-wrap  max-sm:flex-col gap-4 items-center p-6 sm:p-8 w-full h-full bg-white shadow-xl overflow-visible group">
   {/* Profile Image Circle - Positioned at top */}

        <div className="relative z-30 min-w-36 min-h-36 sm:-ml-24">
          {/* Outer decorative ring */}
          <div className="w-full h-full rounded-full bg-gradient-to-br from-red-500 via-red-600 to-slate-800 p-2">
            <div className="w-full h-full rounded-full bg-white p-2">
              <div className="overflow-hidden w-full h-full rounded-full">
                <Image
                  src={cards.img}
                  alt={cards.title}
                  width={144}
                  height={144}
                  className="transition-all duration-500 w-full h-full object-cover object-center group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      {/* Vertical colored bar on left side */}
      <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-b from-red-500 via-red-600 to-red-900 " />

      {/* Content Area */}
      <div className="">
        <div className="flex gap-1 mb-4 max-sm:justify-center">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 fill-red-500"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="text-gray-600 text-base leading-relaxed mb-6">
          {cards.text}
        </p>

        {/* Author Info */}
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-slate-900">
            {cards.title}
          </h3>
          <p className="text-red-500 font-medium text-sm">
            Customers
          </p>
        </div>
      </div>
</div>
      {/* Large Quote Mark */}
      <div className="absolute bottom-6 right-8 text-red-200 opacity-40">
        <svg
          className="w-20 h-20"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <path d="M0 42.5h17.5c0-9.665 7.835-17.5 17.5-17.5V7.5C15.536 7.5 0 23.036 0 42.5zM52.5 42.5H70c0-9.665 7.835-17.5 17.5-17.5V7.5C68.036 7.5 52.5 23.036 52.5 42.5z" />
          <path d="M17.5 47.5H0v45h45v-45H17.5zm52.5 0H52.5v45h45v-45H70z" />
        </svg>
    </div>

  </SwiperSlide>
))}
      </Swiper>
       <div
              className={`${uniqueId}-next absolute z-30 p-3 hover:bg-blue-700 bg-blue-950 shadow-lg hover:shadow-xl text-white right-0 md:right-10 bottom-1/3  max-md:scale-75 rounded-full cursor-pointer transition-all duration-300 hover:scale-110`}
            >
              <FaArrowRightLong className="text-xl font-bold" />
            </div>
            <div
              className={`${uniqueId}-prev absolute z-20 rounded-full hover:bg-blue-700 p-3 bg-blue-950 shadow-lg hover:shadow-xl text-white left-0 md:left-10 bottom-1/3 max-md:scale-75 cursor-pointer transition-all duration-300 hover:scale-110`}
            >
              <FaArrowLeftLong className="text-xl font-bold" />
            </div>
    </section>
  );
}
