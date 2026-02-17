import { box1, box2, box3 } from "@/assets";
import React from "react";
import Image from "next/image";
import { FaMoneyBillAlt, FaWineBottle } from "react-icons/fa";
import {  GiInsectJaws, GiPlantWatering } from "react-icons/gi";
import { ImLeaf } from "react-icons/im";

import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { PiPlantLight } from "react-icons/pi";
import { BsPassportFill } from "react-icons/bs";
import { RiSpeedMiniFill, RiUserCommunityFill } from "react-icons/ri";

export default function Greenbox() {
  const data = [
    {
      id: 1,
      img:box1,
      heading: "Passport Services",
      para:
        "Complete assistance for passport applications, renewals, and documentation.",
      icon: <BsPassportFill />
      ,
    },
    {
      id: 2,
            img:box2,
      heading: "Fast-Track Visa Processing",
      para:
        "Efficient visa handling with accurate documentation and timely submissions.",
      icon: <RiSpeedMiniFill />

      ,
    },
    {
      id: 3,
            img:box3,
      heading: "Dedicated Client Support",
      para:
        "Expert assistance and guidance at every step of your immigration process.",
      icon:<RiUserCommunityFill />
      ,
    },
  
  ];

  return (
    <section className="my-6 w-[90%] sm:p-5 p-3 max-w-[1280px] !mx-auto  rounded-[39px]">
      <div className="gap-y-6 flex flex-wrap items-stretch w-full justify-between">
        {data?.map((card: any) => (
          <div
            key={card.id}
            className="lg:w-[31%] sm:w-[48%] w-full text-center bg-zinc-50 group rounded-2xl  text-white overflow-hidden shadow-lg"
          >
            <div className=" h-44 p-3  sm:h-52">
              <Image alt="nexuscore" src={card?.img} width={600} height={400} className="w-full h-full object-cover rounded-t-xl group-hover:scale-110 duration-300"/>
            </div>

            <div className="px-3 py-6 relative ">
<div className="absolute w-20 h-20 bg-blue-700/20 -left-20 -bottom-20 group-hover:rotate-[300deg] group-hover:scale-110 group-hover:left-0 group-hover:bottom-0 transition-all z-0 duration-700"></div>


<div className="mx-auto h-[3px] mb-3 sm:mb-4 bg-red-400 w-10 group-hover:w-24 duration-300"></div>

            <div className="mx-auto flex justify-center absolute -top-8 z-20  right-7 text-2xl rounded-xl items-center bg-blue-950  group-hover:bg-yellow-600 w-14 h-14 border-white border-4 group-hover:scale-x-[-1] duration-300 text-white">
              {card?.icon}
            </div>

            <h2 className="sm:text-lg duration-200 text-blue-900     group-hover:text-black  font-bold">
              {card?.heading}
            </h2>
            <p className="text-sm text-zinc-800 md:text-base my-1 md:my-2">{card?.para}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
