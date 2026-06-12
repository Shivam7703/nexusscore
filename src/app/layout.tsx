import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import { footer } from "@/data/homeData";
import { patta } from "@/assets";
import Image from "next/image";
import Script from "next/script";

/**
 * Cormorant Garamond — editorial serif for headings
 * Refined, trustworthy, used by law firms & luxury brands
 */


export const metadata: Metadata = {
   verification: {
    google: "HBE4l6QG6ASmbrbrtwpYBc2gIyRppkG4czzvwuIBlig",
  },
  title: "Nexuscore Overseas",
  description: "Premium Immigration & Visa Consultancy Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <head>
        <Script async 
          src={`https://www.googletagmanager.com/gtag/js?id=G-5E2SB334GG`}
          strategy="beforeInteractive"
        />
        <Script id="google-analytics" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5E2SB334GG');
          `}
        </Script></head>

        
      <body
        className={` font-sans relative`}
        style={{
          fontFamily: "var(--font-sans), sans-serif",
        }}
      >
        <Image
          src={patta}
          alt="immigration"
          className="fixed -left-7 animate-y opacity-40 -bottom-10 sm:w-[24vw] w-44 z-[-1]"
        />
        <Header />
        {children}
        <Footer footer={footer} />
      </body>
    </html>
  );
}