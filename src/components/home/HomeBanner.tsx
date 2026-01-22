"use client";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { sliderText } from "@/utils/motion";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { MdArrowRightAlt } from "react-icons/md";
import { sliderContent } from "@/data/homeData";

export default function HomeBanner() {
  const uniqueId = "banner12376";
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay, EffectFade, Navigation],
    effect: "fade",
    onSlideChange: (swiper: any) => setCurrentSlide(swiper.realIndex), // Update slide index on change
  };

  return (
    <section className="swiperstyle1 relative">
      <Swiper {...swiperOptions} className="mySwiper ">
        {sliderContent.map((item, index) => (
          <SwiperSlide key={index} className="overflow-hidden ">
            <Image
              title="Best immigration consultants in Delhi"
              src={item.img} // Use the dynamic image passed in
              className="h-full !w-full max-h-[700px] object-contain md:object-right"
              alt="Immigration consultants in Delhi NCR"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation buttons */}
      <div
        className={`${uniqueId}-next absolute z-40 font-bold text-4xl text-green2 right-3 top-[55%] max-md:!hidden`}
      >
        <GrNext />
      </div>
      <div
        className={`${uniqueId}-prev absolute z-40 font-bold text-4xl  text-green2 left-3 md:top-[55%] max-md:!hidden`}
      >
        <GrPrevious />
      </div>
    </section>
  );
}

