import { useState } from 'react';
import { MotionConfig } from 'motion/react';

import { Preloader } from './components/canport/Preloader';
import { Navbar } from './components/canport/Navbar';
import { Hero } from './components/canport/Hero';
import { AboutSection } from './components/canport/AboutSection';
import { BentoGrid } from './components/canport/BentoGrid';
import { ToolsMinimalGrid } from './components/canport/ToolsMinimalGrid';
import { ProjectsSection } from './components/canport/ProjectsSection';
import { BeforeAfterSection } from './components/canport/BeforeAfterSection';
import { ProcessSection } from './components/canport/ProcessSection';
import { ContactSection } from './components/canport/ContactSection';
import { Footer } from './components/canport/Footer';
import { FloatingActionButton } from './components/FloatingActionButton';
import { BookingModal } from './components/BookingModal';
import { ScheduleModal } from './components/canport/ScheduleModal';
import { DURATION, EASE_OUT } from './lib/motion-presets';

export default function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [replayKey, setReplayKey] = useState(0);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>('Organisation Administrative');

  const handleReplayLoader = () => {
    setShowPreloader(true);
    setReplayKey((prev) => prev + 1);
  };

  const handleOpenBooking = (plan?: string) => {
    if (plan) {
      setSelectedPlan(plan);
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  const handleOpenSchedule = () => {
    setIsScheduleOpen(true);
  };

  const handleCloseSchedule = () => {
    setIsScheduleOpen(false);
  };

  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ duration: DURATION.base, ease: EASE_OUT }}
    >
      <div className="min-h-screen bg-[#FDFBF7] text-[#2D241E] font-sans selection:bg-[#E0A97E]/30 selection:text-[#2D241E] flex flex-col">
        {showPreloader && (
          <Preloader key={replayKey} onComplete={() => setShowPreloader(false)} />
        )}

        {/* Navigation Bar */}
        <Navbar
          onOpenBooking={handleOpenBooking}
          onOpenSchedule={handleOpenSchedule}
        />

        {/* Main Content */}
        <main className="flex-1">
          <Hero
            onOpenBooking={handleOpenBooking}
            onOpenSchedule={handleOpenSchedule}
          />
          <AboutSection />
          <BentoGrid onOpenBooking={handleOpenBooking} />
          <ToolsMinimalGrid />
          <ProjectsSection onOpenBooking={handleOpenBooking} />
          <BeforeAfterSection />
          <ProcessSection onOpenBooking={handleOpenBooking} />
          <ContactSection onOpenBooking={handleOpenBooking} />
        </main>

        {/* Footer */}
        <Footer onReplayLoader={handleReplayLoader} />

        {/* Bouton d'action flottant discret en bas à droite (apparaît après le scroll du Hero) */}
        <FloatingActionButton onOpenBooking={handleOpenBooking} />

        {/* Fenêtre modale de réservation d'appel de découverte (20 min offertes) */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={handleCloseBooking}
          initialPlan={selectedPlan}
        />

        {/* Fenêtre modale des créneaux et disponibilités */}
        <ScheduleModal
          isOpen={isScheduleOpen}
          onClose={handleCloseSchedule}
          onOpenBooking={handleOpenBooking}
        />
      </div>
    </MotionConfig>
  );
}
