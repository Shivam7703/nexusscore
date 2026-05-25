"use client"

import React, { useState } from "react"
import BlogAside from "./side"
import Image from "next/image"
import { BsCalendar3, BsClock, BsShareFill } from "react-icons/bs"
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa"
import { BiLike } from "react-icons/bi"
import { HiOutlineBookmark } from "react-icons/hi"
import Faqs from "../global/faqs"

interface TableData {
  theading: string[]
  rows: { colum: string[] }[]
}

interface SubContent {
  para?: string
  list?: string[]
  subheading?: string
  table?: TableData
}

interface ContentSection {
  heading?: string
  subcontent?: SubContent[]
}

const stripHtml = (html: string) => html?.replace(/<[^>]*>/g, "").trim() ?? ""

function RenderContent({ content }: { content: ContentSection[] }) {
  return (
    <>
      {content.map((section, si) => (
        <div key={si} className="blog-section">
          {section.heading && (() => {
            
           const text = stripHtml(section.heading ?? "")
const tag = section.heading?.match(/<(h[1-6])/)?.[1] ?? "p"


            const styles: Record<string, string> = {
              h1: "text-3xl md:text-4xl font-black text-zinc-900 mt-14 mb-5 leading-tight tracking-tight border-l-4 border-amber-500 pl-5",
              h2: "text-2xl md:text-3xl font-extrabold text-zinc-800 mt-12 mb-4 leading-tight",
              h3: "text-xl md:text-2xl font-bold text-zinc-800 mt-10 mb-4",
              h4: "text-lg md:text-xl font-bold text-zinc-700 mt-8 mb-3",
              h5: "text-base md:text-lg font-semibold text-zinc-700 mt-6 mb-3",
              h6: "text-sm md:text-base font-semibold text-zinc-600 uppercase tracking-widest mt-6 mb-2",
              p:  "text-lg font-bold text-zinc-700 mt-8 mb-3",
            }
            return <div className={styles[tag] ?? styles.p}>{text}</div>
          })()}

          {section.subcontent?.map((sub, subi) => (
            <div key={subi}>
              {sub.subheading && (
                <div className="flex items-center gap-3 mt-7 mb-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-500 text-white text-xs font-black flex items-center justify-center shadow-md">
                    {subi + 1}
                  </span>
                  <h4 className="text-base md:text-lg font-bold text-zinc-800">{sub.subheading}</h4>
                </div>
              )}

              {sub.para && (
                <p className={`text-zinc-600 leading-[1.9] text-[15px] md:text-base mb-5 ${
                  si === 0 && subi === 0
                    ? "first-letter:text-6xl first-letter:font-black first-letter:text-amber-500 first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-[0.8] first-letter:font-serif"
                    : ""
                }`}>
                  {sub.para}
                </p>
              )}

              {sub.list && (
                <ul className="my-5 space-y-3">
                  {sub.list.map((item, li) => (
                    <li key={li} className="flex gap-3 items-start">
                      <span className="flex-shrink-0 mt-[5px] w-5 h-5 rounded-sm bg-amber-500/15 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      </span>
                      <span className="text-zinc-600 leading-relaxed text-[15px]">{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {sub.table && (
                <div className="my-7 overflow-x-auto rounded-xl border border-zinc-200 shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-zinc-900 text-white">
                        {sub.table.theading.map((th, ti) => (
                          <th key={ti} className="px-5 py-3.5 text-left font-semibold tracking-wide text-xs uppercase">
                            {th}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {sub.table.rows.map((row, ri) => (
                        <tr key={ri} className={`border-t border-zinc-100 ${ri % 2 === 0 ? "bg-white" : "bg-amber-50/50"} hover:bg-amber-50 transition-colors`}>
                          {row.colum.map((cell, ci) => (
                            <td key={ci} className="px-5 py-3.5 text-zinc-700 font-medium">
                              {ci === 1 ? (
                                <span className="inline-flex items-center gap-1.5">
                                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                                  {cell}
                                </span>
                              ) : cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </>
  )
}

export default function Blogdetails({ data }: any) {
  const [likes, setLikes] = useState(data?.initialLikes ?? 246)
  const [bookmarked, setBookmarked] = useState(false)

  const handleLike = () => setLikes((p: any) => p + 1)
  const handleBookmark = () => setBookmarked((p) => !p)

  const handleShare = (platform?: string) => {
    const shareUrl = typeof window !== "undefined" ? window.location.href : ""
    const shareText = data?.title || data?.heading || ""
    if (navigator.share && !platform) {
      navigator.share({ title: shareText, url: shareUrl }).catch(() => {})
      return
    }
    const urls: Record<string, string> = {
      facebook:  `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter:   `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      linkedin:  `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      whatsapp:  `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + " " + shareUrl)}`,
    }
    if (platform && urls[platform]) window.open(urls[platform], "_blank", "noopener,noreferrer")
  }

  return (
    <div className="lg:px-28 xl:px-32 md:px-20 sm:px-12 px-5 py-14 bg-[#fafaf9]">
      <div className="flex flex-wrap justify-between gap-y-10 w-full">

        {/* ── Main Column ── */}
        <div className="md:w-[60%] w-full">

          {/* Hero Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl mb-10 group aspect-[16/9]">
            <Image
              src={data?.img}
              alt={data?.heading ?? "Blog image"}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            {data?.tag && (
              <span className="absolute top-5 left-5 bg-amber-500 text-white text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-lg">
                {data.tag}
              </span>
            )}
          </div>

          {/* Meta */}
          <div className="flex items-center gap-4 mb-6 flex-wrap">
            <div className="flex items-center gap-2 text-zinc-500 text-sm">
              <BsCalendar3 className="w-3.5 h-3.5" />
              <span>{data?.date}</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-zinc-300" />
            <div className="flex items-center gap-2 text-zinc-500 text-sm">
              <BsClock className="w-3.5 h-3.5" />
              <span>{data?.readTime ?? "5 min"} read</span>
            </div>
            <div className="ml-auto flex items-center gap-2.5 cursor-pointer group">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white font-bold text-xs shadow">
                A
              </div>
              <span className="text-sm font-semibold text-zinc-700 group-hover:text-amber-600 transition-colors">Admin</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-zinc-900 font-black leading-tight text-3xl md:text-[2.6rem] mb-3 tracking-tight">
            {data?.heading}
          </h1>
          <div className="h-1 w-16 bg-amber-500 rounded-full mb-10" />

          {/* Content */}
          <article className="bg-white rounded-2xl shadow-sm border border-zinc-100 px-7 md:px-10 py-10 mb-10">
            {data?.content && <RenderContent content={data.content} />}
          </article>

          {/* FAQs */}
          {data?.faq && data.faq.length > 0 && (
            <div className="mb-10">
              <Faqs data={data.faq} />
            </div>
          )}

          {/* Share */}
          <div className="bg-white border border-zinc-100 rounded-2xl p-6 mb-6 shadow-sm">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-zinc-900 rounded-xl flex items-center justify-center text-white">
                  <BsShareFill className="w-4 h-4" />
                </div>
                <span className="font-bold text-zinc-800 text-xs uppercase tracking-widest">Share Article</span>
              </div>
              <div className="flex items-center gap-2.5">
                {[
                  { platform: "facebook", Icon: FaFacebookF, color: "#1877F2" },
                  { platform: "twitter",  Icon: FaTwitter,   color: "#1DA1F2" },
                  { platform: "linkedin", Icon: FaLinkedinIn, color: "#0A66C2" },
                  { platform: "whatsapp", Icon: FaWhatsapp,  color: "#25D366" },
                ].map(({ platform, Icon, color }) => (
                  <button
                    key={platform}
                    onClick={() => handleShare(platform)}
                    aria-label={`Share on ${platform}`}
                    className="w-9 h-9 rounded-full flex items-center justify-center border border-zinc-200 text-zinc-400 hover:scale-110 transition-all duration-200 shadow-sm hover:shadow-md"
                    onMouseEnter={(e) => {
                      ;(e.currentTarget as HTMLElement).style.backgroundColor = color
                      ;(e.currentTarget as HTMLElement).style.borderColor = color
                      ;(e.currentTarget as HTMLElement).style.color = "#fff"
                    }}
                    onMouseLeave={(e) => {
                      ;(e.currentTarget as HTMLElement).style.backgroundColor = ""
                      ;(e.currentTarget as HTMLElement).style.borderColor = ""
                      ;(e.currentTarget as HTMLElement).style.color = ""
                    }}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Like + Bookmark */}
          <div className="flex items-center justify-between bg-white rounded-2xl px-6 py-4 shadow-sm border border-zinc-100 mb-16">
            <button
              onClick={handleLike}
              className="flex items-center gap-2 text-zinc-500 hover:text-amber-600 transition-colors group"
              aria-label="Like article"
            >
              <BiLike className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold">{likes} Likes</span>
            </button>
            <button
              onClick={handleBookmark}
              className={`flex items-center gap-2 px-5 py-2 rounded-full border-2 text-sm font-semibold transition-all duration-300 ${
                bookmarked
                  ? "bg-amber-500 border-amber-500 text-white shadow-md"
                  : "border-zinc-300 text-zinc-600 hover:border-zinc-800 hover:text-zinc-800"
              }`}
              aria-label={bookmarked ? "Remove bookmark" : "Bookmark article"}
            >
              <HiOutlineBookmark className="w-4 h-4" />
              {bookmarked ? "Saved" : "Save"}
            </button>
          </div>
        </div>

        {/* ── Sidebar ── */}
        <div className="md:w-[33%] w-full md:sticky md:top-10 h-full space-y-5">
          <BlogAside />
        </div>

      </div>
    </div>
  )
}