import { PhoneCall, FileSearch, Rocket, Sparkles, ArrowRight } from 'lucide-react';

interface ProcessSectionProps {
  onOpenBooking: () => void;
}

const STEPS = [
  {
    step: "01",
    icon: PhoneCall,
    title: "Échange 20 min • Diagnostic gratuit",
    highlight: "100% offert & sans engagement",
    description: "Nous partageons l'écran et parcourons votre produit en direct. Nous repérons immédiatement 3 points de friction majeurs et vous donnons des solutions actionnables."
  },
  {
    step: "02",
    icon: FileSearch,
    title: "Audit 360° & Prototypes Fluides",
    highlight: "Livrable en 48 heures",
    description: "Nous réinventons vos flux avec des animations sur-mesure, des micro-retours clairs et une documentation prête à implémenter pour vos équipes tech."
  },
  {
    step: "03",
    icon: Rocket,
    title: "Mise en production & Mesure du Boost",
    highlight: "+20% à +45% de conversion",
    description: "Votre application devient un plaisir tactile et visuel. Les utilisateurs terminent leurs actions sans friction et votre rétention progresse immédiatement."
  }
];

export function ProcessSection({ onOpenBooking }: ProcessSectionProps) {
  return (
    <section id="methode" className="py-20 sm:py-28 bg-[#F4EFEA]/70 border-t border-[#EAE3D8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#8A7969] block mb-2">
            Méthodologie agile
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif text-[#241F1A] font-medium tracking-tight">
            Comment nous boostons votre interface en quelques jours
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6E6153]">
            Un processus condensé, centré sur la valeur immédiate et zéro réunion inutile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {STEPS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="relative p-8 rounded-3xl bg-white border border-[#E7DFD5] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-serif font-bold text-[#C8BCAC]">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#EAE3D8] text-[#5C4D3E] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="inline-block px-2.5 py-1 rounded-full bg-[#EFE8DC] text-[#6E5A47] text-[11px] font-semibold mb-3">
                    {item.highlight}
                  </span>

                  <h3 className="text-lg font-serif text-[#2C2723] mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6E6357] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {idx === 0 && (
                  <div className="mt-6 pt-4 border-t border-[#F2ECE4]">
                    <button
                      type="button"
                      onClick={onOpenBooking}
                      className="w-full py-2.5 px-4 rounded-full bg-[#5C4D3E] hover:bg-[#473B2F] text-white text-xs font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Réserver cette étape (Offert)</span>
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Banner CTA inside section */}
        <div className="mt-14 p-8 rounded-3xl bg-white border border-[#E7DFD5] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h4 className="text-lg font-serif text-[#2C2723] font-semibold">
              Vous avez un produit en production ou une maquette prête ?
            </h4>
            <p className="text-xs sm:text-sm text-[#6E6357] mt-1">
              Ne laissez pas des micro-frictions ruiner vos investissements d'acquisition. Obtenez un regard expert en 20 minutes.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenBooking}
            className="shrink-0 px-6 py-3.5 rounded-full bg-[#5C4D3E] hover:bg-[#473B2F] text-white text-sm font-medium transition-colors flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>Prendre rendez-vous</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
