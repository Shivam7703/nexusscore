"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { banner, banner2 } from "@/assets";
import { RiReactjsLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";

export default function ProductGallery({ detail }: any) {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);

  const magnifierSize = 200;
  const zoomLevel = 3;

  const handleMouseEnter = () => setShowMagnifier(true);
  const handleMouseLeave = () => setShowMagnifier(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (imageRef.current) {
      const { left, top, width, height } = imageRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      setMousePosition({
        x: Math.max(0, Math.min(x, width)),
        y: Math.max(0, Math.min(y, height)),
      });
    }
  };

  return (
    <div className="pb-4 ">
      <div className="mb-6 md:mb-8">
        <div
          className="relative mx-auto h-80 w-full max-w-[650px]  sm:h-[500px]"
          ref={imageRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
          <Image
            src={detail?.img}
            alt={"Product Image"}
            fill
            className="object-contain max-h-[450px] mx-auto w-full h-full"
            priority
          />

          {/* Magnifier lens */}
          {showMagnifier && (
  <div
    className="absolute max-sm:!hidden rounded-full overflow-hidden pointer-events-none border-2 border-gray-200 shadow-lg z-50"
    style={{
      width: `${magnifierSize}px`,
      height: `${magnifierSize}px`,
      left: `${mousePosition.x - magnifierSize / 2}px`,
      top: `${mousePosition.y - magnifierSize / 2}px`,
    }}
  >
    <div className="backdrop-blur-sm"
      style={{
        position: "absolute",
        width: `${imageRef.current?.clientWidth || 0}px`,
        height: `${imageRef.current?.clientHeight || 0}px`,
        transform: `scale(${zoomLevel})`,
        transformOrigin: "top left",
        left: `${-mousePosition.x * zoomLevel + magnifierSize / 3}px`,
        top: `${-mousePosition.y * zoomLevel + magnifierSize / 3}px`,
      }}
    >
      <Image
        src={detail.img}
        alt="Magnified view"
        fill
        className="object-cover"
      />
    </div>
  </div>
)}
        </div>
      </div>

       <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8">
        {/* Header Section */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 border border-gray-200">
          <div className="space-y-3 sm:space-y-4">
            {detail?.name && (
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-700 to-amber-900 bg-clip-text text-transparent leading-tight">
                {detail.name}
              </h1>
            )}
            {detail?.desc && (
              <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium">{detail.desc}</p>
            )}
            {detail?.category && (
          <p className="py-1 font-bold text-sm w-max px-5 bg-yellow3 rounded-md shadow-lg">
            {detail.category}
          </p>
        )}
          </div>

          <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
            {detail?.para1 && (
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">{detail.para1}</p>
            )}
            {detail?.para2 && (
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">{detail.para2}</p>
            )}
            {detail?.para3 && (
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">{detail.para3}</p>
            )}
          </div>
        </div>
{detail?.sizes && (
          <table className="w-full border-collapse border !mt-6 border-gray-300">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="border px-4 py-2">Pack</th>
                <th className="border px-4 py-2">Cartoon</th>
              </tr>
            </thead>
            <tbody>
              {detail?.sizes?.map((boxes: any) => (
                <tr key={boxes?.id} className="hover:bg-gray-50 text-zinc-800 text-center">
                  <td className="border border-gray-300 px-4 py-2">{boxes?.pack}</td>
                  <td className="border border-gray-300 px-4 py-2">{boxes?.cartoon}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {/* Nutrients Table */}
        {detail?.detail && (
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-4 sm:px-6 py-3 sm:py-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                Essential Nutrients
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
                    <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-bold uppercase tracking-wider">
                      Nutrient
                    </th>
                    <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-bold uppercase tracking-wider">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {detail?.detail?.map((boxes:any, index:number) => (
                    <tr 
                      key={boxes?.id} 
                      className={`transition-all duration-200 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 ${
                        index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                      }`}
                    >
                      <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4">
                        <span className="font-bold text-emerald-700 text-sm sm:text-base md:text-lg">{boxes?.pack}</span>
                      </td>
                      <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">{boxes?.cartoon}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Points Grid */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6">
          {detail?.points?.map((section:any) => (
            <div
              key={section.id}
              className={`rounded-xl sm:rounded-2xl border-2 bg-yellow-200/30 overflow-hidden transition-all duration-300 hover:shadow-lg` }
            >
              <div className="p-4 sm:p-5 md:p-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className={`text-orange-700 bg-white p-1 text-lg rounded-lg shadow-md flex-shrink-0`}>
<FaArrowRight />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 leading-tight">
                    {section.heading}
                  </h3>
                </div>
                <ul className="space-y-2 sm:space-y-2.5 md:space-y-3">
                  {section.pointers.map((pointer:any, idx:number) => (
                    <li key={idx} className="flex items-start gap-2 sm:gap-3 text-gray-700">
                      <span className={` mt-0.5 sm:mt-1 flex-shrink-0`}>
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="#2563EB" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-xs sm:text-sm md:text-base leading-relaxed">{pointer}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
