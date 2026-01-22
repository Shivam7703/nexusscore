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
          <div key={index} className="md:mt-8 overflow-hidden">
            {/* FAQ Question */}
            <div
              onClick={() => toggleFaq(index)}
              className={`flex justify-between items-center cursor-pointer text-lg md:text-xl  ${expandedFaq === index ? "bg-gradient-to-tr from-blue-500 to-indigo-900 text-white" : "bg-white text-zinc-700"} py-3 lg:px-6 px-4 font-bold`}
            >
              {faq.que}
                <IoIosArrowDown className={`text-lg duration-300 ${expandedFaq === index ? "rotate-180" : "rotate-0"} font-bold`}/>
            </div>

            {/* FAQ Answer */}
            <div
              className={`overflow-hidden transition-all duration-1000 ${
                expandedFaq === index ? "max-h-44" : "max-h-0"
              }`}
            >
              <p className="md:text-lg bg-white shadow-lg p-4 text-sm font-medium text-zinc-700">
                {faq.ans}
              </p>
            </div>
          </div>
        ))}
   </div>
  );
}
