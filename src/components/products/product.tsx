"use client";
import React, { useState } from 'react';
import { productcategory } from '@/data/homeData';
import ProductSlider from './section2';
import ProCards from './proCards';

interface flex{
  isslider: boolean,
  categ:string
}

export default function Product({isslider, categ}: flex) {
const [activeItem , setActiveitem] = useState(categ || "Herbicides");

function setProduct(product :any) {
    {activeItem != product  &&
    setActiveitem(product);
    }
}
  return (
    <section>
      <div className='flex md:gap-6 gap-3 max-w-[1200px] mx-auto overflow-x-auto'>
        {productcategory?.map((cat)=>(
            <div key={cat?.id} className={`border uppercase px-3 cursor-pointer py-2 min-w-max sm:text-base  text-sm rounded-lg font-medium ${activeItem == cat?.label ? "bg-brown2 text-white" : "text-brown2 "}`} onClick={() => setProduct(cat.label)}>{cat?.label}</div>
        ))}
              </div>
              {isslider ? (
        <ProductSlider uniqueId="service123" datacat={activeItem} />
      ) : (
        <ProCards datacat={activeItem} />
      )}
        
    </section>
  )
}

