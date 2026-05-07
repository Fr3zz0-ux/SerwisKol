"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const imagesRow1 = [
    { src: "/images/gallery_1.png", alt: "galeria1" },
    { src: "/images/gallery_2.png", alt: "galeria2" },
    { src: "/images/gallery_3.png", alt: "galeria3" },
    { src: "/images/gallery_4.png", alt: "galeria4" },
    { src: "/images/gallery_5.png", alt: "galeria5" },
    { src: "/images/gallery_6.png", alt: "galeria6" },
    { src: "/images/gallery_7.png", alt: "galeria7" },
    { src: "/images/gallery_8.png", alt: "galeria8" },
    { src: "/images/gallery_9.png", alt: "galeria9" },
    { src: "/images/gallery_10.png", alt: "galeria10" },
    { src: "/images/gallery_11.png", alt: "galeria11" },
    { src: "/images/gallery_12.png", alt: "galeria12" },
    { src: "/images/gallery_13.png", alt: "galeria13" },
    { src: "/images/gallery_14.png", alt: "galeria14" },
    { src: "/images/gallery_15.png", alt: "galeria15" },
    { src: "/images/gallery_16.png", alt: "galeria16" },
    { src: "/images/gallery_17.png", alt: "galeria17" },
    { src: "/images/gallery_18.png", alt: "galeria18" },
    { src: "/images/gallery_19.png", alt: "galeria19" },
    { src: "/images/gallery_20.png", alt: "galeria20" },
    { src: "/images/gallery_21.png", alt: "galeria21" },
    { src: "/images/gallery_22.png", alt: "galeria22" },
    { src: "/images/gallery_23.png", alt: "galeria23" },
    { src: "/images/gallery_24.png", alt: "galeria24" },
    { src: "/images/gallery_25.png", alt: "galeria25" },
    { src: "/images/gallery_26.png", alt: "galeria26" },
    { src: "/images/gallery_27.png", alt: "galeria27" },
    { src: "/images/gallery_28.png", alt: "galeria28" },
    { src: "/images/gallery_29.png", alt: "galeria29" },
    { src: "/images/gallery_30.png", alt: "galeria30" },
    { src: "/images/gallery_31.png", alt: "galeria31" },
    { src: "/images/gallery_32.png", alt: "galeria32" },
    { src: "/images/gallery_33.png", alt: "galeria33" },
    { src: "/images/gallery_34.png", alt: "galeria34" },
    { src: "/images/gallery_35.png", alt: "galeria35" },
    { src: "/images/gallery_36.png", alt: "galeria36" },
    { src: "/images/gallery_37.png", alt: "galeria37" },
    { src: "/images/gallery_38.png", alt: "galeria38" },
    { src: "/images/gallery_39.png", alt: "galeria39" },
    { src: "/images/gallery_40.png", alt: "galeria40" }
  ];
  const renderRow = (images: { src: string, alt: string }[], reverse: boolean = false) => {
    const animationClass = reverse ? "animate-marquee-reverse" : "animate-marquee";

    return (
      <div className="relative flex w-full group">
        <div className={`flex min-w-full shrink-0 ${animationClass} gap-8 pr-8 group-hover:[animation-play-state:paused]`}>
          {[...images, ...images].map((img, idx) => (
            <div 
              key={`row1-${idx}`} 
              onClick={() => setSelectedImage(img.src)}
              className="relative w-[280px] md:w-[380px] aspect-[4/3] shrink-0 rounded-2xl overflow-hidden border border-white/5 cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(220,38,38,0.3)] hover:border-red-500/40 group/item hover:z-10"
            >
              <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 280px, 380px" className="object-cover transition-transform duration-700 group-hover/item:scale-110" />
            </div>
          ))}
        </div>
        <div aria-hidden="true" className={`flex min-w-full shrink-0 ${animationClass} gap-8 pr-8 group-hover:[animation-play-state:paused]`}>
          {[...images, ...images].map((img, idx) => (
            <div 
              key={`row2-${idx}`} 
              onClick={() => setSelectedImage(img.src)}
              className="relative w-[280px] md:w-[380px] aspect-[4/3] shrink-0 rounded-2xl overflow-hidden border border-white/5 cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(220,38,38,0.3)] hover:border-red-500/40 group/item hover:z-10"
            >
              <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 280px, 380px" className="object-cover transition-transform duration-700 group-hover/item:scale-110" />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="py-24 bg-card border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-center uppercase">
          Nasze Realizacje
        </h2>
      </div>

      <div className="flex flex-col gap-8 w-full">
        {renderRow(imagesRow1, false)}
      </div>

      {/* Lightbox (Powiększone zdjęcie) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 z-50 p-3 bg-white/10 hover:bg-red-600 rounded-full transition-colors text-white backdrop-blur-sm"
          >
            <X size={24} />
          </button>
          
          <div 
            className="relative flex justify-center items-center max-w-[95vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={selectedImage} 
              alt="Powiększone zdjęcie" 
              className="w-auto h-auto max-w-full max-h-[90vh] rounded-2xl shadow-[0_0_60px_rgba(220,38,38,0.25)] ring-1 ring-white/20 object-contain" 
            />
          </div>
        </div>
      )}
    </section>
  );
}
