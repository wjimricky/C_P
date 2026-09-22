import { Sparkles, ArrowRight, CheckCircle2, Shield, Zap, MousePointer } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section 
      id="intro" 
      className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden"
    >
      {/* Subtle warm decorative background glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-b from-[#EFE8DC]/60 via-[#FAF8F5]/20 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Intro Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3ECE0] border border-[#E5DACD] text-[#6E5A47] text-xs sm:text-sm font-medium mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#A08466]" />
          <span>Studio d'optimisation UX & Micro-interactions fluides</span>
        </div>

        {/* Main Display Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#241F1A] font-medium tracking-tight leading-[1.15] max-w-4xl mx-auto">
          Des interfaces si naturelles qu'elles rendent chaque action <span className="italic font-normal text-[#5C4D3E]">évidente</span> et <span className="italic font-normal text-[#5C4D3E]">mémorable</span>.
        </h1>

        {/* Body Paragraph */}
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-[#65584B] max-w-2xl mx-auto leading-relaxed font-normal">
          Nous auditons vos flux critiques et insufflons la physique des interactions fluides. Éliminez les frictions cachées qui freinent vos utilisateurs et vos revenus.
        </p>

        {/* Direct Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            id="hero-primary-booking-btn"
            type="button"
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-7 py-4 rounded-full bg-[#5C4D3E] hover:bg-[#473B2F] text-[#FAF8F5] text-sm sm:text-base font-medium shadow-[0_8px_24px_rgba(84,70,56,0.2)] hover:shadow-[0_12px_32px_rgba(84,70,56,0.28)] transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>Échange 20 min • Audit gratuit</span>
            <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </button>

          <a
            href="#audit-demo"
            className="w-full sm:w-auto px-6 py-4 rounded-full bg-white/70 hover:bg-white text-[#4A3F35] border border-[#E2D7C8] hover:border-[#CBBCA9] text-sm sm:text-base font-medium transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            <MousePointer className="w-4 h-4 text-[#8C7A68]" />
            <span>Tester la démo Avant / Après</span>
          </a>
        </div>

        {/* Reassuring Bullet Points */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-[#736557]">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-700" />
            100% offert et sans engagement
          </span>
          <span className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-[#A08466]" />
            Diagnostic en direct sur votre produit
          </span>
          <span className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-[#655546]" />
            3 recommandations actionnables livrées
          </span>
        </div>

        {/* Visual Hero Teaser Card */}
        <div className="mt-14 max-w-4xl mx-auto rounded-3xl bg-white/70 border border-[#E7DFD5] p-3 sm:p-5 shadow-[0_20px_50px_rgba(95,81,68,0.06)]">
          <div className="rounded-2xl bg-[#FAF8F5] border border-[#EAE3D8] p-4 sm:p-6 text-left">
            <div className="flex items-center justify-between pb-4 border-b border-[#EAE3D8] mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#E5D2C0]"></span>
                <span className="w-3 h-3 rounded-full bg-[#DFCEBC]"></span>
                <span className="w-3 h-3 rounded-full bg-[#D4C1AD]"></span>
                <span className="text-xs text-[#8A7969] ml-2 font-mono">audit-session-live.fluid-ui</span>
              </div>
              <span className="text-[11px] font-semibold text-[#5C4D3E] px-2.5 py-1 bg-[#EFE8DC] rounded-full">
                Diagnostic 20 min en temps réel
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white border border-[#EFE9E0]">
                <span className="text-xs text-[#8C7E70] uppercase font-semibold">1. Friction Heuristique</span>
                <p className="text-sm font-semibold text-[#2C2723] mt-1">Élimination des 3 points de rupture</p>
                <p className="text-xs text-[#6E6357] mt-1">Analyse des hésitations de clic et de l'effort cognitif sur le parcours de souscription.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#EFE9E0]">
                <span className="text-xs text-[#8C7E70] uppercase font-semibold">2. Dynamique & Spring Motion</span>
                <p className="text-sm font-semibold text-[#2C2723] mt-1">Fluidité 60fps & micro-retours</p>
                <p className="text-xs text-[#6E6357] mt-1">Transitions naturelles qui guident l'œil sans saccade ni surcharge visuelle.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#EFE9E0]">
                <span className="text-xs text-[#8C7E70] uppercase font-semibold">3. Gain Mesurable</span>
                <p className="text-sm font-semibold text-[#2C2723] mt-1">+24% à +40% de conversion</p>
                <p className="text-xs text-[#6E6357] mt-1">Ressenti de vitesse instantané et complétion accrue de vos formulaires critiques.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
