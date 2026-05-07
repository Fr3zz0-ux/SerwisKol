import Image from "next/image";
import { Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Services() {
  return (
    <section id="o-nas" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-24">

          {/* Usługa 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 group">
            <div className="w-full lg:w-1/2 order-2 lg:order-1 relative">
              <ScrollReveal animation="fade-right">
                <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-700"></div>
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none"></div>
                  <Image
                    src="/images/mechanic_vulcanization.png"
                    alt="Wulkanizacja Opon"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
              </ScrollReveal>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <ScrollReveal animation="fade-left" delay={200}>
                <h2 className="text-3xl md:text-4xl font-black uppercase mb-6 flex items-center gap-4">
                  Wulkanizacja Opon
                </h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Dbaj o bezpieczeństwo na drodze. Oferujemy kompleksowe usługi: od szybkiej wymiany po precyzyjne wyważanie i naprawę ogumienia. Twój spokój, nasza praca.
                </p>
                <ul className="space-y-4">
                  {[
                    "Kompleksowa Wymiana Opon",
                    "Precyzyjne Komputerowe Wyważanie",
                    "Profesjonalna Naprawa Ogumienia",
                    "Obsługa Czujników TPMS"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 group/item">
                      <div className="shrink-0 bg-gradient-to-br from-[#da291c] to-[#ff4b3e] p-1 rounded-full text-white shadow-[0_0_10px_rgba(218,41,28,0.5)] group-hover/item:shadow-[0_0_15px_rgba(218,41,28,0.8)] transition-shadow">
                        <Check size={16} strokeWidth={3} />
                      </div>
                      <span className="text-gray-200 font-medium leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </div>

          {/* Usługa 2 */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 group">
            <div className="w-full lg:w-1/2">
              <ScrollReveal animation="fade-right">
                <h2 className="text-3xl md:text-4xl font-black uppercase mb-6">
                  Serwis Klimatyzacji
                </h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Czyste powietrze i idealna temperatura w Twoim aucie. Nasz serwis gwarantuje szybkie odgrzybianie, sprawdzenie szczelności i precyzyjne napełnienie czynnika. Poczuj różnicę.
                </p>
                <ul className="space-y-4">
                  {[
                    "Sprawdzanie Szczelności Uv / Azotem",
                    "Napełnianie Czynnikiem (R134a / 1234yf)",
                    "Kompleksowy Serwis Klimatyzacji",
                    "Odgrzybianie Ozonem / Ultradzwiękami"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 group/item">
                      <div className="shrink-0 bg-gradient-to-br from-[#da291c] to-[#ff4b3e] p-1 rounded-full text-white shadow-[0_0_10px_rgba(218,41,28,0.5)] group-hover/item:shadow-[0_0_15px_rgba(218,41,28,0.8)] transition-shadow">
                        <Check size={16} strokeWidth={3} />
                      </div>
                      <span className="text-gray-200 font-medium leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <ScrollReveal animation="fade-left" delay={200}>
                <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-700"></div>
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none"></div>
                  <Image
                    src="/images/ac_service.png"
                    alt="Serwis Klimatyzacji"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
