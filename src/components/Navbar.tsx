"use client";

import { Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      const contactSection = document.getElementById("kontakt");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#050505]/90 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3" : "bg-gradient-to-b from-black/80 to-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Logo Serwis Kół"
            width={200}
            height={60}
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-8 xl:gap-12 text-base font-semibold">
          <Link href="/#o-nas" className="text-gray-300 hover:text-white transition-colors hover:text-primary">
            O nas
          </Link>
          <Link href="/#cennik" className="text-gray-300 hover:text-white transition-colors hover:text-primary">
            Oferta
          </Link>
          <Link href="/#faq" className="text-gray-300 hover:text-white transition-colors hover:text-primary">
            FAQ
          </Link>
          <Link href="/#kontakt" className="text-gray-300 hover:text-white transition-colors hover:text-primary" onClick={scrollToContact}>
            Kontakt
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-2 text-sm">
            <Phone size={16} className="text-primary" />
            <span className="font-bold">+48 609 033 739</span>
          </div>
          <Link
            href="/#kontakt"
            onClick={scrollToContact}
            className="bg-gradient-to-r from-[#da291c] to-[#ff4b3e] text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(218,41,28,0.3)] hover:shadow-[0_0_25px_rgba(218,41,28,0.6)] border border-white/20"
          >
            Umów wizytę
          </Link>
        </div>
      </div>
    </nav>
  );
}
