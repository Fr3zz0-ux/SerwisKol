export default function Logos() {
  const brands = [
    "Michelin",
    "Goodyear",
    "Continental",
    "Pirelli",
    "Dunlop",
    "Bridgestone",
    "Hankook",
    "Nokian",
    "Falken",
    "Yokohama",
    "BF Goodrich",
    "Toyo",
    "Uniroyal",
    "Firestone",
    "Vredestein",
    "Maxxis",
  ];

  // Duplikujemy listę żeby pętla była płynna
  const doubled = [...brands, ...brands];

  return (
    <div className="bg-[#0a0b0e] py-8 border-y border-white/5 overflow-hidden">
      <p className="text-center text-xs uppercase tracking-[0.3em] text-gray-600 mb-6 font-semibold">
        Obsługujemy wszystkie marki opon
      </p>
      <div className="relative">
        {/* Gradient masks po bokach */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0b0e] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0b0e] to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-12 md:gap-20 w-max"
          style={{
            animation: "marquee 35s linear infinite",
          }}
        >
          {doubled.map((brand, i) => (
            <div
              key={i}
              className="text-lg md:text-xl font-black uppercase tracking-widest text-[#3f3f46] hover:text-[#da291c] transition-colors duration-300 cursor-default whitespace-nowrap select-none"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
