"use client"
import React, { useEffect, useState, useRef } from 'react';

function VideoText({ text }) {
  const [offsetY, setOffsetY] = useState(0);
  const containerRef = useRef(null);

  const handleScroll = () => {
    if (containerRef.current) {
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const startOffset = 70; // Adjust this value to start the effect earlier

      // Start parallax effect when the container is close to entering the viewport
      if (containerTop < windowHeight + startOffset && containerTop > -containerRef.current.offsetHeight) {
        setOffsetY((containerTop - startOffset) * 0.3); // Adjust multiplier for desired parallax intensity
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative mt-36 w-full h-[30vh] md:h-[40vh] overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="bgvid.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{ transform: `translateY(${offsetY}px)` }}
      ></video>

      {/* Overlay with text */}
      <div className="flex items-center justify-center absolute inset-0 bg-[#ffffff75]">
        <h1
          className="uppercase text-md md:text-3xl tracking-wider font-bold"
          style={{ whiteSpace: 'wrap', textAlign: 'center' }}
          dangerouslySetInnerHTML={{ __html: text }}
        ></h1>
      </div>
    </div>
  );
}

export default VideoText;
