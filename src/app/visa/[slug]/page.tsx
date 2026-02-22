// app/blogs/[slug]/page.tsx
import { notFound } from "next/navigation";
import React from "react";
import { visaData } from "@/data/visadata";
import { bann } from "@/assets";
import Banner from "@/components/global/banner";
import Blogdetails from "@/components/blog/blog-detail";
import Visadetails from "@/components/visa/visa-detail";

interface PageProps {
  params: {
    slug: string;
  };
}

// Helper function to create consistent slugs
const createSlug = (title: string): string => {
  return title
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

// Generate static paths for blogs - removed Promise return type
export function generateStaticParams() {
  
  return visaData.map((visa: any) => ({
    slug: createSlug(visa.title),
  }));
}

export default function BlogPage({ params }: PageProps) {
  const decodedSlug = createSlug(decodeURIComponent(params.slug));
  const singleVisa = visaData.find(
    (visa: any) => createSlug(visa.title) === decodedSlug
  );

  if (!singleVisa) {
    notFound();
  }

  return (
    <main>
      <Banner
        img={bann}
        title={singleVisa.title}
        para="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        slug={`visa/${createSlug(singleVisa.title)}`}
      />
      <Visadetails data={singleVisa} />
    </main>
  );
}