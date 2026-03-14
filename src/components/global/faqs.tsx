"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function Faqs({data}:any) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(1);

  function toggleFaq(faqId: number) {
    setExpandedFaq(faqId); // Toggle FAQ visibility
  }

  return (
   
<div className="space-y-7">
        {/* FAQ Section */}
        {data?.map((faq:any, index:number) => (
          <div key={index} className="md:mt-8 overflow-hidden rounded-xl shadow-lg">
            {/* FAQ Question */}
            <div
              onClick={() => toggleFaq(index)}
              className={`flex justify-between  font2 items-center cursor-pointer text-lg md:text-xl  ${expandedFaq === index ? "bg-gradient-to-r from-blue-700 to-blue-900 text-white" : "bg-white text-zinc-700"} py-3 lg:px-6 px-4 font-medium`}
            >
              {faq.que}
                <IoIosArrowDown className={`text-base duration-300 ${expandedFaq === index ? "rotate-180" : "rotate-0"} font-bold`}/>
            </div>

            {/* FAQ Answer */}
            <div
              className={`overflow-hidden transition-all duration-1000 ${
                expandedFaq === index ? "max-h-48" : "max-h-0"
              }`}
            >
              <p className="md:text-lg bg-gradient-to-tr from-slate-100 via-white to-red-50 shadow-lg p-4  font-medium text-zinc-700 " dangerouslySetInnerHTML={{ __html: faq.ans }}/>
            </div>
          </div>
        ))}
   </div>
  );
}
