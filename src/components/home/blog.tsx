import React from "react";
import { blogData as data } from "@/data/homeData";
import Image from "next/image";
import {
  FaArrowRight,
  FaUser,
} from "react-icons/fa6";
import Link from "next/link";

export default function Blogs({ isHome }:any) {
  return (
    <section className={`${isHome ? "lg:px-20 md:px-16 sm:p-12 p-6 " : "px-3 pb-5"} text-center relative w-full`}>
      {data?.title1 && isHome && (
        <h4 className="text-blue-800 font-bold sm:text-lg mx-auto text-sm mb-2 border-blue-700 w-max border-b px-3 py-2">
          {data.title1}
        </h4>
      )}
{isHome && <h2 className="text-zinc-800 font-extrabold !leading-tight text-2xl md:text-4xl max-w-2xl mx-auto mb-10">
        {data.title2}
      </h2>}

      <div className={`grid ${!isHome? "" : "lg:grid-cols-3"}sm:grid-cols-2  gap-8 max-w-7xl mx-auto}`}>
  {(isHome ? data?.blog?.slice(0, 3) : data?.blog)?.map((blogs: any, index: number) => (
  <div
    key={index}
    className="group blg bg-white rounded-xl overflow-hidden
               shadow-md hover:shadow-xl
               transition-all duration-300"
  >
    {/* Image Section */}
    <div className="relative h-56 sm:h-64 overflow-hidden">
      <Image
        src={blogs.img}
        alt={blogs.heading}
        width={500}
        height={350}
        className="w-full h-full object-cover
                   group-hover:scale-105 transition-transform duration-500"
      />

      {/* Date Badge */}
      {blogs?.date && (
        <div className="absolute bottom-4 right-4">
          <div className="bg-red-500  text-white text-center px-4 py-3 date shadow-lg">
            <p className="text-2xl font-bold leading-none">
              {blogs.date.split(" ")[0]}
            </p>
            <p className="text-xs uppercase tracking-wider">
              {blogs.date.split(" ")[1]}
            </p>
          </div>
        </div>
      )}
    </div>

    {/* Content */}
    <div className="p-5 sm:p-6 space-y-4 text-left">
      {/* Category */}
      {blogs?.tag && (
        <div className="flex items-center gap-2 text-sm font-semibold text-red-500 uppercase">
          <span className="w-2 h-2 bg-red-500 rounded-full" />
          {blogs.tag}
        </div>
      )}

      {/* Meta */}
      <div className="flex items-center justify-between text-sm text-gray-500">
        <p>
          Post By: <span className="font-medium text-gray-700">admin</span>
        </p>
        <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
          <FaUser className="text-gray-600" />
        </div>
      </div>

      {/* Title */}
       <Link
          href={`/blog/${encodeURIComponent(
            blogs.heading.toLowerCase().replace(/\s+/g, "-")
          )}`}>
       <h2
        className="text-lg sm:text-xl font-bold leading-snug text-gray-900
                   group-hover:bg-gradient-to-r
                   group-hover:from-blue-600
                   group-hover:to-purple-600
                   group-hover:bg-clip-text
                   group-hover:text-transparent
                   transition-all duration-500 line-clamp-2"
      >
        {blogs.heading}
      </h2>
</Link>
      {/* Description */}
      <p className="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-3">
        {blogs?.para.slice(0, 150)}...
      </p>

      {/* Read More */}
       <Link
          href={`/blog/${encodeURIComponent(
            blogs.heading.toLowerCase().replace(/\s+/g, "-")
          )}`}
          className="flex items-center gap-2 text-sm font-semibold
                     text-blue-600 group-hover:text-purple-600
                     transition-all duration-300"
        >
          Read more
          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
    </div>
  </div>
))}

      </div>
    </section>
  );
}
