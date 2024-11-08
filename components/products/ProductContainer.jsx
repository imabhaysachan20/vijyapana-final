import React, { useEffect, useRef } from "react";
import ProductCard from "./ProductCard";
import { v4 as uuid } from "uuid";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ProductContainer({ products, setVisible, setActiveProduct }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.children;
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        stagger: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [products]);

  return (
    <section
      ref={sectionRef}
      className="grid grid-cols-2 gap-3 gap-y-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8"
    >
      {products.map((product) => {
        const { name, thumbnail, insideImages, pdfFile } = product;
        return (
          <ProductCard
            key={uuid()}
            setActiveProduct={setActiveProduct}
            name={name}
            thumbnail={thumbnail}
            insideImages={insideImages}
            pdfFile={pdfFile}
            setVisible={setVisible}
          />
        );
      })}
    </section>
  );
}

export default ProductContainer;
