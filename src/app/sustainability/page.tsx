import { susbanner } from "@/assets";
import Banner from "@/components/global/banner";
import Sustainsec3 from "@/components/sustainbility/sec";
import Sustainsec1 from "@/components/sustainbility/sec1";
import Sustainsec2 from "@/components/sustainbility/sec2";
import React from "react";

function page() {
  return (
    <>
      <Banner
        img={susbanner}
        title={"Sustainability"}
        para={
          "At nexus International, we’re committed to making a real impact—using innovative solutions to drive sustainable practices for healthier crops and a greener future."
        }
        slug={"sustainability"}
      />
      <Sustainsec1 />
      <Sustainsec2 />
      <Sustainsec3 />
    </>
  );
}

export default page;
