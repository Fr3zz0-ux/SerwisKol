import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Logos from "@/components/Logos";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Teaser from "@/components/Teaser";
import Pricing from "@/components/Pricing";
import Gallery from "@/components/Gallery";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      
      {/* Sekcja: Usługi i Partnerzy */}
      <div className="bg-background">
        <Services />
        <Logos />
      </div>

      {/* Sekcja: Dlaczego my i Opinie */}
      <div className="bg-card/30 border-y border-white/5">
        <Features />
        <Testimonials />
      </div>

      {/* Sekcja: Wideo Zajawka */}
      <Teaser />

      {/* Sekcja: Cennik */}
      <div className="bg-background">
        <Pricing />
      </div>

      {/* Sekcja: Realizacje */}
      <Gallery />
      
      {/* Sekcja: FAQ */}
      <div className="bg-background">
        <Faq />
      </div>
      
      <Footer />
    </main>
  );
}
