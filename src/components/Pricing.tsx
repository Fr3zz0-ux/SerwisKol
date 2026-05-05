"use client";

import { useState } from "react";
import { Settings, Snowflake } from "lucide-react";

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<"wulkanizacja" | "klimatyzacja">("wulkanizacja");
  const [vehicleType, setVehicleType] = useState<"osobowe" | "terenowe">("osobowe");

  const pricingData = {
    wulkanizacja: {
      headers: ["Stalowe 15-16\"", "Stalowe 17-18\"", "Alu 15-17\"", "Alu 19-22\""],
      osobowe: {
        gridRows: [
          { name: "Wymiana 4 opon z wyważeniem", prices: ["100 zł", "110 zł", "120 zł", "140 zł"] },
          { name: "Wymiana 4 kół z wyważeniem", prices: ["60 zł", "60 zł", "70 zł", "70 zł"] },
          { name: "Wyważanie koła", prices: ["12 zł", "12 zł", "15 zł", "15 zł"] },
          { name: "Montaż / demontaż koła", prices: ["8 zł", "8 zł", "10 zł", "10 zł"] }
        ],
        flatRows: [
          { name: "Naprawa opony", price: "od 30 zł" },
          { name: "Zawór standardowy", price: "7 zł" }
        ]
      },
      terenowe: {
        gridRows: [
          { name: "Wymiana 4 opon z wyważeniem", prices: ["120 zł", "130 zł", "140 zł", "150 zł"] },
          { name: "Wymiana 4 kół z wyważeniem", prices: ["70 zł", "70 zł", "80 zł", "80 zł"] },
          { name: "Wyważanie koła", prices: ["18 zł", "18 zł", "20 zł", "20 zł"] },
          { name: "Montaż / demontaż koła", prices: ["8 zł", "8 zł", "10 zł", "10 zł"] }
        ],
        flatRows: [
          { name: "Naprawa opony", price: "od 30 zł" },
          { name: "Zawór standardowy", price: "7 zł" }
        ]
      }
    },
    klimatyzacja: {
      headers: ["Cena"],
      data: {
        gridRows: [
          { name: "Przegląd podstawowy (czynnik R134a)", prices: ["od 150 zł"] },
          { name: "Serwis klimatyzacji (nowy czynnik R1234yf)", prices: ["od 250 zł"] },
          { name: "Odgrzybianie metodą ozonowania", prices: ["60 zł"] },
          { name: "Sprawdzenie szczelności układu (Azot/UV)", prices: ["80 zł"] },
          { name: "Wymiana filtra kabinowego (robocizna)", prices: ["40 zł"] },
          { name: "Płukanie układu po zatarciu sprężarki", prices: ["od 400 zł"] }
        ],
        flatRows: []
      }
    }
  };

  const currentTab = pricingData[activeTab];
  // Zabezpieczenie typu - dla klimatyzacji nie ma rozbicia na osobowe/terenowe
  const currentData = activeTab === "wulkanizacja" ? (currentTab as any)[vehicleType] : (currentTab as any).data;

  const getGridColsClass = () => {
    return currentTab.headers.length === 1 
      ? "grid grid-cols-[1.5fr_1fr]" 
      : "grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr]";
  };

  return (
    <section id="cennik" className="py-24 md:py-32 relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Dynamiczne tło z bardzo delikatnym glowem w tle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-white tracking-wide drop-shadow-lg">
          Cennik Usług
        </h2>

        {/* Zakładki */}
        <div className="flex flex-col sm:flex-row justify-center mb-12 gap-4 md:gap-6">
          <button
            onClick={() => setActiveTab("wulkanizacja")}
            className={`flex items-center gap-3 px-8 md:px-12 py-4 rounded-xl font-bold text-sm md:text-base transition-all duration-500 tracking-widest border ${
              activeTab === "wulkanizacja" 
                ? "bg-gradient-to-r from-[#da291c] to-[#ff4b3e] text-white shadow-[0_0_30px_rgba(218,41,28,0.3)] border-white/20 scale-105" 
                : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border-transparent hover:border-white/10"
            }`}
          >
            <Settings size={20} className={`transition-transform duration-700 ${activeTab === "wulkanizacja" ? "rotate-180" : ""}`} />
            WULKANIZACJA
          </button>
          <button
            onClick={() => setActiveTab("klimatyzacja")}
            className={`flex items-center gap-3 px-8 md:px-12 py-4 rounded-xl font-bold text-sm md:text-base transition-all duration-500 tracking-widest border ${
              activeTab === "klimatyzacja" 
                ? "bg-gradient-to-r from-[#da291c] to-[#ff4b3e] text-white shadow-[0_0_30px_rgba(218,41,28,0.3)] border-white/20 scale-105" 
                : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border-transparent hover:border-white/10"
            }`}
          >
            <Snowflake size={20} className={activeTab === "klimatyzacja" ? "animate-pulse" : ""} />
            KLIMATYZACJA
          </button>
        </div>

        {/* Ciemny kontener Premium (Glassmorphism) */}
        <div className="bg-[#111216]/80 backdrop-blur-2xl rounded-3xl p-6 md:p-10 shadow-2xl border border-white/10 relative overflow-visible group/container">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover/container:opacity-100 transition-opacity duration-1000 pointer-events-none rounded-3xl"></div>
          
          {/* Przełącznik lub Tytuł w zależności od zakładki */}
          {activeTab === "wulkanizacja" ? (
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-12 relative z-10">
              <span className={`font-semibold text-sm md:text-base transition-colors duration-300 ${vehicleType === "osobowe" ? "text-white" : "text-gray-500"}`}>
                Osobowe i SUV
              </span>
              <button 
                onClick={() => setVehicleType(vehicleType === "osobowe" ? "terenowe" : "osobowe")}
                className="w-16 h-8 bg-[#0a0b0e] rounded-full relative p-1 flex items-center transition-colors shadow-inner border border-white/5 hover:border-white/20 cursor-pointer"
              >
                <div className={`w-6 h-6 rounded-full transition-all duration-500 ease-out shadow-md ${vehicleType === "terenowe" ? "translate-x-8 bg-[#da291c]" : "translate-x-0 bg-white"}`}></div>
              </button>
              <span className={`font-semibold text-sm md:text-base transition-colors duration-300 ${vehicleType === "terenowe" ? "text-white" : "text-gray-500"}`}>
                Terenowe, BUS i TIR
              </span>
            </div>
          ) : (
            <div className="flex justify-center items-center mb-12 relative z-10">
              <h3 className="text-2xl font-bold text-white tracking-wide">Klimatyzacja</h3>
            </div>
          )}

          {/* Tabela Cennika */}
          <div key={`${activeTab}-${vehicleType}`} className="relative z-10 animate-[fadeInUp_0.5s_ease-out_forwards] opacity-0" style={{ animationName: 'fadeInUp' }}>
            <style>{`
              @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(15px); }
                to { opacity: 1; transform: translateY(0); }
              }
            `}</style>
            
            <div className="overflow-x-auto pb-4 -mx-6 px-6 md:mx-0 md:px-0">
              <div className={`min-w-[600px] md:min-w-[800px]`}>
                
                {/* Nagłówki */}
                <div className={`${getGridColsClass()} gap-4 pb-6 border-b border-white/10 text-xs md:text-sm text-gray-400 font-semibold tracking-wider uppercase`}>
                  <div></div>
                  {currentTab.headers.map((header, idx) => (
                    <div key={idx} className="text-center">{header}</div>
                  ))}
                </div>

                {/* Wiersze Grid */}
                <div className="flex flex-col relative">
                  {currentData.gridRows.map((row: any, idx: number) => (
                    <div key={idx} className={`${getGridColsClass()} gap-4 py-5 border-b border-white/5 items-center relative group hover:bg-white/[0.03] transition-colors rounded-xl px-2 -mx-2 cursor-default`}>
                      <div className="absolute left-[-8px] top-1/2 -translate-y-1/2 w-1 h-0 bg-primary group-hover:h-3/4 transition-all duration-300 rounded-r-md opacity-0 group-hover:opacity-100"></div>
                      
                      <div className="text-sm md:text-base text-gray-300 pr-4 font-medium transition-transform duration-300 group-hover:translate-x-2">{row.name}</div>
                      {row.prices.map((price: string, pIdx: number) => (
                        <div key={pIdx} className="text-center font-bold text-white text-sm md:text-base tabular-nums transition-transform duration-300 group-hover:scale-110 drop-shadow-sm">{price}</div>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Flat Rows */}
                {currentData.flatRows.length > 0 && (
                  <div className="mt-8 flex flex-col">
                    {currentData.flatRows.map((row: any, idx: number) => (
                      <div key={idx} className={`${getGridColsClass()} gap-4 py-5 border-b border-white/5 items-center relative group hover:bg-white/[0.03] transition-colors rounded-xl px-2 -mx-2 cursor-default`}>
                        <div className="absolute left-[-8px] top-1/2 -translate-y-1/2 w-1 h-0 bg-primary group-hover:h-3/4 transition-all duration-300 rounded-r-md opacity-0 group-hover:opacity-100"></div>
                        
                        <div className="text-sm md:text-base text-gray-300 pr-4 font-medium transition-transform duration-300 group-hover:translate-x-2">{row.name}</div>
                        <div className="text-center font-bold text-white text-sm md:text-base tabular-nums transition-transform duration-300 group-hover:scale-110 drop-shadow-sm">{row.price}</div>
                        {currentTab.headers.map((_, i) => {
                           if (i === 0) return null;
                           return <div key={i}></div>;
                        })}
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Drobny tekst informacyjny */}
                {activeTab === "klimatyzacja" && (
                  <div className="mt-8 text-[10px] text-gray-600">
                    *Cena wzrasta dla pojazdów braku szczelności układu po wpuszczeniu czynnika chłodniczego.
                  </div>
                )}

              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
