"use client";

import { Phone, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      setMobileMenuOpen(false); // Zamknij menu na mobilce po kliknięciu
      const contactSection = document.getElementById("kontakt");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
        // Ustawiamy hash w URL, żeby nawigacja była spójna
        window.history.pushState(null, "", "/#kontakt");
      }
    } else {
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      setMobileMenuOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
      // Resetujemy hash w URL, aby ponowne kliknięcie w linki typu #faq działało poprawnie
      window.history.pushState(null, "", "/");
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-6"}`}
    >
      {/* Tło paska nawigacji - oddzielone, by nie psuć fixed dla menu mobilnego */}
      <div className={`absolute inset-0 transition-all duration-500 ${scrolled ? "bg-[#050505]/90 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)]" : "bg-gradient-to-b from-black/80 to-transparent"}`}></div>

      <div className="container mx-auto px-6 flex items-center justify-between relative z-50">
        <Link href="/" onClick={scrollToTop} className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Logo Serwis Kół"
            width={200}
            height={60}
            className="h-10 md:h-12 w-auto object-contain relative z-50"
          />
        </Link>

        {/* Menu Desktopowe */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12 text-base font-semibold">
          <Link href="/#o-nas" className="text-gray-300 hover:text-white transition-colors hover:text-[#da291c]">
            O nas
          </Link>
          <Link href="/#cennik" className="text-gray-300 hover:text-white transition-colors hover:text-[#da291c]">
            Oferta
          </Link>
          <Link href="/#faq" className="text-gray-300 hover:text-white transition-colors hover:text-[#da291c]">
            FAQ
          </Link>
          <Link href="/#kontakt" className="text-gray-300 hover:text-white transition-colors hover:text-[#da291c]" onClick={scrollToContact}>
            Kontakt
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-2 text-sm">
            <Phone size={16} className="text-[#da291c]" />
            <Link href="tel:+48609033739" className="hover:text-primary transition-colors font-bold">+48 609 033 739</Link>
          </div>
          <Link
            href="/#kontakt"
            onClick={scrollToContact}
            className="bg-gradient-to-r from-[#da291c] to-[#ff4b3e] text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(218,41,28,0.3)] hover:shadow-[0_0_25px_rgba(218,41,28,0.6)] border border-white/20"
          >
            Umów wizytę
          </Link>
        </div>

        {/* Hamburger (Mobile) */}
        <button
          className="lg:hidden relative z-50 text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobilne (Pełnoekranowe) */}
      <div
        className={`fixed inset-0 bg-[#050505]/95 backdrop-blur-2xl z-40 transition-all duration-500 lg:hidden flex flex-col items-center justify-center gap-8 ${mobileMenuOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-10"
          }`}
      >
        <Link href="/#o-nas" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-gray-200 hover:text-white">
          O nas
        </Link>
        <Link href="/#cennik" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-gray-200 hover:text-white">
          Oferta
        </Link>
        <Link href="/#faq" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-gray-200 hover:text-white">
          FAQ
        </Link>
        <Link href="/#kontakt" onClick={scrollToContact} className="text-2xl font-bold text-gray-200 hover:text-white">
          Kontakt
        </Link>

        <div className="flex items-center gap-2 mt-8 mb-4">
          <Phone size={20} className="text-[#da291c]" />
          <a href="tel:+48609033739" className="hover:text-[#da291c] transition-colors text-xl font-bold">+48 609 033 739</a>
        </div>

        <Link
          href="/#kontakt"
          onClick={scrollToContact}
          className="bg-gradient-to-r from-[#da291c] to-[#ff4b3e] text-white px-10 py-4 rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(218,41,28,0.4)] border border-white/20"
        >
          Umów wizytę
        </Link>
      </div>
    </header>
  );
}
