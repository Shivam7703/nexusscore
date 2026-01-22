import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import { footer } from "@/data/homeData";
import { kangaroo, patta } from "@/assets";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Nexuscore Oversease",
  description: "Developed in Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable}  relative`}>
        <Image src={patta} alt="immigration " className="fixed -left-7 animate-y opacity-60 -bottom-10 sm:w-[24vw] w-44 z-[-1]"/>
        {/* <Image src={kangaroo} alt="Nexus oversease" className="fixed -right-7 top-4 sm:w-[30vw] w-44 z-[-2]"/> */}
        <Header />
        {children}
        <Footer footer={footer} />
      </body>
    </html>
  );
}
