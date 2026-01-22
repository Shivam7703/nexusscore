// Menu.tsx

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { navigationMenu } from "@/data/homeData";
import { MdKeyboardArrowRight } from "react-icons/md";
import { usePathname } from "next/navigation";
import { logoall } from "@/assets";
import Image from "next/image";
const Menu = ({ Isprimary, Items }: any) => {
   const [activeItem, setActiveItem] = useState<string | null>(null);
  
    const pathname = usePathname();
  
    useEffect(() => {
    const lastSegment = pathname?.split("/").filter(Boolean).pop();
let path = lastSegment || "home";

      setActiveItem(path);
    }, [pathname]);
  return (
    <ul className={`hidden items-center lg:gap-x-0 md:gap-x-0 font-medium w-max ${Isprimary ? "mx-auto" : "ml-28"} md:flex`}>
      {Items.map((item: any) => (
        <li key={item?.id} className="group relative transition-all ">
        <Link title={item?.label}
  href={item?.href || "#"}
  className={`px-4 py-3 flex justify-center items-center gap-1 text-sm font-bold cursor-pointer 
    ${activeItem === (item?.href?.split("/").filter(Boolean).pop() || "home") && Isprimary ? "!text-yellow-200" : Isprimary ? "text-white" : "text-zinc-800"}`}
>
            <span className="transition-all hover:scale-105 duration-300">
              {item?.label}
            </span>
            {item?.subNav && item.subNav.length !== 0 && (
              <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
            )}
          </Link>
          
          {/* First-level dropdown */}
          {item.subNav && (
            <div className="absolute w-max -left-5 top-[100%] z-30 hidden text-zinc-800  flex-col gap-1 rounded bg-gradient-to-r text-sm font-semibold from-white to-zinc-100 py-3 shadow-lg transition-all group-hover:flex">
              {item.subNav.map((nav: any) => (
                <div key={nav.id} className="group/subnav relative">
                  <Link title={nav?.label}
                    href={nav.href || "#"}
                    className={`hover:bg-blue-800 relative w-full flex gap-4 justify-between hover:text-white cursor-pointer items-center py-1 pl-2 pr-8 ${activeItem === (nav?.href?.split("/").filter(Boolean).pop() || "home") ? "bg-blue-800 text-white" : "bg-transparent"}`}
                    
                  >
                    <span className="whitespace-nowrap pl-3">{nav.label}</span>
                    {nav?.subNav && nav.subNav.length !== 0 && (
                      <MdKeyboardArrowRight className="text-xl" />
                    )}
                  </Link>

                  {/* Second-level dropdown */}
                  {nav.subNav && (
                    <div className="group/secondlevel absolute left-full top-0 z-30 hidden text-zinc-700 w-auto flex-col gap-1 rounded  py-3 shadow-lg transition-all group-hover/subnav:flex max-h-[500px] bg-white">
                      {nav.subNav.map((subNav: any) => (
                        <div key={subNav.id} className="group/subsubnav relative">
                          <Link title={subNav?.label}
                            href={subNav.href || "#"}
                            className={`hover:bg-blue-800 w-full gap-4 justify-between flex hover:text-white cursor-pointer items-center py-1 pl-2 pr-8 ${activeItem === (subNav?.href?.split("/").filter(Boolean).pop() || "home") ? "bg-blue-800 text-white" : "bg-transparent"}`}
                          >
                            <span className="whitespace-nowrap pl-3">{subNav.label}</span>
                            {subNav?.subNavv && subNav.subNavv.length !== 0 && (
                              <MdKeyboardArrowRight className="text-xl" />
                            )}
                          </Link>
                       
                      
                      {/* Third-level dropdown - positioned relative to entire second-level container */}
                      {subNav.subNavv && subNav.subNavv.length > 0 && (
                        <div className="absolute left-full top-0 z-40 hidden text-zinc-700 w-auto flex-col gap-1 rounded bg-white py-3 shadow-lg transition-all group-hover/subsubnav:flex max-h-[500px] overflow-y-auto min-w-[200px]">
                          {
                            subNav.subNavv.map((subSubNav: any) => (
                              <Link title={subSubNav?.label}
                                key={subSubNav.id}
                                href={subSubNav.href || "#"}
                                className={`hover:bg-blue-800 w-full gap-4 justify-between flex hover:text-white cursor-pointer items-center py-1 pl-2 pr-8 ${activeItem === (subSubNav?.href?.split("/").filter(Boolean).pop() || "home") ? "bg-blue-800 text-white" : "bg-transparent"}`}
                              >
                                <span className="whitespace-nowrap pl-3">{subSubNav.label}</span>
                              
                              </Link>
                            ))
                          }
                        </div>
                      )} </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </li>
      ))}
   </ul>
  );
};

export default Menu;