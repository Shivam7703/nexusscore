import { banner2, prob } from "@/assets";
import Banner from "@/components/global/banner";
import Testimonials from "@/components/home/testimonial";
import Productdetails from "@/components/products/details";
import { products } from "@/data/homeData";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

function page({ params }: Props) {
  const singlepro = products.find((product: any) => {
    const productName = product.name.replace(/\s/g, "");
    const slugName = params?.slug.replace(/%20/g, ""); 
    return productName.toLowerCase() === slugName.toLowerCase(); 
  });
  
  if (!singlepro) {
    return <p>Product not found.</p>;
  }

  return (
    <>
      <Banner
        img={prob}
        title={singlepro?.name}
        para={singlepro?.desc}
        slug={`products / ${singlepro?.name?.toLowerCase()}`} // Clean slug
      />
      <Productdetails product ={singlepro}/>
      <Testimonials />
    </>
  );
}

export default page;
