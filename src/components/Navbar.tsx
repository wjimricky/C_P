import { Waves, Sparkles, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export function Navbar({ onOpenBooking }: NavbarProps) {
  return (
    <header 
      id="main-navigation-header" 
      className="sticky top-0 z-30 w-full bg-[#FAF8F5]/80 backdrop-blur-md border-b border-[#EAE3D8] transition-all"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo and Studio badge */}
        <a 
          href="#intro" 
          className="flex items-center gap-3 group select-none"
        >
          <div className="w-10 h-10 rounded-2xl bg-[#5C4D3E] text-[#FAF8F5] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
            <Waves className="w-5 h-5 text-[#E6DACB]" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#2C2723] leading-tight">
              Fluid UI Boost
            </span>
            <span className="text-[11px] font-medium tracking-wide uppercase text-[#8A7969]">
              Studio d'Audit & Motion UX
            </span>
          </div>
        </a>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#655546]">
          <a 
            href="#methode" 
            className="hover:text-[#2C2723] transition-colors py-1"
          >
            Méthodologie
          </a>
          <a 
            href="#audit-demo" 
            className="hover:text-[#2C2723] transition-colors py-1"
          >
            Démonstrateur Avant / Après
          </a>
          <a 
            href="#expertises" 
            className="hover:text-[#2C2723] transition-colors py-1"
          >
            Piliers d'intervention
          </a>
          <a 
            href="#faq" 
            className="hover:text-[#2C2723] transition-colors py-1"
          >
            Questions fréquentes
          </a>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <button
            id="nav-booking-cta"
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full 
                       bg-white/80 hover:bg-white text-[#473B2F] 
                       border border-[#E2D7C8] hover:border-[#CBBCA9]
                       shadow-[0_2px_8px_rgba(84,70,56,0.06)] hover:shadow-md 
                       text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#A08870]" />
            <span className="hidden sm:inline">Échange 20 min</span>
            <span className="font-semibold text-[#5C4D3E]">Audit offert</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#8A7969]" />
          </button>
        </div>
      </div>
    </header>
  );
}
