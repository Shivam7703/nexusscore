import React from "react";
import { AiFillRightCircle } from "react-icons/ai";
import Image from "next/image";
import { contat } from "@/assets";

function Form({ contactdata }: any) {
  return (
    <div>
      <div className="flex lg:p-28 sm:p-12 p-7 relative flex-wrap justify-between min-h-screen mx-auto">
        {contactdata && (
          <div className="md:w-[45%] w-full">
            <Image
              src={contat}
              alt="contact"
              className="w-full md:h-96 h-72 mb-4 md:mb-7 object-cover rounded-xl"
            />
            <div className="bg-yellow3 md:p-9 p-4 rounded-xl">
              <h4 className="mb-3 font-bold text-xl md:text-2xl">
                {contactdata?.title}
              </h4>
              <p>{contactdata?.para}</p>
              <div className="mt-6 space-y-3">
                {contactdata?.detail?.map((data: any) => (
                  <div
                    key={data.id}
                    className="flex group duration-300 group-hover:border-green1 gap-5 py-2 md:py-4 border-b border-[#ffcf3eb5]"
                  >
                    <div className="text-3xl md:text-4xl mt-2 text-brown2 group-hover:text-green1 duration-300">
                      {data?.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brown2 group-hover:text-white duration-300 mb-1">
                        {data?.title}
                      </h3>

                      {data?.text.map((wrd: any) => (
                        <p
                          className="text-white font-medium  hover:!text-zinc-900"
                          key={wrd?.id}
                        >
                          {wrd.text}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="md:w-1/2 md:sticky left-0 top-20 px-7 h-full py-10 w-full rounded-xl">
          <h4 className="text-green1 mb-3 font-bold text-sm rounded-lg w-max">
            Let's Cooperate Together
          </h4>
          <h2 className="text-zinc-900 mb-6 text-3xl md:text-5xl font-bold">
            Contact Us Today!
          </h2>
          <p className="text-zinc-600 mb-6 text-sm md:text-base">
            Connect With nexus For Reliable Crop Protection & Farming Support.
            We're Here to Help Your Agriculture Thrive With Expert Solutions.
          </p>
          <form className="flex flex-wrap gap-y-6 py-3 justify-between">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full py-3 placeholder:text-zinc-500 px-4 bg-[#00000008] backdrop-blur-sm sm:w-[48%] rounded-3xl"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full py-3 placeholder:text-zinc-500 px-4 bg-[#00000008] backdrop-blur-sm sm:w-[48%] rounded-3xl"
              required
            />
            <input
              type="phone"
              placeholder="Your Contact No."
              className="w-full placeholder:text-zinc-500 py-3 px-4 bg-[#00000008] backdrop-blur-sm sm:w-[48%] rounded-3xl"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full py-3 placeholder:text-zinc-500 px-4 bg-[#00000008] backdrop-blur-sm sm:w-[48%] rounded-3xl"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full py-3 placeholder:text-zinc-500 px-4 bg-[#00000008] backdrop-blur-sm rounded-3xl h-28 md:h-32"
              required
            ></textarea>
            <button
              type="submit"
              className="flex shadow gap-2 p-2 mt-4 text-white font-bold rounded-[29px] group relative bg-green1 overflow-hidden items-center flex-row h-full"
            >
              <p className="ml-6 mr-4 z-20">Submit Now</p>
              <AiFillRightCircle className="text-yellow3 text-4xl bg-white group-hover:text-black duration-200 rounded-full z-20" />
              <div className="group-hover:w-full duration-300 h-full bg-yellow3 absolute z-10 w-0 top-0 right-0"></div>
            </button>
          </form>
        </div>
      </div>

      <div className="w-full md:h-[550px] h-80">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63381.1314401823!2d39.15392064863281!3d-6.852106299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c49f3b724a469%3A0x2aad3ba80fb6153d!2sElegant%20House!5e0!3m2!1sen!2sin!4v1745916166334!5m2!1sen!2sin"
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Form;
