import { Play } from "lucide-react";

export default function Teaser() {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen py-32 overflow-hidden bg-black flex items-center justify-center">
      {/* Tło Wideo (Zajawka) */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-50"
        >
          {/* Używamy tymczasowego darmowego wideo motoryzacyjnego jako placeholdera.
              Gdy będziesz miał swój plik wideo, wrzuć go do folderu public/ i podmień src. */}
          <source src="https://raw.githubusercontent.com/intel-iot-devkit/sample-videos/master/car-detection.mp4" type="video/mp4" />
          Twój przeglądarka nie obsługuje tagu wideo.
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-black/80"></div>
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 tracking-tight drop-shadow-2xl text-white">
          Zobacz nas w akcji
        </h2>
        <p className="text-xl md:text-2xl text-gray-200 font-medium max-w-3xl mx-auto mb-10 drop-shadow-lg">
          Doświadczenie i precyzja, której możesz zaufać. Twój samochód jest u nas w najlepszych rękach.
        </p>
        
        <button className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-bold py-4 px-10 rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(217,33,24,0.4)] hover:shadow-[0_0_60px_rgba(217,33,24,0.6)]">
          <Play fill="currentColor" size={20} />
          <span>Obejrzyj pełen film</span>
        </button>
      </div>
    </section>
  );
}
