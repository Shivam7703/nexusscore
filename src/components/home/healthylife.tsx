"use client";
import React from "react";


export default function HealthyLife({ data }: any) {
  return (
    <section className="lg:px-28 md:p-20  sm:p-12 p-7 flex flex-wrap justify-between items-center max-lg:gap-4 ">
      <div className="w-full text-center flex flex-col items-center !gap-y-4 mb-8 md:mb-16">
      
        {data?.title1 && (
          <h2 className="text-filling-container text-zinc-800 text-5xl leading-[1.3] md:text-7xl lg:text-9xl font-bold">
            {data?.title1}
          </h2>
        )}
        {data?.para && (
          <p className="text-zinc-600 text-sm sm:text-xl font-bold max-w-4xl">
{data?.para}</p>
        )}
      </div>

      <div className="flex  max-w-[1780px] justify-between items-stretch flex-wrap gap-y-9 sm:mt-12 mt-4">
        {data?.points &&
          data?.points.map((card: any) => (
            <div
              key={card.id}
              className="p-4 lg:w-[23.6%] group sm:w-[48.5%] w-full sm:p-8 rounded-xl text-white shadow-xl border-2"
            >
              <div className="flex justify-center animate-scale rounded-full items-center mx-auto sm:w-24 sm:h-24 bg-green1 w-16 h-16 sticky sm:-mt-20 group-hover:scale-x-[-1] duration-200 -mt-9 text-white text-3xl sm:!text-4xl">
{card?.img}
              </div>
              <h2 className="text-xl my-3 sm:my-5 leading-[1.9] text-zinc-800 text-center sm:text-xl font-bold">
              {card?.heading}
              </h2>
              <div className="border-b-2 border-yellow3 max-w-44 mx-auto"></div>
              <p className="text-center font-semibold text-zinc-600 text-sm md:text-base leadiung-[1.4] my-3 sm:my-5">
              {card?.text}
              </p>
            </div>
          ))}
      </div>
    </section>
  );
}
