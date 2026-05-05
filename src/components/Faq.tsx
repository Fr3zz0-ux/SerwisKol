"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Czy muszę umawiać się na wymianę opon z wyprzedzeniem?",
      answer: "Zalecamy wcześniejszą rezerwację terminu, szczególnie w szczycie sezonu (wiosna/jesień), aby uniknąć kolejek. Jednak w przypadku nagłych awarii (np. przebita opona) staramy się przyjmować klientów od ręki."
    },
    {
      question: "Ile czasu zajmuje standardowa wymiana opon i wyważanie?",
      answer: "Dla samochodów osobowych kompletna usługa wymiany czterech opon wraz z precyzyjnym komputerowym wyważaniem zajmuje zazwyczaj od 20 do 30 minut."
    },
    {
      question: "Jak często powinienem serwisować klimatyzację w aucie?",
      answer: "Zalecamy pełny przegląd klimatyzacji raz w roku. Obejmuje to sprawdzenie szczelności, uzupełnienie czynnika chłodzącego oraz odgrzybianie (np. ozonowanie), co gwarantuje czyste i zdrowe powietrze w kabinie."
    },
    {
      question: "Czy obsługujecie auta dostawcze (BUS) i terenowe (SUV/4x4)?",
      answer: "Tak, nasz sprzęt i podnośniki są w pełni przystosowane do obsługi cięższych pojazdów, w tym samochodów dostawczych, SUV-ów oraz aut terenowych z dużymi felgami."
    },
    {
      question: "Czy przechowujecie opony sezonowe?",
      answer: "Tak, oferujemy usługę bezpiecznego hotelowania opon w odpowiednich warunkach (odpowiednia temperatura i ułożenie), dzięki czemu nie musisz martwić się o brak miejsca w garażu."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-background">
      {/* Tło z subtelnym rozmyciem */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#da291c]/5 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#da291c] to-[#ff4b3e] filter drop-shadow-[0_0_15px_rgba(218,41,28,0.5)] mb-6">
              FAQ
            </h2>
            <p className="text-xl text-gray-400 font-light">Najczęściej zadawane pytania</p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <ScrollReveal key={idx} delay={idx * 150} animation="fade-up">
                <div 
                  className={`bg-[#111216]/80 backdrop-blur-md rounded-2xl border transition-all duration-500 overflow-hidden ${
                    isOpen ? "border-[#da291c]/40 shadow-[0_0_20px_rgba(218,41,28,0.15)]" : "border-white/5 hover:border-white/15"
                  }`}
                >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-6 md:px-8 flex items-center justify-between gap-4 cursor-pointer focus:outline-none group"
                >
                  <h3 className={`font-bold text-lg md:text-xl transition-colors duration-300 ${isOpen ? "text-white" : "text-gray-300 group-hover:text-white"}`}>
                    {faq.question}
                  </h3>
                  <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                    isOpen ? "bg-[#da291c] text-white rotate-180 shadow-[0_0_15px_rgba(218,41,28,0.5)]" : "bg-white/5 text-gray-400 group-hover:bg-white/10 group-hover:text-white"
                  }`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                
                <div 
                  className={`transition-all duration-500 ease-in-out px-6 md:px-8 ${
                    isOpen ? "max-h-40 opacity-100 pb-6" : "max-h-0 opacity-0 pb-0"
                  }`}
                >
                  <p className="text-gray-400 leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
