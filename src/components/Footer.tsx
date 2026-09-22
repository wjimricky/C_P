import { Waves, Sparkles, Heart } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export function Footer({ onOpenBooking }: FooterProps) {
  return (
    <footer className="bg-[#241F1A] text-[#FAF8F5] pt-16 pb-12 border-t border-[#3A322B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#3D352D]">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#5C4D3E] text-[#FAF8F5] flex items-center justify-center">
                <Waves className="w-5 h-5 text-[#E7DFD5]" />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-[#FAF8F5]">
                Fluid UI Boost
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#B3A698] max-w-sm leading-relaxed">
              Studio spécialisé dans l'ergonomie, la dynamique des micro-interactions et l'accélération de conversion pour applications et SaaS exigeants.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5C4D3E] hover:bg-[#705E4C] text-xs font-medium text-[#FAF8F5] transition-colors cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Planifier un audit gratuit de 20 min</span>
              </button>
            </div>
          </div>

          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-[#A09282] mb-3">
              Navigation
            </h5>
            <ul className="space-y-2 text-xs text-[#D8CEBF]">
              <li><a href="#intro" className="hover:text-white transition-colors">Introduction</a></li>
              <li><a href="#audit-demo" className="hover:text-white transition-colors">Démonstrateur Avant / Après</a></li>
              <li><a href="#methode" className="hover:text-white transition-colors">Méthode en 3 étapes</a></li>
              <li><a href="#expertises" className="hover:text-white transition-colors">Nos 4 Piliers</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">F.A.Q.</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-[#A09282] mb-3">
              Engagement & Qualité
            </h5>
            <p className="text-xs text-[#B3A698] leading-relaxed mb-3">
              Des conseils concrets délivrés par des designers seniors. Zéro vente forcée, 100% de valeur apportée dès les 20 premières minutes.
            </p>
            <span className="inline-flex items-center gap-1.5 text-[11px] text-[#A89886]">
              <Heart className="w-3 h-3 text-[#C89D66]" />
              Conçu pour fluid-ui-boost
            </span>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C7D6F] gap-4">
          <p>© {new Date().getFullYear()} Fluid UI Boost. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#FAF8F5] cursor-pointer transition-colors">Confidentialité & NDA</span>
            <span>•</span>
            <span className="hover:text-[#FAF8F5] cursor-pointer transition-colors">Mentions Légales</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
