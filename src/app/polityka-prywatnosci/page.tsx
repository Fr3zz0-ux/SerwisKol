import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PolitykaPrywatnosci() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-40 pb-24 relative overflow-hidden">
        {/* Luksusowe tło */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#da291c]/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <h1 className="text-4xl md:text-5xl font-black uppercase mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#da291c] to-[#ff4b3e] drop-shadow-[0_0_15px_rgba(218,41,28,0.5)]">
            Polityka Prywatności
          </h1>
          
          <div className="bg-[#111216]/60 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl">
            <div className="space-y-8 text-gray-300 font-light leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Postanowienia ogólne</h2>
                <p>
                  Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Użytkowników w związku z korzystaniem z usług serwisu internetowego Serwis Kół.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Administrator danych</h2>
                <p>
                  Administratorem Danych Osobowych jest Serwis Kół z siedzibą pod adresem: Straszewo 54, 82-420 Ryjewo. Z administratorem można skontaktować się telefonicznie pod numerem: +48 609 033 739.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Cel przetwarzania danych</h2>
                <p>
                  Dane osobowe (np. numer telefonu, adres e-mail) przetwarzane są wyłącznie w celu:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>odpowiedzi na zapytania skierowane za pomocą poczty elektronicznej lub kontaktu telefonicznego,</li>
                  <li>realizacji i umawiania usług wulkanizacyjnych oraz serwisu klimatyzacji,</li>
                  <li>celów analitycznych i statystycznych związanych z ruchem na stronie internetowej.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Pliki Cookies (Ciasteczka)</h2>
                <p>
                  Nasz serwis internetowy zbiera w sposób automatyczny informacje zawarte w plikach cookies. Są one wykorzystywane do zapewnienia prawidłowego działania strony (np. osadzona mapa Google) oraz w celach statystycznych. Użytkownik może w każdej chwili zmienić ustawienia swojej przeglądarki, aby zablokować obsługę plików cookies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Prawa Użytkownika</h2>
                <p>
                  Każdy Użytkownik ma prawo do dostępu do treści swoich danych oraz ich poprawiania, usunięcia lub ograniczenia przetwarzania, a także prawo sprzeciwu, zażądania zaprzestania przetwarzania i przenoszenia danych, jak również prawo do cofnięcia zgody w dowolnym momencie.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Zmiany Polityki Prywatności</h2>
                <p>
                  Administrator zastrzega sobie prawo do wprowadzania zmian w Polityce Prywatności. Każdego Użytkownika serwisu obowiązuje aktualna Polityka Prywatności udostępniona na tej stronie.
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
