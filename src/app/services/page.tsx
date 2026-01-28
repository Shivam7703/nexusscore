import { bann } from '@/assets'
import Banner from '@/components/global/banner'
import CountDown from '@/components/home/Contdown'
import ServiceSection from '@/components/services/service'
import Serviceschoose from '@/components/services/whyChoose'
import { countDown } from '@/data/homeData'
import React from 'react'

function Services() {
  return (
    <>
       <Banner
             img={bann}
             title={"Our Services"}
             para={
               "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
             }
             slug={"services"}
           />

                  <ServiceSection/>  
                  <CountDown data={countDown} />
                      <Serviceschoose/>
    </>
  )
}

export default Services
