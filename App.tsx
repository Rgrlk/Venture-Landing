import React, { useEffect, useState } from 'react';
import { SERVICES, ASSETS } from './constants';
import ServiceCard from './components/ServiceCard';
import ConsultancySection from './components/ConsultancySection';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Simple scroll listener to change header opacity
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex flex-col bg-background font-sans selection:bg-primary selection:text-white">
      
      {/* Sticky Header */}
      <header className={`fixed top-0 left-0 w-full z-[60] transition-all duration-300 ${scrolled ? 'sticky-nav-glass' : 'bg-transparent'}`}>
        <div className="max-w-2xl mx-auto flex items-center justify-center px-6 h-[64px]">
          {/* RGrlk Logo (Centered) */}
          <div className="flex items-center">
             <img 
               src={ASSETS.rgrlkLogo} 
               alt="RGrlk Group" 
               className="h-10 w-10 rounded-full object-cover border border-white/10 shadow-lg shadow-black/20" 
             />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 pt-28 pb-10 w-full max-w-2xl mx-auto">
        
        {/* Hero Section */}
        <div className="relative mb-12 animate-fade-in-up">
          {/* Ambient Background Light */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-primary/15 blur-[100px] rounded-full pointer-events-none"></div>
          
          <h1 className="relative z-10 text-[40px] font-bold leading-[1.1] tracking-tight mb-4 text-white">
            Nuestras <br />
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#0071e3] to-white bg-[length:200%_auto] animate-shimmer drop-shadow-[0_0_8px_rgba(0,113,227,0.4)]">
              Soluciones de IA
            </span>
          </h1>
          <p className="relative z-10 text-secondary text-[19px] font-medium leading-tight max-w-sm">
            Inteligencia pionera para la empresa moderna. Transforme sus datos en decisiones.
          </p>
        </div>

        {/* Services Grid */}
        <div className="flex flex-col gap-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* New Consultancy Section (Chapter) */}
        <ConsultancySection />

        {/* Extra Branding */}
        <div className="mt-8 flex justify-center opacity-30 hover:opacity-60 transition-opacity duration-500 mb-8">
            <img src={ASSETS.labIaLogo} alt="Lab IA" className="h-8 object-contain" />
        </div>

      </main>

      {/* Standard Footer */}
      <Footer />
      
    </div>
  );
};

export default App;