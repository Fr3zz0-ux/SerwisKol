import { Star, Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Testimonials() {
  const reviews = [
    {
      name: "Mateusz Kowalski",
      rating: 5,
      text: "Świetny serwis! Szybka wymiana opon, bez kolejki. Panowie doradzili mi przy wyborze nowych opon letnich. Zdecydowanie polecam każdemu."
    },
    {
      name: "Anna Nowak",
      rating: 5,
      text: "Przyjechałam z niedziałającą klimatyzacją. Usterka została znaleziona w 10 minut. Na drugi dzień samochód był gotowy do odbioru. Pełen profesjonalizm."
    },
    {
      name: "Tomasz Wiśniewski",
      rating: 5,
      text: "Bardzo przejrzysty cennik i świetna obsługa. Wulkanizacja zrobiona na nowoczesnym sprzęcie, felgi nawet nie zadrapane. Będę wracać co sezon."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <ScrollReveal animation="fade-up">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-16 uppercase">
            Co mówią nasi klienci?
          </h2>
        </ScrollReveal>
        <div className="relative flex overflow-hidden w-full group py-4">
          {/* Gradienty po bokach dla płynnego zanikania */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
          
          {/* Pierwsza grupa opinii */}
          <div className="flex min-w-full shrink-0 animate-marquee gap-8 pr-8 group-hover:[animation-play-state:paused]">
            {[...reviews, ...reviews].map((review, idx) => (
              <div key={idx} className="w-[320px] md:w-[400px] shrink-0 bg-[#111216]/60 backdrop-blur-xl p-8 rounded-3xl border border-white/5 shadow-2xl relative flex flex-col group hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none rounded-3xl"></div>
                <Quote className="absolute top-6 right-6 text-white/5 group-hover:text-white/10 transition-colors duration-500" size={48} />
                
                <div className="flex gap-1 mb-6 relative z-10">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-[#da291c] text-[#da291c] drop-shadow-[0_0_8px_rgba(218,41,28,0.5)] group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }} />
                  ))}
                </div>
                
                <p className="text-gray-300 italic mb-8 relative z-10 flex-grow font-light leading-relaxed">
                  "{review.text}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto relative z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#da291c] to-[#ff4b3e] flex items-center justify-center font-bold text-lg text-white shadow-[0_0_15px_rgba(218,41,28,0.4)] border border-white/20">
                    {review.name.charAt(0)}
                  </div>
                  <span className="font-bold text-gray-100">{review.name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Druga grupa opinii (dokładnie to samo, dla ciągłości pętli) */}
          <div aria-hidden="true" className="flex min-w-full shrink-0 animate-marquee gap-8 pr-8 group-hover:[animation-play-state:paused]">
            {[...reviews, ...reviews].map((review, idx) => (
              <div key={idx} className="w-[320px] md:w-[400px] shrink-0 bg-[#111216]/60 backdrop-blur-xl p-8 rounded-3xl border border-white/5 shadow-2xl relative flex flex-col group hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none rounded-3xl"></div>
                <Quote className="absolute top-6 right-6 text-white/5 group-hover:text-white/10 transition-colors duration-500" size={48} />
                
                <div className="flex gap-1 mb-6 relative z-10">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-[#da291c] text-[#da291c] drop-shadow-[0_0_8px_rgba(218,41,28,0.5)] group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }} />
                  ))}
                </div>
                
                <p className="text-gray-300 italic mb-8 relative z-10 flex-grow font-light leading-relaxed">
                  "{review.text}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto relative z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#da291c] to-[#ff4b3e] flex items-center justify-center font-bold text-lg text-white shadow-[0_0_15px_rgba(218,41,28,0.4)] border border-white/20">
                    {review.name.charAt(0)}
                  </div>
                  <span className="font-bold text-gray-100">{review.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
