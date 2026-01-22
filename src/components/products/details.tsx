import React from 'react'
import ProductGallery from './section1'
import ProductSlider from './section2'
import Aside from './aside'
import Product from './product'

function Productdetails({product} :any) {
  return (
    <div className='flex flex-wrap justify-between gap-y-7 lg:px-28 md:p-20 sm:p-16 p-7 relative min-h-screen w-full'>
        <div className='md:w-[62%] w-full '>
        <ProductGallery detail={product}/>
          <h2 className="text-zinc-800 text-3xl text-center mx-auto sm:p-16 p-7 !pb-0 md:text-5xl font-bold">
                    Other {product?.category}
                  </h2>
                <ProductSlider uniqueId = "pro123" datacat={product?.category}/>

                <h2 className="text-zinc-800 text-3xl text-center mx-auto sm:p-16 p-7 sm:pb-9 md:text-5xl font-bold">
                    All Products
                  </h2>
<Product isslider ={true} categ={""}/>
        </div>
        <div className='md:w-[30%]  p-4 w-full md:sticky space-y-5 top-10 h-full'>
          <Aside currpro ={product?.name}/>
</div>
    </div>
  )
}

export default Productdetails
