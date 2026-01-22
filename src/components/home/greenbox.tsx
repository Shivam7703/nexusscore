import { box1, box2, box3 } from "@/assets";
import React from "react";
import Image from "next/image";
import { FaMoneyBillAlt, FaWineBottle } from "react-icons/fa";
import {  GiInsectJaws, GiPlantWatering } from "react-icons/gi";
import { ImLeaf } from "react-icons/im";

import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { PiPlantLight } from "react-icons/pi";

export default function Greenbox() {
  const data = [
    {
      id: 1,
      img:box1,
      heading: "Quality ",
      para:
        "We provide high-quality products to protect crops & help them grow better.",
      icon: <MdOutlineEnergySavingsLeaf />
      ,
    },
    {
      id: 2,
            img:box2,
      heading: "Affordability",
      para:
        "Affordable solutions that make farming easier & more productive for all farmers.",
      icon: <FaMoneyBillAlt />
      ,
    },
    {
      id: 3,
            img:box3,
      heading: "Availability",
      para:
        "Widely available products to meet the needs of all farmers anywhere.",
      icon:<FaWineBottle />
      ,
    },
  
  ];

  return (
    <section className="my-6 w-[90%] sm:p-5 p-3 max-w-[1280px] !mx-auto  rounded-[39px]">
      <div className=" gap-y-6 flex flex-wrap items-stretch w-full justify-between">
        {data?.map((card: any) => (
          <div
            key={card.id}
            className="lg:w-[31%] sm:w-[48%] w-full  text-center bg-white group text-white "
          >
            <div className="overflow-hidden h-44 sm:h-52">
              <Image alt="nexuscore" src={card?.img} width={600} height={400} className="w-full h-full object-cover group-hover:scale-110 duration-300"/>
            </div>

            <div className="p-6 shadow-lg relative group-hover:bg-blue-800  duration-300">
            <div className="mx-auto flex justify-center absolute -top-8 z-20  right-7 text-3xl rounded-lg items-center bg-blue-950  group-hover:bg-yellow-600 w-14 h-14 border-white border-4 group-hover:scale-x-[-1] duration-300 text-white">
              {card?.icon}
            </div>
            <h2 className="mt-2 md:mt-3 sm:text-xl duration-200 text-zinc-800 group-hover:text-white  text-lg font-semibold">
              {card?.heading}
            </h2>
            <p className="text-sm text-zinc-700 md:text-base mt-1 md:mt-2 group-hover:text-white">{card?.para}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
