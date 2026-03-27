import { bann } from '@/assets'
import Banner from '@/components/global/banner'
import CountDown from '@/components/home/Contdown'
import ServiceSection from '@/components/services/service'
import Serviceschoose from '@/components/services/whyChoose'
import { countDown } from '@/data/homeData'
import React from 'react'

// metatitle: About Nexuscore Overseas

// metakey:Immigration Consultants In Noida, Visa Consultants In Delhi

// metadesc:Nexuscore Overseas is a trusted name among Immigration Consultants in Noida and Visa Consultants in Delhi, offering expert guidance for study, work, and PR visas.

// url: https://www.nexuscoreoverseas.com/about-us

function Services() {
  return (
    <>
       <Banner
             img={bann}
             title={"Our Services"}
             para={
               "Our immigration services offer clear guidance, accurate documentation, and end-to-end support for global visa applications."
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
