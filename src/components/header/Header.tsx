"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import Marquee from "react-fast-marquee";

import { VscChromeClose } from "react-icons/vsc";
import { IoMenu } from "react-icons/io5";
import {
  FaCaretRight,
  FaFacebook,
  FaLinkedinIn,
  FaPhone,
  FaSquarePhone,
} from "react-icons/fa6";
import { AiFillDollarCircle, AiFillInstagram } from "react-icons/ai";
import { TbBrandYoutubeFilled } from "react-icons/tb";

import { logo, logo2 } from "@/assets";
import { navigationMenu } from "@/data/homeData";
import { MdEmail } from "react-icons/md";

const Header = ({ header }: any) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navItems, setNavItems] = useState<any[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current < 80) {
        setIsAtTop(true);
        setIsVisible(true);
      } else {
        setIsAtTop(false);
        setIsVisible(current < lastScrollY || current < 120);
      }

      setLastScrollY(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setNavItems(header?.navItems || []);
  }, [header]);

  return (
    <>
      {/* HEADER SPACER */}
      <div className="h-24 md:h-[170px]" />

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${isAtTop ? " top-0" : "md:-top-12 -top-1"}`}
      >
        {/* ================= DESKTOP HEADER ================= */}
        <div className="max-md:hidden">
          {/* TOP INFO BAR */}
          <div className="flex justify-between bg-gradient-to-r from-blue-900 via-blue-600 to-blue-500 items-center pl-4 md:gap-x-8 text-sm font-medium shadow-lg text-white ">
            <div className="flex max-md:hidden text-sm font-bold gap-8">
              {/* Phone Number */}
              <div className="group flex items-center gap-2 max-w-xl transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <FaSquarePhone className="text-lg text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-yellow-400 blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>
                <a
                  href="https://www.google.com/maps/place/Globesway+Immigration+Pvt.+Ltd/"
                  className="hover:text-yellow-300 transition-colors duration-300 relative"
                >
                  <span className="relative z-10">+919311936564</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
                </a>
              </div>

              {/* Email */}
              <div className="group flex items-center gap-2 transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <MdEmail className="text-lg text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-yellow-400 blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>
                <a
                  href="mailto:info@nexuscore.com"
                  className="hover:text-yellow-300 transition-colors duration-300 relative"
                >
                  <span className="relative z-10">info@nexuscore.com</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
                </a>
              </div>
            </div>

            <div className="flex max-md:hidden gap-4 text-lg">
              <div className="group relative">
                <div className="absolute inset-0 bg-white rounded-full blur-md opacity-0 group-hover:opacity-60 transition-all duration-300"></div>
                <div className="relative w-8 h-8 rounded-full bg-white/10 hover:bg-white flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                  <FaFacebook
                    className="cursor-pointer text-white group-hover:text-blue-700 transition-all duration-300 group-hover:scale-105 hover:drop-shadow-[0_0_12px_rgba(253,224,71,0.8)]"
                    onClick={() =>
                      window.open(
                        "https://www.facebook.com/globeswayimmigration",
                        "_blank"
                      )
                    }
                  />
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-white rounded-full blur-md opacity-0 group-hover:opacity-60 transition-all duration-300"></div>
                <div className="relative w-8 h-8 rounded-full bg-white/10 hover:bg-white flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                  <AiFillInstagram
                    className="cursor-pointer text-white group-hover:text-pink-600 transition-all duration-300 group-hover:scale-105 hover:drop-shadow-[0_0_12px_rgba(253,224,71,0.8)]"
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/globeswayimmigration/",
                        "_blank"
                      )
                    }
                  />
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-white rounded-full blur-md opacity-0 group-hover:opacity-60 transition-all duration-300"></div>
                <div className="relative w-8 h-8 rounded-full bg-white/10 hover:bg-white flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                  <FaLinkedinIn
                    className="cursor-pointer text-white group-hover:text-blue-800 transition-all duration-300 group-hover:scale-105 hover:drop-shadow-[0_0_12px_rgba(253,224,71,0.8)]"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/company/globesway-immigration/",
                        "_blank"
                      )
                    }
                  />
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-white rounded-full blur-md opacity-0 group-hover:opacity-60 transition-all duration-300"></div>
                <div className="relative w-8 h-8 rounded-full bg-white/10 hover:bg-white flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                  <TbBrandYoutubeFilled
                    className="cursor-pointer text-white group-hover:text-red-600 transition-all duration-300 group-hover:scale-105 hover:drop-shadow-[0_0_12px_rgba(253,224,71,0.8)]"
                    onClick={() =>
                      window.open(
                        "https://www.youtube.com/@GlobeswayImmigration",
                        "_blank"
                      )
                    }
                  />
                </div>
              </div>
            </div>
            <Latestupdate />
          </div>

          {/* MAIN NAV */}
          <div className="flex relative items-center shadow-xl bg-gradient-to-l from-blue-700 via-blue-600 to-indigo-900 px-10 h-full 2xl:py-3 py-4 gap-8">
            <Link href={header?.href || "/"} className="shrink-0">
              <Image
                src={logo2}
                alt="Globesway Immigration"
                className="h-12 w-auto object-contain"
              />
            </Link>
<div className="absolute group hover:shadow-lg duration-300 hover:scale-105 transition-all max-2xl:hidden bg-white top-0 left-0 p-2 z-10">
  <div className=" group-hover:shadow-lg duration-500 bg-white top-0 left-0 px-5 pb-6 pt-7">
   <Link href={header?.href || "/"} className="">
              <Image
                src={logo}
                alt="Globesway Immigration"
                className="h-14 w-auto object-contain"
              />
            </Link>
            </div>
            </div>


            <div className="ml-auto w-full">
              <Menu
                navItemsArray={navItems}
                Items={navigationMenu.primaryMenu}
                Isprimary
              />
            </div>
            {/* buttons */}

  <PaymentButton />
                <ContactButton />

          </div>

          {/* SECONDARY MENU */}
          <div className="flex justify-end bg-white w-full py-2 px-5  shadow-lg ">
            <Menu
              navItemsArray={navItems}
              Items={navigationMenu.secondaryMenu}
              Isprimary={false}
              onTop={isAtTop}
            />
          </div>
        </div>

        {/* ================= MOBILE HEADER ================= */}
        <div
          className={`flex md:hidden items-center justify-between px-4 h-20 transition ${
            isAtTop ? "bg-yellow-800" : "bg-white shadow-md"
          }`}
        >
          <Link href={header?.href || "/"}>
            <Image
              src={isAtTop ? logo2 : logo}
              alt="Globesway Immigration"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {isMobileMenuOpen ? (
            <VscChromeClose
              className={`text-3xl ${isAtTop ? "text-white" : "text-black"}`}
              onClick={() => setIsMobileMenuOpen(false)}
            />
          ) : (
            <IoMenu
              className={`text-3xl ${isAtTop ? "text-white" : "text-black"}`}
              onClick={() => setIsMobileMenuOpen(true)}
            />
          )}
        </div>

        {/* MOBILE MENU */}
        <div
          className={`fixed top-20 left-0 h-screen w-full md:hidden transition-all duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } ${isAtTop ? "bg-black" : "bg-white"}`}
        >
          <MenuMobile
            onTop={isAtTop}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
            onItemClick={() => setIsMobileMenuOpen(false)}
          />
        </div>
      </header>
    </>
  );
};

export default Header;

function Latestupdate() {
  return (
    <section className="flex font-semibold items-center text-sm text-white relative">
      {/* Latest Update Label with arrow shape */}
      <div className="relative shrink-0">
        <div className="relative px-4 py-3  bg-gradient-to-r from-yellow-500 to-yellow-600">
          <span className="relative z-10 font-bold flex gap-x-1 tracking-wide items-center">
            Latest Update <FaCaretRight />
          </span>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="flex-1 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 relative overflow-hidden">
        {/* Animated shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>

        <Marquee speed={50} pauseOnHover gradient={false} className="py-3">
          <a
            className="mx-6 hover:text-blue-100 transition-colors duration-200 flex items-center gap-2 group"
            href="#"
          >
            <span className="inline-block w-2 h-2 bg-white rounded-full group-hover:scale-125 transition-transform duration-200"></span>
            <span className="group-hover:underline">
              New medical exam requirements for Express Entry PR applications
            </span>
          </a>
          <a
            className="mx-6 hover:text-blue-100 transition-colors duration-200 flex items-center gap-2 group"
            href="#"
          >
            <span className="inline-block w-2 h-2 bg-white rounded-full group-hover:scale-125 transition-transform duration-200"></span>
            <span className="group-hover:underline">
              Canada issues thousands of invitations in major Healthcare draw
            </span>
          </a>
          <a
            className="mx-6 hover:text-blue-100 transition-colors duration-200 flex items-center gap-2 group"
            href="#"
          >
            <span className="inline-block w-2 h-2 bg-white rounded-full group-hover:scale-125 transition-transform duration-200"></span>
            <span className="group-hover:underline">
              IRCC invites more PNP candidates in latest Express Entry draw
            </span>
          </a>
        </Marquee>
      </div>
    </section>
  );
}


function PaymentButton() {
  return (
    <Link
      href="/payment"
      className="group relative inline-flex items-center gap-3 px-6 py-3
                 rounded-xl font-bold tracking-wide text-white
                 min-w-max overflow-hidden
                 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500
                 transition-all duration-300 hover:shadow-[0_0_15px_5px_rgba(167,139,250,0.6)]"
    >
      {/* Sliding White Hover */}
      <span className="absolute inset-0 bg-white
                       -translate-x-full
                       group-hover:translate-x-0
                       transition-transform duration-400 ease-in-out"></span>

      

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2
                       group-hover:text-black transition-colors duration-300">
        <AiFillDollarCircle className="text-lg text-yellow-400 group-hover:text-yellow-600 transition-colors duration-300" />
        <span>Pay Now</span>
      </span>
    </Link>
  );
}

function ContactButton() {
  return (
    <Link
      href="/contact"
      className="group relative inline-flex items-center gap-3 px-6 py-3
                 rounded-xl font-semibold tracking-wide text-white
                 min-w-max overflow-hidden
                 bg-gradient-to-r from-green-700 via-green-500 to-green-700
                 transition-all duration-300 hover:shadow-[0_0_15px_5px_rgba(52,211,153,0.6)]"
    >
      {/* Sliding White Hover */}
      <span className="absolute inset-0 bg-white
                       -translate-x-full
                       group-hover:translate-x-0
                       transition-transform duration-400 ease-in-out"></span>


      {/* Content */}
      <span className="relative z-10 flex items-center gap-2
                       group-hover:text-black transition-colors duration-300">
        <FaPhone className="text-lg text-green-400  transition-colors duration-300" />
        <span>Call Support</span>
      </span>
    </Link>
  );
}
