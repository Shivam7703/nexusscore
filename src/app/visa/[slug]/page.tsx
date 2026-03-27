// app/visa/[slug]/page.tsx
import { notFound } from "next/navigation";
import React from "react";
import { visaData } from "@/data/visadata";
import { bann } from "@/assets";
import Banner from "@/components/global/banner";
import Visadetails from "@/components/visa/visa-detail";
import type { Metadata } from "next";
import Script from "next/script";

interface PageProps {
  params: {
    slug: string;
  };
}

const createSlug = (title: string): string => {
  return title
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

export function generateStaticParams() {
  return visaData.map((visa: any) => ({
    slug: createSlug(visa.title),
  }));
}

// Dynamic metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const decodedSlug = createSlug(decodeURIComponent(params.slug));
  const singleVisa = visaData.find(
    (visa: any) => createSlug(visa.title) === decodedSlug
  );

  if (!singleVisa) {
    return {
      title: "Visa Not Found | Nexuscore Overseas",
    };
  }

  return {
    title: singleVisa.metatitle,
    description: singleVisa.metadesc,
    keywords: singleVisa.metakey,
    alternates: {
      canonical: `https://www.nexuscoreoverseas.com/visa/${createSlug(singleVisa.title)}`,
    },
  };
}

export default function VisaPage({ params }: PageProps) {
  const decodedSlug = createSlug(decodeURIComponent(params.slug));
  const singleVisa = visaData.find(
    (visa: any) => createSlug(visa.title) === decodedSlug
  );

  if (!singleVisa) {
    notFound();
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: singleVisa.title,
    url: `https://www.nexuscoreoverseas.com/visa/${createSlug(singleVisa.title)}`,
    description: singleVisa.metadesc,
    provider: {
      "@type": "Organization",
      name: "Nexuscore Overseas",
      url: "https://www.nexuscoreoverseas.com/",
    },
  };

  return (
    <main>
      <Script
        id={`schema-visa-${createSlug(singleVisa.title)}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Banner
        img={bann}
        title={singleVisa.title}
        para={singleVisa?.metadesc}
        slug={`visa/${createSlug(singleVisa.title)}`}
      />
      <Visadetails data={singleVisa} />
    </main>
  );
}