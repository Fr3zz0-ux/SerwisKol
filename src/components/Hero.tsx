"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("kontakt");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_bg.webp"
          alt="Garaż Serwisu Samochodowego"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        {/* Luksusowy gradient overlay + winieta */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-[#050505]/40 to-[#050505]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#050505]/50 to-[#050505] opacity-90"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center mt-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white mb-6 drop-shadow-2xl">
          Zadbaj o <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#da291c] to-[#ff4b3e] filter drop-shadow-[0_0_15px_rgba(218,41,28,0.5)]">Bezpieczeństwo</span>
          <br />i Komfort
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Profesjonalna wymiana opon, wyważanie oraz serwis klimatyzacji samochodowej. Szybko, solidnie i w najlepszych cenach.
        </p>
        <Link
          href="#kontakt"
          onClick={scrollToContact}
          className="inline-block bg-gradient-to-r from-[#da291c] to-[#ff4b3e] border border-white/20 text-white px-10 py-5 rounded-lg font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(218,41,28,0.4)] hover:shadow-[0_0_40px_rgba(218,41,28,0.7)] hover:scale-105 uppercase tracking-widest"
        >
          UMÓW WIZYTĘ
        </Link>
      </div>
    </section>
  );
}
