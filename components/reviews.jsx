'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { useState, useEffect ,useRef} from 'react'
import { Card, CardContent, CardDescription } from "@/components/ui/card"
import { getServices } from '@/lib/contentful'
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
  const [services,setServices] = useState([])
  
  useEffect(()=>{
    const get = async()=>{
      const res = await getServices()
      setServices(res);
    }
    get()
  },[])
  
  if (services.length==0) {
    return <div className='flex my-28'>{new Array(6).fill().map((_, index) => (
      <Card key={index} className="w-[300px] mx-4 my-2 flex-shrink-0">
        <CardContent className="p-0">
          <Skeleton className="w-full h-[200px]" />
          <Skeleton className="h-8 mt-4 mx-4" />
        </CardContent>
      </Card>))}</div>
  }

  return (
    <div 
      className="w-full my-24 overflow-hidden bg-background"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        className={`inline-flex gap-x-8 animate-marquee`} //${isPaused ? '' : 'animate-marquee'}
        style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
      >
        {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          imageSrc={testimonial.imageSrc}
          name={testimonial.name}
          company={testimonial.company}
          testimonial={testimonial.testimonial}
        />
      ))}
        {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          imageSrc={testimonial.imageSrc}
          name={testimonial.name}
          company={testimonial.company}
          testimonial={testimonial.testimonial}
        />
      ))}
        
      </div>
    </div>
  )
}