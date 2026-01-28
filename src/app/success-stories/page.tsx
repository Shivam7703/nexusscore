import { bann } from '@/assets'
import Banner from '@/components/global/banner'
import Stories from '@/components/success-stories/stories'
import React from 'react'

function page() {
  return (
    <>
        <Banner
        img={bann}
        title={"Success Stories"}
        para={
          "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
        slug={"success-stories"}
      />
      <Stories/>
    </>
  )
}

export default page
