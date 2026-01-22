import React from "react";
import { countrytomigrate as data } from "@/data/homeData";
import Image from "next/image";
import { FaCircleArrowRight, FaCircleCheck } from "react-icons/fa6";
import Link from "next/link";

function Country() {
  return (
    <section className="lg:px-20 md:px-16 sm:p-12 p-6 text-center relative">
      {data?.title1 && (
        <h4 className="text-blue-800 font-bold sm:text-lg mx-auto text-sm mb-2 border-blue-700 w-max border-b px-3 py-2">
          {data.title1}
        </h4>
      )}

      <h2 className="text-zinc-800  max-w-3xl mx-auto font-extrabold !leading-tight text-2xl md:text-4xl mb-10">
        {data.title2}
      </h2>

      <div className="flex flex-col gap-6 max-w-7xl mx-auto">
        {data?.cards?.map((cou) => (
          <div key={cou.id} className="relative group overflow-hidden md:rounded-full shadow-xl border ">
          <div
            className=" sticky bg-white group-hover:bg-transparent flex flex-wrap md:items-center md:justify-around lg:gap-2 gap-5 px-9 py-6 z-10"
          >
            {/* Flag */}
            <Image
              src={cou.img}
              alt={cou.heading}
              width={56}
              height={40}
              className="h-14 w-auto"
            />

            {/* Immigrate label */}
            <h3 className="bg-violet-900 text-white p-3 sm:text-xl text-lg font-semibold md:-rotate-90 group-hover:!bg-white group-hover:text-blue-900 md:w-min w-max">
              Immigrate to
            </h3>

            {/* Country Name */}
            <h2 className="group-hover:text-white text-black text-left max-sm:w-full text-2xl font-bold md:border-r-2 md:pr-6">
              {cou.heading}
            </h2>

            {/* Points */}
            <div className="flex text-zinc-700 flex-col gap-2 text-left">
              {cou.points.slice(0, 2).map((point, index) => (
                <div key={index} className="flex items-center gap-2">
                  <FaCircleCheck className="text-red-700 group-hover:text-white text-xl" />
                  <span className="group-hover:text-white">{point}</span>
                </div>
              ))}
            </div>
            <div className="flex text-zinc-700 flex-col gap-2 text-left">
              {cou.points.slice(2, 4).map((point, index) => (
                <div key={index} className="flex items-center gap-2">
                  <FaCircleCheck className="text-red-700 group-hover:text-white text-xl" />
                  <span className="group-hover:text-white">{point}</span>
                </div>
              ))}
            </div>

            {/* Button */}
            <Link href={`/${cou.link}`} className="w-max">
              <div className="flex gap-2 p-2 text-black hover:text-white border border-black/65 rounded-[29px] group/btn relative bg-white overflow-hidden items-center">
                <p className="ml-5 mr-3 font-bold text-sm z-20">
                  Learn more
                </p>
                <FaCircleArrowRight className="text-blue-700 text-2xl bg-white group-hover/btn:text-yellow-600 duration-300 rounded-full z-20" />
                <div className="group-hover/btn:w-full duration-300 h-full bg-gradient-to-tr from-yellow-700 to-red-800 absolute z-10 w-0 top-0 right-0"></div>
              </div>
            </Link>

            {/* Hover overlay */}
          </div>
                      <div className="absolute  group-hover:w-full w-0 h-full top-0 left-0 transition-all bg-gradient-to-t from-blue-800 to-violet-800 duration-500 -z-[-1]"></div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Country;
