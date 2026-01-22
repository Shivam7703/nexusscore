"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";

function Section1({ aboutdata }: any) {
  return (
    <motion.div
      variants={staggerContainer(0.1, 0)} // Adjusted stagger settings
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="lg:px-28 md:p-20 sm:p-12 p-7 max-w-[1780px] mx-auto flex flex-wrap overflow-hidden justify-between gap-y-7 bg-white"
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.3, 1)}
        className="sm:w-[45%] w-full space-y-4 hover14 overflow-hidden"
      >
        <Image src={aboutdata?.img} alt="" className="w-full h-full object-cover min-h-80"/>
      
      </motion.div>

      <motion.div
        variants={fadeIn("left", "tween", 0.3, 1)}
        className="sm:w-[50%] w-full "
      >
        <div className="space-y-7 overflow-hidden">
        {aboutdata?.title1 && (
          <h4 className="text-green1 bg-zinc-100 px-7 font-bold text-sm rounded-lg py-3 w-max">
            {aboutdata?.title1}
          </h4>
        )}

        <h2 className="text-zinc-800 font-bold text-3xl md:text-5xl !leading-[1.3]">
          {aboutdata?.title2}{" "}
          <span className="text-green1">{aboutdata?.title3}</span>
        </h2>
          {aboutdata?.para1 && (
            <p className="text-zinc-600 text-sm md:text-base">
              {aboutdata?.para1}
            </p>
          )}
          {aboutdata?.para2 && (
            <p className="text-zinc-600 text-sm md:text-base">
              {aboutdata?.para2}
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Section1;
