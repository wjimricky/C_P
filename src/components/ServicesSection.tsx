import { Layers, Activity, FastForward, Sliders, ArrowUpRight } from 'lucide-react';

interface ServicesSectionProps {
  onOpenBooking: () => void;
}

const SERVICES = [
  {
    icon: Activity,
    title: "Audit de Friction & Ergonomie Cognitive",
    description: "Cartographie détaillée de chaque micro-friction empêchant l'utilisateur d'atteindre son but. Réduction de l'effort mental nécessaire pour convertir.",
    badge: "Diagnostic immédiat"
  },
  {
    icon: FastForward,
    title: "Physique des Micro-interactions (Spring Motion)",
    description: "Design des transitions à 60 images par seconde avec des courbes d'amorti naturelles. Votre produit gagne en prestige et en réactivité perçue.",
    badge: "Finition premium"
  },
  {
    icon: Sliders,
    title: "Optimisation de Tunnel & Formulaires",
    description: "Restructuration des étapes clés : formulaires progressifs, validation immédiate en ligne et réassurance contextuelle sur le parcours d'achat.",
    badge: "+38% de conversion"
  },
  {
    icon: Layers,
    title: "Tokens de Fluidité & Système Modulaire",
    description: "Création des tokens d'animation et de composants réutilisables prêts à être intégrés dans votre stack frontend (React, Tailwind, CSS natif).",
    badge: "Prêt pour vos devs"
  }
];

export function ServicesSection({ onOpenBooking }: ServicesSectionProps) {
  return (
    <section id="expertises" className="py-20 sm:py-28 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#8A7969] block mb-2">
            Expertise & Piliers d'intervention
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif text-[#241F1A] font-medium tracking-tight leading-tight">
            Chaque milliseconde et chaque micro-animation compte pour retenir vos utilisateurs.
          </h2>
          <p className="mt-3 text-base text-[#6E6153]">
            Nous combinons psychologie cognitive et science du mouvement pour concevoir des parcours sans accroc.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div 
                key={idx}
                className="group p-8 rounded-3xl bg-white border border-[#E7DFD5] hover:border-[#D5C7B7] hover:shadow-[0_16px_36px_rgba(95,81,68,0.06)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#F4EFEA] text-[#5C4D3E] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-[#736353] px-3 py-1 bg-[#FAF8F5] rounded-full border border-[#EAE3D8]">
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif text-[#2C2723] mb-3 group-hover:text-[#5C4D3E] transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-sm text-[#6E6357] leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F2ECE4]">
                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5C4D3E] hover:text-[#2C2723] transition-colors cursor-pointer"
                  >
                    <span>Auditer ce point sur votre application</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
