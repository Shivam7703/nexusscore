"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { sus1, sus2, sus3, sus4 } from "@/assets";
import { IoMdArrowDropdownCircle } from "react-icons/io";

export default function Sustainsec3() {
  const lineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateLineHeight = () => {
      if (!sectionRef.current || !lineRef.current) return;

      const { top, height } = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollProgress = Math.min(
        1,
        Math.max(0, (viewportHeight - top - 140) / height)
      );

      lineRef.current.style.height = `${scrollProgress * (height - 100)}px`;
    };

    const handleScroll = () => {
      requestAnimationFrame(updateLineHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="bg-blue-200 lg:px-28 md:px-20 sm:px-14 sm:pb-20 overflow-hidden p-6"
      ref={sectionRef}
    >
      <div className="w-full relative sm:py-7 pb-6 max-md:pl-8">
        {/* Background static green line */}
        <div className="absolute md:left-1/2 left-0 z-10 -translate-x-1/2 bg-green2 h-[98%] w-1 top-3 transition-all duration-300" />

        {/* Dynamic scroll progress line */}
        <div
          ref={lineRef}
          className="absolute md:left-1/2 left-0 z-20 -translate-x-1/2 w-1 top-3"
        >
          <div className="w-full h-full bg-green1 relative transition-[height] duration-500 ease-out">
            {/* Arrow */}
            <IoMdArrowDropdownCircle className="absolute -bottom-2 -left-4 text-green1 text-4xl bg-white rounded-full z-30" />
          </div>
        </div>

        {/* Content Blocks */}
        <Sustain
          img={sus1}
          title="MORE YIELDS, LESS IMPACT"
          text="Wembley International has established its mission to boost crop yield production by reducing environmental damage. The company delivers new farming solutions that enable sustainable crop growth to produce healthier yields for the next generation of planet stewardship. Through the use of modern technology, the company enables farmers to tackle problems that stem from climate fluctuations and limited resource availability. Wembley International applies these methods to enhance crop expansion while maintaining sustainable agricultural practices into the future. Wembley International believes farmers must unite their operations with environmental protection to form a sustainable farming system of the future."
          cls="md:!flex-row-reverse md:mb-9 mb-5"
        />

        <Sustain
          img={sus2}
          title="COMMITMENT TO SUSTAINABLE PRACTICES"
          text="Wembley International dedicates itself to environmental conservation efforts combined with operations and sustainability development. With a focus on diversity, inclusion, and responsible practices, the company champions environmental and social responsibility. The organization works with its international partners to embrace the best sustainability practices. Wembley International offers training initiatives that assist staff members in developing innovative solutions and implementing eco-conscious practices. Wembley International recognizes that community success depends directly on ecosystem success."
          cls=""
        />

         <Sustain
          img={sus3}
          title="Smart Farming for a Greener Tomorrow
"
          text="Wembley International is focused on implementing state-of-the-art farming technology that would maximize crop output without the negative consequences on nature. Precision farming techniques can help farmers save resources, which can help control water wastage and degradation in the soil; hence, high production can be achieved, and the use of pesticides can be minimized. Wembley concentrates on the data-driven solutions that would increase productivity without affecting the natural ecosystem.
With AI-driven monitoring systems, drought-resistant crop development, and eco-friendly fertilizers, Wembley promotes sustainable ways of farming for long-term food security. We aim to support farmers in producing maximum yield with the least, which ensures a greener future for the coming generations.
"
          cls="md:!flex-row-reverse md:mb-9 mb-5"
        />

        <Sustain
          img={sus4}
          title="Sustainable Agriculture for Future Generations"
          text="Wembley International believes that there is no way farming and sustainability can be separated. Our mission is to get into the business of developing farming solutions that would enhance soil health, biodiversity, and climate resilience. Through cutting carbon emissions and introducing environmentally friendly methods of crop protection, we help the farmers grow healthy crops without destroying the planet.
Our dedication to renewable energy-driven farming, biodegradable crop protection efforts, and measures of restoring soil guarantees that agriculture will continue to be economically viable and environmentally sustainable. Wembley equips farmers with affordable, science-based solutions that ensure the sustainability of the best farmlands for future generations while maximizing high-quality, nutritious produce."
          cls=""
        />
      </div>
    </section>
  );
}

function Sustain({ img, text, title, cls }: any) {
  return (
    <div
      className={`${cls} items-stretch flex flex-wrap justify-between gap-y-2`}
    >
      <div className="md:w-[47%] w-full h-auto">
        <Image
          src={img}
          alt=""
          className="w-full min-h-72 h-full object-cover"
        />
      </div>
      <div className="py-6 md:w-[47%] w-full">
        <h2 className="text-green1 uppercase font-bold text-2xl md:text-4xl mb-4">
          {title}
        </h2>
        <p className="text-zinc-800 sm:text-lg">{text}</p>
      </div>
    </div>
  );
}
