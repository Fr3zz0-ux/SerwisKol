"use client";

import Image from "next/image";

export default function Gallery() {
  const imagesRow1 = [
    { src: "/images/gallery_1.png", alt: "Wymiana opon" },
    { src: "/images/gallery_2.png", alt: "Klucz udarowy" },
    { src: "/images/gallery_3.png", alt: "Auto na podnośniku" },
    { src: "/images/gallery_4.png", alt: "Serwis klimatyzacji" }
  ];
  const renderRow = (images: {src: string, alt: string}[], reverse: boolean = false) => {
    const animationClass = reverse ? "animate-marquee-reverse" : "animate-marquee";
    
    return (
      <div className="relative flex w-full group">
        <div className={`flex min-w-full shrink-0 ${animationClass} gap-8 pr-8 group-hover:[animation-play-state:paused]`}>
          {[...images, ...images].map((img, idx) => (
            <div key={idx} className="relative w-[280px] md:w-[380px] aspect-[4/3] shrink-0 rounded-2xl overflow-hidden border border-white/5">
              <Image src={img.src} alt={img.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
        <div aria-hidden="true" className={`flex min-w-full shrink-0 ${animationClass} gap-8 pr-8 group-hover:[animation-play-state:paused]`}>
          {[...images, ...images].map((img, idx) => (
            <div key={idx} className="relative w-[280px] md:w-[380px] aspect-[4/3] shrink-0 rounded-2xl overflow-hidden border border-white/5">
              <Image src={img.src} alt={img.alt} fill className="object-cover" />
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
    </section>
  );
}
