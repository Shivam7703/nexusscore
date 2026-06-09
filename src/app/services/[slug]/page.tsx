// app/services/[slug]/page.tsx
import { notFound } from "next/navigation";
import React from "react";
import { servicedata } from "@/data/servicedata";
import { bann } from "@/assets";
import Banner from "@/components/global/banner";
import Servicedetails from "@/components/services/servicedetail";
import { Metadata } from "next";
import Script from "next/script";

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

// Dynamic metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const decodedSlug = createSlug(decodeURIComponent(params.slug));
  const singleservice = servicedata.find(
    (service: any) => createSlug(service.title) === decodedSlug
  );

  if (!singleservice) {
    return {
      title: "Service Not Found | Nexuscore Overseas",
    };
  }

  return {
    title: singleservice.metatitle,
    description: singleservice.metadesc,
    keywords: singleservice.metakey,
    alternates: {
      canonical: `https://www.nexuscoreoverseas.com/services/${createSlug(singleservice.title)}`,
    },
  };
}


export default function ServicePage({ params }: PageProps) {
  const decodedSlug = createSlug(decodeURIComponent(params.slug));
  const singleservice = servicedata.find(
    (service: any) => createSlug(service.title) === decodedSlug
  );

  if (!singleservice) {
    notFound();
  }

 const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: singleservice.title,
    url: `https://www.nexuscoreoverseas.com/services/${createSlug(singleservice.title)}`,
    description: singleservice.metadesc,
    provider: {
      "@type": "Organization",
      name: "Nexuscore Overseas",
      url: "https://www.nexuscoreoverseas.com/",
    },
  };

  return (
    <main>
      <Script
              id={`schema-service-${createSlug(singleservice.title)}`}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
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