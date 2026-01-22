"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { aboutdata as data } from "@/data/homeData";
import { BiRightArrowAlt } from "react-icons/bi";
import Link from "next/link";

export default function AboutSection() {
  return (
<section className="xl:px-32 lg:px-24 md:p-20 sm:p-12 p-7 max-w-[1730px] mx-auto" >

    <motion.div
      variants={staggerContainer(0.1, 0)} // Adjusted stagger settings
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className=" lg:px-16 bg-white/60 backdrop-blur-sm shadow-xl rounded-xl sm:p-12 p-6 mx-auto flex flex-wrap items-stretch justify-between gap-y-7  overflow-hidden"
    >

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
          <p className="text-zinc-600 text-sm md:text-base">{data?.para}</p>
        )}

<div className="grid sm:grid-cols-2 gap-4">
        {data?.pointer?.map((item: any) => (
         <div key={item?.id} className="flex gap-4">
<div className="w-1/5 text-5xl text-blue-950">{item?.icon}</div>
<div className="space-y-2 w-full"><h3 className="text-blue-800 text-lg sm:text-xl  font-bold">{item?.heading}</h3>
<p className="text-zinc-600">{item?.text}</p></div>
         </div>
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


      <motion.div
        variants={fadeIn("left", "tween", 0.3, 1)}
        className="sm:w-[46%] w-full min-h-[450px] relative  group"
      >
        <div className="space-y-7 overflow-hidden hover14 relative h-full ">
      l    {data?.img1 && (
            <Image
              title="Best immigration consultants in Delhi"
              src={data?.img1}
              alt="Best immigration consultants in Delhi"
              className="absolute bottom-0 right-0 h-[100%] w-full sm:w-[80%] object-cover"
            />
          )}
        </div>

      <div className="absolute -left-2 bottom-3 rounded-xl z-10 group-hover:left-5 group-hover:bottom-7 duration-300 transition-all bg-white px-5 py-4 shadow-xl">
  <div className="flex items-center gap-4">
    
    {/* Circle Progress */}
    <div className="relative flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500">
      <span className="text-lg font-bold text-white">98%</span>
    </div>
    
    {/* Text */}
    <div>
      <p className="text-sm font-medium text-zinc-700 md:text-base">
        Success Rate
      </p>
      <p className="text-lg font-bold text-zinc-900 md:text-xl">
        Proven Results
      </p>
    </div>
  </div>
</div> 
      
      </motion.div>

    </motion.div>

    </section>
  );
}

