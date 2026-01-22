import React from "react";
import Banner from "@/components/global/banner";
import Product from "@/components/products/product";
import { productBanner } from "@/data/homeData";

// ✅ Define route params
type Props = {
  params: {
    category: string;
  };
};

// ✅ Pre-generate static pages for given categories (optional placeholder)
export async function generateStaticParams() {
  // If you don't need pre-generation, you can return an empty array or comment this out.
  return [];
}

// ✅ Generate SEO metadata dynamically
export async function generateMetadata({ params }: Props) {
  const displayCategory = decodeURIComponent(params.category)
     .replace(/[_-]+/g, ' ')                 // turn hyphens/underscores into spaces
    .trim()                                  // remove extra spaces
    .split(/\s+/)                            // split into words
    .map(w => w[0]?.toUpperCase() + w.slice(1).toLowerCase()) // capitalize
    .join(' ');


  return {
    title: `${displayCategory} | Wembly International`,
    description: `Explore our range of ${displayCategory} including premium agricultural solutions for better yield and crop protection.`,
  };
}

// ✅ Main static page
export default async function Page({ params }: Props) {
  // Normalize and format category for display
  const displayCategory = decodeURIComponent(params.category)
     .replace(/[_-]+/g, ' ')                 // turn hyphens/underscores into spaces
    .trim()                                  // remove extra spaces
    .split(/\s+/)                            // split into words
    .map(w => w[0]?.toUpperCase() + w.slice(1).toLowerCase()) // capitalize
    .join(' ');


  return (
    <div>
      <Banner
        img={productBanner?.img}
        title={productBanner.title}
        para={productBanner.para}
        slug={productBanner.slug}
      />

      <section className="lg:px-28 md:px-20 sm:p-14 p-6">
        <h2 className="text-zinc-800 text-3xl text-center pb-7 sm:pb-9 md:text-5xl font-bold">
All Products        </h2>

        {/* ✅ Send category from params directly */}
        <Product isslider={false} categ={displayCategory} />
      </section>
    </div>
  );
}
