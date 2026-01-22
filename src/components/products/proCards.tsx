import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { products } from '@/data/homeData';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';

function ProCards({datacat}:any) {
      const filteredProducts = products?.filter((cards: any) => cards.category === datacat);
    
  return (
    <div className='flex my-8 md:my-12 sm:gap-[4%] sm:gap-y-8 gap-[2%] justify-center  flex-wrap items-baseline'>
       {filteredProducts?.map((cards: any) => (
          <div
            key={cards.id}
            className=" w-max text-left p-3 px-5 rounded-xl max-w-80 max-sm:w-[49%]"
          >
            <Link href={`/products/${cards?.category.toLowerCase()
    .replace(/\s+/g, "-")}/details/${encodeURIComponent(cards?.name || '')}`} className="w-full h-full overflow-hidden group">
              <div className='pro-bg mb-3 rounded-lg overflow-hidden  w-full p-2 h-56'>
              <Image
                src={cards.img}
                alt={cards.name}
                className="transition-all h-full w-full object-center duration-500 mx-auto object-contain group-hover:scale-105"
              /></div>
              <h3 className="text-xl font-bold text-zinc-800 group-hover:text-color1">
                {cards.name}
              </h3>
              <p className="text-zinc-400 text-left max-sm:text-xs">
                {cards.desc || " "}
              </p>
              <p className="w-max text-base text-black my-3">
                {/* <span className="max-sm:hidden">Category: </span> */}
                <span className="py-1 font-bold text-xs px-3 text-white bg-yellow3 rounded-md shadow-lg">
                   {cards.category}
                </span>
              </p>
              <div className="flex items-center gap-x-2 group/link">
                <p className="text-sm text-green1 sm:font-extrabold">
                  View Product
                </p>
                <BsArrowUpRightCircleFill className="text-brown2 rounded-full text-xl group-hover/link:rotate-45 duration-300" />
              </div>
            </Link>
          </div>
        ))}
    </div>
  )
}

export default ProCards
