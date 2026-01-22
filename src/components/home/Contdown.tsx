"use client";
import { useState } from "react";
import { banner2 } from "@/assets";
import Image from "next/image";
import CountUp from "react-countup";
import { BsPlayCircle } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

function CountDown({ data }: any) {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <Image
        src={banner2}
        alt="banner"
        fill
        className="object-cover -z-0"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80 z-1" />

      {/* Play Button */}
      <div
        onClick={() => setOpen(true)}
        className="cursor-pointer text-center text-white mx-auto w-max lg:my-32 md:my-28 sm:my-24 my-16 group"
      >
        <div className="relative">
          <span className="absolute inset-0 rounded-full  "></span>
          <BsPlayCircle className="relative sm:text-7xl mx-auto text-4xl group-hover:scale-110 transition duration-300" />
        </div>
        <p className="text-sm animate-pulse tracking-widest mt-3 uppercase ">
          Click to play
        </p>
      </div>

      {/* Counter Box */}
      <div className="relative bg-gradient-to-br from-red-600 to-violet-800 w-full md:py-10 sm:px-14 px-4 mx-auto flex flex-wrap sm:gap-y-12 max-w-7xl lg:rounded-2xl justify-between shadow-2xl">
        {data?.map((counts: any) => (
          <div
            key={counts?.id}
            className="text-center lg:w-1/4 w-1/2 md:px-12 p-4 border-white/30 lg:border-r lg:[&:nth-child(4)]:border-r-0"
          >
            <div className="text-white mb-3 xl:text-6xl md:text-4xl sm:text-3xl text-2xl font-extrabold">
              <CountUp
                start={0}
                end={counts?.Value}
                duration={2.8}
                separator=","
              />
              {counts?.icon}
            </div>

            <h3 className="font-medium text-sm sm:text-xl text-white/90">
              {counts?.title}
            </h3>
          </div>
        ))}
        {/* Mobile separators */}
      <div className="lg:hidden absolute h-[90%] w-[1px] bg-white/40 top-[5%] left-1/2"></div>
      <div className="lg:hidden absolute w-[90%] h-[1px] bg-white/40 left-[5%] top-1/2"></div>
      </div>

    
      {/* YouTube Modal */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 z-20 text-white text-3xl hover:scale-110 transition"
            >
              <IoClose />
            </button>

            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/D0UnqGm_miA?si=2ewef1gT4SgNhGWg?autoplay=1"
              title="YouTube video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default CountDown;
