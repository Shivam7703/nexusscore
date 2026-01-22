import Blogsection from '@/components/blogs/Blogs'
import Banner from '@/components/global/banner'
import { blogData } from '@/data/homeData'
import React from 'react'

function Blogs() {
  return (
    <>
      <Banner img ={blogData?.img}
title={blogData.title1}
para={"Stay Updated With The Latest in Crop Protection! Explore Expert Insights, News, and Innovations for Healthier Farms."}
slug={blogData.title1.toLowerCase()}/>

<Blogsection data={blogData}/>
    </>
  )
}

export default Blogs
