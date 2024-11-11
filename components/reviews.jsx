'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { useState, useEffect ,useRef} from 'react'
import { Card, CardContent, CardDescription } from "@/components/ui/card"
import { getClientLogos } from '@/lib/contentful'
import { Skeleton } from './ui/skeleton'

// Sample data for the cards
const testimonials = [
    {
      imageSrc: "https://i.pravatar.cc/300?img=1",
      name: "Sarah Thompson",
      company: "TechInnovate Solutions",
      testimonial:
        "Working with this team has been an absolute game-changer for our company. Their innovative approach and dedication to excellence have helped us achieve results beyond our expectations. I can't recommend them enough!",
    },
    {
      imageSrc: "https://i.pravatar.cc/300?img=2",
      name: "John Doe",
      company: "NextGen Enterprises",
      testimonial:
        "The results we've seen after collaborating with this team are nothing short of extraordinary. Their expertise and attention to detail have greatly impacted our success. Highly recommend them for any project.",
    },
    {
      imageSrc: "https://i.pravatar.cc/300?img=3",
      name: "Emma Watson",
      company: "Web Solutions Inc.",
      testimonial:
        "I've never worked with a more dedicated and creative team. They brought our vision to life in ways we couldn't have imagined. The final product exceeded our expectations in every way.",
    },
    {
      imageSrc: "https://i.pravatar.cc/300?img=4",
      name: "Michael Johnson",
      company: "Design Masters",
      testimonial:
        "This team's commitment to excellence and customer satisfaction is unparalleled. They are professional, efficient, and truly care about the success of your business.",
    },
  ];

const TestimonialCard = ({ imageSrc, name, company, testimonial }) => {
    return <Card className="w-full w-[400px] max-h-max rounded-lg mx-auto border">
    <CardContent className="p-6">
      <div className="flex items-start space-x-4">
        <Avatar className="w-12 h-12">
          <AvatarImage src={imageSrc} alt={name} />
          <AvatarFallback>
            {name.split(" ").map((n) => n[0]).join("")}
          </AvatarFallback>
        </Avatar>
        <div className="space-y-1.5">
          <h3 className="font-semibold text-lg leading-none">{name}</h3>
          <p className="text-sm text-muted-foreground">{company}</p>
        </div>
      </div>
      <blockquote className="mt-4 text-muted-foreground">
      &quot;{testimonial}&quot;
      </blockquote>
    </CardContent>
  </Card>
}

export default function MarqueeCards() {
  const [isPaused, setIsPaused] = useState(false)
  const [images,setImages] = useState([])
  useEffect(()=>{
    async function get(){
    const res = await getClientLogos();
    setImages(res[0].images)
  }
  get()
},[])

  if (images.length===0) {
    return <div className="w-full flex items-center justify-center bg-gray-100">
      
    <Skeleton className="w-full h-[200px]" />
  </div>
  }

  return (
    <div 
      className="w-full my-36 overflow-hidden bg-background"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        className={`inline-flex gap-x-8 animate-marquee h-[50px] md:h-[65px] xl:h-[70px]`} //${isPaused ? '' : 'animate-marquee'}
        style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
      >
        {images.map((img,idx)=>{
          return <img key={idx} src={img}/>
        })}
        {images.map((img,idx)=>{
          return <img key={idx} src={img}/>
        })}
        
        
      </div>
    </div>
  )
}