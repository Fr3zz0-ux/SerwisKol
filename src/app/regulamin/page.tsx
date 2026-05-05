import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Regulamin() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-40 pb-24 relative overflow-hidden">
        {/* Luksusowe tło */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#da291c]/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <h1 className="text-4xl md:text-5xl font-black uppercase mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#da291c] to-[#ff4b3e] drop-shadow-[0_0_15px_rgba(218,41,28,0.5)]">
            Regulamin Serwisu
          </h1>
          
          <div className="bg-[#111216]/60 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl">
            <div className="space-y-8 text-gray-300 font-light leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Postanowienia ogólne</h2>
                <p>
                  Niniejszy dokument określa ogólne zasady funkcjonowania strony internetowej oraz zasady świadczenia usług przez Serwis Kół z siedzibą: Straszewo 54, 82-420 Ryjewo.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Zastrzeżenia dotyczące Cennika</h2>
                <p>
                  Cennik prezentowany na stronie internetowej ma charakter wyłącznie informacyjny i <strong>nie stanowi oferty handlowej</strong> w rozumieniu art. 66 par. 1 Kodeksu Cywilnego. 
                </p>
                <p className="mt-4">
                  Ze względu na specyfikę branży motoryzacyjnej, ostateczny koszt naprawy lub wykonania usługi (np. w przypadku wystąpienia trudności technicznych takich jak zapieczone śruby, uszkodzone gwinty czy konieczność wymiany dodatkowych elementów eksploatacyjnych) ustalany jest z Klientem na miejscu, po wstępnych oględzinach pojazdu.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Umawianie i realizacja usług</h2>
                <p>
                  Wizyty w serwisie odbywają się po wcześniejszym umówieniu telefonicznym lub osobistym. Zastrzegamy sobie prawo do przesunięcia godziny wizyty w przypadku przedłużających się, nieprzewidzianych napraw aut klientów umówionych na wcześniejsze godziny.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Gwarancja i Reklamacje</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Na usługi wulkanizacyjne i serwis klimatyzacji udzielana jest gwarancja zgodnie z obowiązującymi przepisami prawa.</li>
                  <li>Reklamacje należy zgłaszać niezwłocznie po zauważeniu usterki, osobiście w siedzibie serwisu wraz z pojazdem, w celu weryfikacji wady.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Prawa Autorskie</h2>
                <p>
                  Wszelkie treści, grafiki oraz kody źródłowe umieszczone na stronie są własnością Serwisu Kół i podlegają ochronie prawnej. Zabrania się ich kopiowania bez uprzedniej pisemnej zgody.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Postanowienia końcowe</h2>
                <p>
                  W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają odpowiednie przepisy prawa polskiego, w szczególności Kodeksu Cywilnego oraz Ustawy o Prawach Konsumenta.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
