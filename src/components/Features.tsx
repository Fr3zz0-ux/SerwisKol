import { Clock, Wrench, CircleDollarSign } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Features() {
  const features = [
    {
      icon: <Clock size={32} />,
      title: "Szybkie terminy",
      description: "Szanujemy Twój czas. Oferujemy elastyczne godziny pracy i szybkie terminy realizacji usług bez zbędnego czekania."
    },
    {
      icon: <Wrench size={32} />,
      title: "Nowoczesny sprzęt",
      description: "Pracujemy na certyfikowanych maszynach najwyższej klasy, co gwarantuje precyzję i brak uszkodzeń Twoich felg."
    },
    {
      icon: <CircleDollarSign size={32} />,
      title: "Jasny cennik",
      description: "U nas nie ma ukrytych kosztów. Z góry wiesz, ile zapłacisz za wykonaną usługę. Oferujemy konkurencyjne ceny."
    }
  ];

  return (
    <section className="py-20 bg-card border-y border-white/5">
      <div className="container mx-auto px-6">
        <ScrollReveal animation="fade-up">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-16 uppercase">
            Dlaczego warto nam zaufać?
          </h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <ScrollReveal key={idx} delay={idx * 150} animation="fade-up" className="h-full">
              <div 
                className="h-full bg-[#111216]/60 backdrop-blur-md p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-500 group text-center relative overflow-hidden shadow-xl hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
              >
                {/* Subtle hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#da291c]/0 to-transparent group-hover:from-[#da291c]/10 transition-colors duration-700 pointer-events-none"></div>
                
                <div className="relative z-10 inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 text-gray-300 mb-6 group-hover:scale-110 group-hover:border-[#da291c]/50 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(218,41,28,0.4)] transition-all duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 relative z-10 text-gray-100">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
