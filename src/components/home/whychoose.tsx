"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { Whychoose as data } from "@/data/homeData";
import { BiRightArrowAlt } from "react-icons/bi";
import Link from "next/link";

export default function WhychooseSection() {
  return (
    <motion.div
      variants={staggerContainer(0.1, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="xl:px-32 lg:px-28 md:px-20 sm:p-12 px-7 py-16 max-w-[1530px] mx-auto flex flex-wrap items-stretch justify-between gap-y-10 bg-white overflow-hidden relative"
    >

      {/* Left Content Section */}
      <motion.div
        variants={fadeIn("right", "tween", 0.3, 1)}
        className="sm:w-[47%] w-full sm:space-y-8 space-y-6"
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

        {data?.para && (
          <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
            {data?.para}
          </p>
        )}

        {/* Success Metrics with Enhanced Progress Bars */}
        <div className="space-y-6 pt-4">
          {data?.success?.map((item: any, index: number) => (
            <motion.div
              key={item?.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full group"
            >
              <div className="flex font-semibold justify-between mb-3">
                <h3 className="text-blue-700 text-base md:text-lg flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                  {item?.text}
                </h3>
                <p className="text-zinc-900 text-base md:text-lg font-bold">
                  {item?.value}
                </p>
              </div>

              <div className="w-full rounded-full h-3 overflow-hidden bg-gradient-to-r from-slate-200 to-zinc-200 shadow-inner relative">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: item?.value }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full relative overflow-hidden"
                  style={{ width: item?.value }}
                >
                  {/* Shimmer effect */}
                  <motion.div
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "linear",
                    }}
                    className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA Button */}
        <Link
          href="/discover"
          className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 px-8 py-4 text-base font-bold text-white shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 mt-8"
        >
          {/* Animated gradient background */}
          <motion.span
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 bg-gradient-to-r from-blue-600 via-pink-600 to-blue-600 bg-[length:200%_100%]"
          />

          {/* Glow effect */}
          <span className="absolute inset-0 rounded-full bg-white/30 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

          <span className="relative z-10 flex items-center gap-3">
            Discover More
            <BiRightArrowAlt
              size={22}
              className="transition-transform duration-500 group-hover:translate-x-2"
            />
          </span>
        </Link>
      </motion.div>

      {/* Right Image Section with Enhanced Effects */}
      <motion.div
        variants={fadeIn("left", "tween", 0.3, 1)}
        className="sm:w-[46%] w-full min-h-[500px] relative  group"
      >
        {/* Decorative frame */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 rounded-3xl opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-500" />
        
        {/* Main image container */}
        <div className=" h-full rounded-2xl hover14 shadow-2xl">
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent z-10" />
          
          {data?.img && (
            <Image
              title="Best immigration consultants in Delhi"
              src={data?.img}
              alt="Best immigration consultants in Delhi"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              width={800}
              height={600}
            />
          )}

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
            className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl z-20"
          >
            <p className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ⭐ Trusted by 10K+ Clients
            </p>
          </motion.div>


        </div>

        {/* Decorative corner elements */}
        <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-purple-300 rounded-tl-3xl opacity-50" />
        <div className="absolute -bottom-4 -left-4 w-24 h-24 border-4 border-blue-300 rounded-br-3xl opacity-50" />
      </motion.div>
    </motion.div>
  );
}