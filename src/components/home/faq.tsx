"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { HomefaqData as data } from "@/data/homeData";
import Faqs from "../global/faqs";

export default function FaqSection() {
  return (
    <motion.div
      variants={staggerContainer(0.1, 0)} // Adjusted stagger settings
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="xl:px-32 lg:px-28 md:px-20 sm:p-12 px-7 py-11 max-w-[1530px] mx-auto flex flex-wrap items-stretch justify-between gap-y-7 bg-zinc-100 overflow-hidden"
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.3, 1)}
        className="md:w-[47%] w-full  space-y-6"
      >
        {data?.title1 && (
         <motion.h4
                    whileHover={{ scale: 1.05 }}
                    className="text-zinc-700 font-semibold sm:text-base text-sm border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50 w-max px-4 py-2 rounded-full shadow-sm"
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

        <div className="grid grid-cols-1 sm:grid-cols-3 sm:p-5 p-7 gap-5 w-full bg-white">
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

const CircularProgress = ({ value, title }: any) => {
  // Mobile & Desktop sizes
  const sizeMobile = 320;   // BIG on mobile
  const sizeDesktop = 150;  // Normal on desktop

  const strokeWidth = 14;

  const radiusMobile = (sizeMobile - strokeWidth) / 3;
  const radiusDesktop = (sizeDesktop - strokeWidth) / 2;

  const circumferenceMobile = 2 * Math.PI * radiusMobile;
  const circumferenceDesktop = 2 * Math.PI * radiusDesktop;

  return (
    <div className="flex flex-col items-center group">
      <div className="relative sm:w-40 sm:h-40 w-80 h-80">
        {/* Glow */}
        <div className="absolute inset-0 rounded-full blur-lg opacity-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600 group-hover:opacity-10 transition-all" />

        {/* MOBILE SVG */}
        <svg
          viewBox={`0 0 ${sizeMobile} ${sizeMobile}`}
          className="sm:hidden w-full h-full -rotate-90"
        >
          <defs>
            <linearGradient id={`progress-${title}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="50%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>

          <circle
            cx={sizeMobile / 2}
            cy={sizeMobile / 2}
            r={radiusMobile}
            stroke="#e5e7eb"
            strokeWidth={strokeWidth}
            fill="none"
          />

          <circle
            cx={sizeMobile / 2}
            cy={sizeMobile / 2}
            r={radiusMobile}
            stroke={`url(#progress-${title})`}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumferenceMobile}
            strokeDashoffset={
              circumferenceMobile - (value / 100) * circumferenceMobile
            }
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>

 {/* DESKTOP SVG */}
<svg
  viewBox={`0 0 ${sizeDesktop} ${sizeDesktop}`}
  className="hidden sm:block w-full h-full -rotate-90"
>
  <defs>
    <linearGradient
      id={`progress-${title}-desktop`}
      x1="0%"
      y1="0%"
      x2="100%"
      y2="100%"
    >
      <stop offset="0%" stopColor="#60a5fa" />
      <stop offset="50%" stopColor="#6366f1" />
      <stop offset="100%" stopColor="#8b5cf6" />
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
    stroke={`url(#progress-${title}-desktop)`}
    strokeWidth={strokeWidth}
    fill="none"
    strokeDasharray={circumferenceDesktop}
    strokeDashoffset={
      circumferenceDesktop - (value / 100) * circumferenceDesktop
    }
    strokeLinecap="round"
    className="transition-all duration-1000 ease-out"
  />
</svg>



        {/* Center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="sm:w-24 sm:h-24 w-40 h-40 rounded-full bg-white shadow-lg flex items-center justify-center">
            <span className="sm:text-3xl text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              {value}%
            </span>
          </div>
        </div>
      </div>

      {/* Title */}
      <h3 className="sm:mt-2 sm:text-2xl -mt-7 text-3xl font-extrabold text-transparent bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 bg-clip-text text-center">
        {title}
      </h3>
    </div>
  );
};


