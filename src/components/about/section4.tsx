"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { com } from "@/assets";

export default function Section4() {
  return (
    <section className=" text-zinc-900 flex flex-wrap justify-between items-stretch overflow-hidden">
      <div className="lg:w-[48%] group w-full min-h-52  relative  ">
        <Image
          src={com}
          alt="img"
          className="absolute top-0 left-0 z-0 w-full h-full  object-cover"
        />
      </div>

      <motion.div
        variants={staggerContainer(0.1, 0)} // Adjusted stagger settings
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="lg:w-[52%] w-full md:px-24 md:py-16 p-8 bg-brown2 text-white"
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.3, 1)}
          className="space-y-7 "
        >
          <h2 className="sm:text-4xl font-bold text-2xl">Life at nexus</h2>

          <p className="text-zinc-200 ">
            At nexus, we combine science with passion. Our culture is built
            around teamwork, trust, and transformation—where your ideas can take
            root and grow. Whether you’re in R&D, sales, marketing, or field
            operations, you’ll be part of a community that values integrity,
            innovation, and impact.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
