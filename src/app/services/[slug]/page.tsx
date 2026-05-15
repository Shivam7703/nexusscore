// app/services/[slug]/page.tsx
import { notFound } from "next/navigation";
import React from "react";
import { servicedata } from "@/data/servicedata";
import { bann } from "@/assets";
import Banner from "@/components/global/banner";
import Servicedetails from "@/components/services/servicedetail";

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
  
  return servicedata.map((service: any) => ({
    slug: createSlug(service.title),
  }));
}

export default function ServicePage({ params }: PageProps) {
  const decodedSlug = createSlug(decodeURIComponent(params.slug));
  const singleservice = servicedata.find(
    (service: any) => createSlug(service.title) === decodedSlug
  );

  if (!singleservice) {
    notFound();
  }

  return (
    <main>
      <Banner
        img={bann}
        title={singleservice.title}
        para={singleservice.metadesc}
        slug={`services/${createSlug(singleservice.title)}`}
      />
      <Servicedetails data={singleservice} />
    </main>
  );
}