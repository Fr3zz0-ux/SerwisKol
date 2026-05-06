import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="kontakt" className="bg-[#050505] border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      {/* Subtelna górna linia odcinająca z gradientem (Luksusowy akcent) */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#da291c] to-transparent opacity-50"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#da291c]/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-16 uppercase drop-shadow-lg">
          Gdzie nas znajdziesz?
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-20">
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-full text-primary mt-1">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Nasz adres</h4>
                <p className="text-gray-400 leading-relaxed">
                  Straszewo 54<br />
                  82-420 Ryjewo
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-full text-primary mt-1">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Zadzwoń do nas</h4>
                <p className="text-gray-400 leading-relaxed">
                  <a href="tel:+48609033739" className="hover:text-primary transition-colors">+48 609 033 739</a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-full text-primary mt-1">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Napisz e-mail</h4>
                <p className="text-gray-400 leading-relaxed">
                  <a href="mailto:kontakt@serwiskol.pl" className="hover:text-primary transition-colors">kontakt@serwiskol.pl</a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-full text-primary mt-1">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Godziny otwarcia</h4>
                <p className="text-gray-400 leading-relaxed">
                  Pon - Pt: 8:00 - 18:00<br />
                  Sobota: 8:00 - 14:00
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="relative w-full h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
              <iframe
                src="https://maps.google.com/maps?q=Serwis%20K%C3%B3%C5%82%2C%20Straszewo%2054%2C%2082-420&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              ></iframe>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors pointer-events-none"></div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p>&copy; {new Date().getFullYear()} Serwis Kół. Wszelkie prawa zastrzeżone.</p>
            <p className="flex items-center gap-2">
              Designed & Developed by
              <a 
                href="https://github.com/Fr3zz0-ux" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#da291c] transition-colors flex items-center gap-1 font-semibold group"
              >
                Mateusz Bogacki
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://www.facebook.com/profile.php?id=61559103173556"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Serwis Kół"
              className="text-gray-500 hover:text-[#1877F2] transition-colors duration-300 group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <Link href="/polityka-prywatnosci" className="hover:text-white transition-colors">Polityka Prywatności</Link>
            <Link href="/regulamin" className="hover:text-white transition-colors">Regulamin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
