import { productcategory, products } from "@/data/homeData";
import Link from "next/link";
import React from "react";

function Aside({ currpro }: any) {
  return (
    <>
      {productcategory?.map((product: any) => (
        <div key={product?.id} className="border p-4 w-full shadow-lg bg-white">
          <h3 className="text-brown2 text-xl md:text-2xl uppercase border-b pb-2 border-brown2 font-bold">
            {product?.label}
          </h3>
          <ul className=" mt-4 p-1 w-full">
            {products
              ?.filter((produ) => produ.category === product.label)
              .map((pro: any) => (
                <li
                  key={pro?.id}
                  className={`py-2 px-3 duration-300  w-full hover:text-white hover:bg-green1 ${
                    currpro == pro.name
                      ? "bg-green1 text-white"
                      : "border text-zinc-700"
                  }`}
                >
                  <Link
                    href={`/products/${pro?.category
                      .toLowerCase()
                      .replace(/\s+/g, "-")}/details/${encodeURIComponent(
                      pro?.name || ""
                    )}`}
                    className="w-full  font-medium text-sm"
                  >
                    {pro.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      ))}
      <div>
        <div className="p-6 text-center bg-green1 text-white ">
          <h3 className="text-base mb-3 md:text-lg uppercase border-b pb-3 border-white font-bold">
            LET’S START WORK TOGETHER
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
            repellat debitis ea!
          </p>
        </div>
        <div className="bg-black hover:bg-zinc-700 text-center w-full p-3 font-bold">
          <a
            href="https://housingprojects.site/nexus.pdf"
            className="text-center !mx-auto text-white "
          >
            Download Brochure
          </a>
        </div>
      </div>
    </>
  );
}

export default Aside;
