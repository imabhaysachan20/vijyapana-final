"use client"
import { Separator } from "@/components/ui/separator"

import { Button } from "@/components/ui/button";
import { useState } from "react";


import {FaLinkedin} from "react-icons/fa";
import { Input } from "@/components/ui/input"
import { SelectValue,Select,SelectItem,SelectTrigger,SelectContent } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { toast } from "react-toastify";


const Form = () => {
  const[submitting,setSubmitting] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true)
    // Create a new FormData object from the form
    const formData = new FormData(e.target);

    // Log the form data (optional)
    const formValues = Object.fromEntries(formData.entries());
    
    fetch('https://sheetdb.io/api/v1/sahs3bkkugx22', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          data: [
                  formValues
          ]
      })
  })
    .then((response) => toast.success("Submitted"))
    .finally(()=>{
      setSubmitting(false)
    })
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 bg-white shadow-md rounded-md space-y-6">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Join Vijyapana</h2>

      <div className="space-y-2">
        <Label>Name *</Label>
        <Input
          type="text"
          name="name"
          placeholder="First and Last Name"
          required
        />
      </div>

      <div className="space-y-2">
        <Label>Email *</Label>
        <Input
          type="email"
          name="email"
          required
        />
      </div>

      <div className="space-y-2">
        <Label>Phone Number *</Label>
        <Input
          type="tel"
          name="phoneNumber"
          required
          maxLength={10}
        />
      </div>

      <div className="space-y-2">
        <Label>WhatsApp or Alternate Number *</Label>
        <Input
        maxLength={10}
          type="tel"
          name="whatsappNumber"
          required
        />
      </div>

      <div className="space-y-2">
        <Label>Which field do you specialize in? *</Label>
        <Select name="speciality" required>
          <SelectTrigger><SelectValue placeholder="Select a field" /></SelectTrigger>
          <SelectContent >
            <SelectItem value="SOUND ENGINEER & MUSIC PRODUCER">Sound Engineer & Music Producer</SelectItem>
            <SelectItem value="VOICE-OVER ARTIST">Voice-Over Artist</SelectItem>
            <SelectItem value="GRAPHIC DESIGNER">Graphic Designer</SelectItem>
            <SelectItem value="VIDEO EDITOR">Video Editor</SelectItem>
            <SelectItem value="VFX, CGI AND ANIMATION CONTENTS">VFX, CGI, and Animation Contents</SelectItem>
            <SelectItem value="BUSINESS DEVELOPMENT ASSOCIATE">Business Development Associate</SelectItem>
            <SelectItem value="COPY WRITING">Copy Writing</SelectItem>
            <SelectItem value="WEB DEVELOPER">Web Developer</SelectItem>
            <SelectItem value="CONTENT CREATORS (Reels and Stuff)">Content Creators (Reels and Stuff)</SelectItem>
            <SelectItem value="PHOTOGRAPHER (Mobile or Camera)">Photographer (Mobile or Camera)</SelectItem>
            <SelectItem value="CINEMATOGRAPHER">Cinematographer</SelectItem>
            <SelectItem value="LYRICIST">Lyricist</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Past Experience (If any) *</Label>
        <Select name="experience" required>
          <SelectTrigger><SelectValue placeholder="Select a option"></SelectValue></SelectTrigger>
          <SelectContent>
            <SelectItem value="YES">Yes</SelectItem>
            <SelectItem value="NO">No</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>How long have you had talent in this expertise? *</Label>
        <Textarea
          name="talentDuration"
          required
          placeholder="Describe your experience duration"
        />
      </div>

      <Button disabled={submitting} className="w-full mt-4">Submit</Button>
      
      <Separator />

      <div>
        <h1 className="text-center font-semibold text-lg">Send Your Resume At</h1>
        <p className="text-center text-md flex justify-between mt-2">
          <Link href="mailto:career@vijyapana.com">
            <span className="inline-flex items-center relative top-[1px] gap-x-1">career@vijyapana.com</span>
          </Link>
          <Link href="https://www.linkedin.com/in/vijyapana-advertisements-1b119832b/">
            <span className="flex items-center"><FaLinkedin />/vijyapana</span>
          </Link>
        </p>
      </div>
    </form>
  );
};


export default Form
