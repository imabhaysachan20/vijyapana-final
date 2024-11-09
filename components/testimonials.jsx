import React from 'react'
import SectionTitle from './SectionTitle'
import MarqueeCards from "@/components/reviews";

function Testimonials() {
  return (
    <div>
      <SectionTitle text={"Testimonials"}></SectionTitle>
      <MarqueeCards/>
    </div>
  )
}

export default Testimonials
