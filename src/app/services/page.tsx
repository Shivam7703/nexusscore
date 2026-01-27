import { bann } from '@/assets'
import Banner from '@/components/global/banner'
import ServiceSection from '@/components/services/service'
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

    </>
  )
}

export default Services
