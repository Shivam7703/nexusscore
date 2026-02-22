"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { HomefaqData as data } from "@/data/homeData";
import Faqs from "../global/faqs";
import { useEffect, useRef, useState } from "react";

export default function FaqSection() {
  return (
    <motion.div
      variants={staggerContainer(0.1, 0)} // Adjusted stagger settings
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="xl:px-32 lg:px-28 md:px-20 sm:p-12 px-7 py-11 max-w-[1530px] mx-auto flex flex-wrap items-stretch justify-between gap-y-7 bg-zinc-100/90 overflow-hidden"
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.3, 1)}
        className="md:w-[47%] w-full  space-y-6"
      >
        {data?.title1 && (
          <motion.h4
            whileHover={{ scale: 1.05 }}
            className="text-zinc-700  mb-3 sm:mb-5 font-semibold uppercase text-sm border-2 border-blue-400 bg-gradient-to-r from-blue-50 via-violet-50 to-red-50 w-max px-4 py-2 rounded-full shadow-sm"
          >
            {data?.title1}
          </motion.h4>
        )}
        <h2 className="text-zinc-900 font-extrabold text-3xl md:text-5xl leading-tight">
          {data?.title2}
          <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {data?.title3}
          </span>
        </h2>

        {data?.para1 && (
          <p className="text-zinc-800 text-sm md:text-base">{data?.para1}</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-3 sm:p-5 p-7 gap-5 w-full bg-gradient-to-br from-blue-50 via-white to-red-50 shadow-xl rounded-xl">
          {data?.Counts?.map((item, index) => (
            <CircularProgress
              key={index}
              value={item.value}
              title={item.title}
            />
          ))}
        </div>

        {data?.para2 && (
          <p className="text-zinc-800 text-sm md:text-base">{data?.para2}</p>
        )}
      </motion.div>

      <motion.div
        variants={fadeIn("left", "tween", 0.3, 1)}
        className="md:w-[46%] w-full min-h-[450px] relative  group"
      >
        <Faqs data={data?.faqs} />
      </motion.div>
    </motion.div>
  );
}


const CircularProgress = ({
  value,
  title,
}: {
  value: number;
  title: string;
}) => {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Sizes
  const sizeMobile = 120;
  const sizeDesktop = 150;
  const strokeWidth = 10;

  const radiusMobile = (sizeMobile - strokeWidth) / 2;
  const radiusDesktop = (sizeDesktop - strokeWidth) / 2;

  const circumferenceMobile = 2 * Math.PI * radiusMobile;
  const circumferenceDesktop = 2 * Math.PI * radiusDesktop;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setAnimated(true),
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const offsetMobile = animated
    ? circumferenceMobile - (value / 100) * circumferenceMobile
    : circumferenceMobile;

  const offsetDesktop = animated
    ? circumferenceDesktop - (value / 100) * circumferenceDesktop
    : circumferenceDesktop;

  const id = title.replace(/\s+/g, "-");

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-4 select-none "
    >
      {/* MOBILE */}
      <div className="relative sm:hidden w-[120px] h-[120px]">
        <svg
          viewBox={`0 0 ${sizeMobile} ${sizeMobile}`}
          className="-rotate-90"
        >
          <defs>
            <linearGradient
              id={`grad-${id}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>

          {/* Track */}
          <circle
            cx={sizeMobile / 2}
            cy={sizeMobile / 2}
            r={radiusMobile}
            stroke="#e5e7eb"
            strokeWidth={strokeWidth}
            fill="none"
          />

          {/* Progress */}
          <circle
            cx={sizeMobile / 2}
            cy={sizeMobile / 2}
            r={radiusMobile}
            stroke={`url(#grad-${id})`}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumferenceMobile}
            strokeDashoffset={offsetMobile}
            strokeLinecap="round"
            style={{
              transition: "stroke-dashoffset 1.2s ease",
            }}
          />
        </svg>

        {/* VALUE CIRCLE */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-xl rounded-full flex items-center justify-center">
            <span className="text-2xl font-semibold text-gray-900">
              {value}%
            </span>
          </div>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="relative hidden sm:block w-[150px] h-[150px] ">
        <svg
          viewBox={`0 0 ${sizeDesktop} ${sizeDesktop}`}
          className="-rotate-90"
        >
          <defs>
            <linearGradient
              id={`grad-${id}-d`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>

          <circle
            cx={sizeDesktop / 2}
            cy={sizeDesktop / 2}
            r={radiusDesktop}
            stroke="#e5e7eb"
            strokeWidth={strokeWidth}
            fill="none"
          />

          <circle
            cx={sizeDesktop / 2}
            cy={sizeDesktop / 2}
            r={radiusDesktop}
            stroke={`url(#grad-${id}-d)`}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumferenceDesktop}
            strokeDashoffset={offsetDesktop}
            strokeLinecap="round"
            style={{
              transition: "stroke-dashoffset 1.2s ease",
            }}
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center hover:scale-90 duration-300">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-50 to-purple-50 shadow-xl rounded-full flex items-center justify-center">
            <span className="text-3xl font-semibold text-gray-900">
              {value}%
            </span>
          </div>
        </div>
      </div>

      {/* TITLE */}
      <p
        className=" sm:text-lg font-bold text-center
                   bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600
                   bg-clip-text text-transparent"
      >
        {title}
      </p>
    </div>
  );
};






