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
          "Discover inspiring success stories of individuals who have successfully immigrated to their dream destinations. From overcoming challenges to achieving their goals, these stories highlight the transformative power of immigration and the opportunities it can bring."
        }
        slug={"success-stories"}
      />
      <Stories/>
    </>
  )
}

export default page
