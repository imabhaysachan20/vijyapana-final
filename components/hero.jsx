'use client';
import React, { useEffect, useState } from 'react'
import Autoplay from "embla-carousel-autoplay"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import img1 from "@/public/hero/1.jpg"

  import img2 from "@/public/hero/1.jpg"
  import img3 from "@/public/hero/1.jpg"
  
import Image from 'next/image'
import TalkToUsBTN from './TalkToUsBTN';
import { getHeroImages } from '@/lib/contentful';
import { Skeleton } from './ui/skeleton';
function Hero() {
  const [images,setImages] = useState([])
  useEffect(()=>{
    async function get(){
    const res = await getHeroImages();
    setImages(res[0].images)
  }
  
  
  get()
},[])

  if (images.length===0) {
    return <div className="w-full flex items-center justify-center bg-gray-100">
    <Skeleton className="w-full h-[250px] sm:h-[275px] md:h-[300px] lg:h-[500px] 2xl:h-[600px]" />
  </div>
  }
  return (
    <Carousel opts={{
      loop:true
    }} plugins={[
      Autoplay({
        delay: 3000,
      }),]} className="mt-[106px] md:mt-[64px] border">
  <CarouselContent>
    {images.map((img,idx)=>{
      return <CarouselItem key={idx}>
      <div className=' relative '>
      <Image 
  src={img} 
  
  
  width={1200}
  height={400}
  quality={100}
  className="w-full h-full object-contain md:object-center" 
  alt="hero" 
/>          </div>
  </CarouselItem>
    })}
    
    
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
  <TalkToUsBTN className={"absolute text-xs w-[94px] h-[25px] shadow-none md:w-auto md:h-auto md:shadow-md right-4 md:right-6 bottom-2 md:bottom-6"}/>
</Carousel>


  )
}

export default Hero
