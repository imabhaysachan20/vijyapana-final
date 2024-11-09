import React from 'react'
import SectionTitle from './SectionTitle'
import MarqueeCards from "@/components/reviews";

function Testimonials() {
  return (
    <div className='mb-12'>
      <SectionTitle text={"Our Clients"}></SectionTitle>
      <MarqueeCards/>
    </div>
  )
}

export default Testimonials
