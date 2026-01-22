import { banner2 } from "@/assets";
import Banner from "@/components/global/banner";
import Aside from "@/components/products/aside";
import { blogData } from "@/data/homeData";
import React from "react";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

function Page({ params }: Props) {
  const singleblog = blogData?.blogs.find((product: any) => {
    const productName = product.title.replace(/\s/g, "");
    const slugName = params?.slug.replace(/%20/g, "");
    return productName.toLowerCase() === slugName.toLowerCase();
  });

  if (!singleblog) {
    return <p>Product not found.</p>;
  }

  return (
    <>
      <Banner
        img={banner2}
        title={`${singleblog.title.slice(0, 35)}...`}
        para={`${singleblog.text.slice(0, 130)}...`}
        slug={`blogs / ${singleblog.title.toLowerCase().replace(/\s/g, "-").slice(0, 25)}...`}
      />
      <div className="flex flex-wrap justify-between gap-y-7 lg:px-28 md:p-20 sm:p-16 p-7 relative min-h-screen w-full">
        <div className="md:w-[62%] w-full space-y-6 content">
          <Image src={singleblog?.img} alt="banner" className="w-full object-cover max-h-[450px]"/>
          <div
            dangerouslySetInnerHTML={{ __html: singleblog.detail }}
          />
        </div>
        <div className="md:w-[30%] p-4 w-full md:sticky space-y-5 top-10 h-full">
          <Aside currpro="" />
        </div>
      </div>
    </>
  );
}

export default Page;
