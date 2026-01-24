import Banner from '@/components/global/banner'
import React from 'react'
import { contactdetail } from '@/data/homeData'
import Form from '@/components/contact/form'
import { bann } from '@/assets'
import ConDetail from '@/components/contact/condetail'

function Contact() {
  return (
    <>
      <Banner
             img={bann}
             title={"Contact Us"}
             para={
               "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
             }
             slug={"contact-us"}
           />
           <Form />
<ConDetail data={contactdetail}/>
    </>  
  )
}

export default Contact
