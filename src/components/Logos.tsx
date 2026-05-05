import Image from "next/image";

export default function Logos() {
  const brands = [
    "Michelin",
    "Goodyear",
    "Continental",
    "Pirelli",
    "Dunlop",
    "Bridgestone"
  ];

  return (
    <div className="bg-[#1A1B22] py-8 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 grayscale">
          {brands.map((brand, i) => (
            <div key={i} className="text-xl md:text-2xl font-black uppercase tracking-widest text-[#A1A1AA] hover:text-white transition-all cursor-default">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
