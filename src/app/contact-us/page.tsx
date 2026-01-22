import Banner from '@/components/global/banner'
import React from 'react'
import { contactBanner,contactsec1 } from '@/data/homeData'
import Form from '@/components/contact/form'

function Contact() {
  return (
    <>
      <Banner img ={contactBanner?.img}
      title={contactBanner.title}
      para={contactBanner.para}
      slug={contactBanner.slug}/>

<Form contactdata ={contactsec1}/>
    </>  
  )
}

export default Contact
