import React, { useEffect, useRef } from 'react';
import { Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        // Parallax calculation:
        // We move the background slightly based on scroll position.
        // The negative factor makes it move 'slower' or in reverse relative to viewport movement, creating depth.
        const yPos = window.scrollY * 0.05;
        bgRef.current.style.transform = `translateY(-${yPos}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial calculation
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="relative w-full py-10 px-6 border-t border-white/5 bg-black overflow-hidden">
      
      {/* Parallax Background Layer */}
      <div 
        ref={bgRef}
        className="absolute left-0 -top-[200px] w-full h-[200%] opacity-[0.15] pointer-events-none select-none will-change-transform"
        style={{
          backgroundImage: 'radial-gradient(#4a4a4a 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      ></div>

      {/* Gradient Overlay for smooth blending */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
        
        {/* Social Icons (Non-functional as requested) */}
        <div className="flex items-center gap-6">
          <div className="p-2 text-gray-500 hover:text-white transition-colors cursor-default hover:scale-110 duration-300">
            <Twitter className="w-5 h-5" strokeWidth={1.5} />
          </div>
          <div className="p-2 text-gray-500 hover:text-white transition-colors cursor-default hover:scale-110 duration-300">
            <Linkedin className="w-5 h-5" strokeWidth={1.5} />
          </div>
          <div className="p-2 text-gray-500 hover:text-white transition-colors cursor-default hover:scale-110 duration-300">
            <Instagram className="w-5 h-5" strokeWidth={1.5} />
          </div>
        </div>

        {/* Legal Text */}
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-[12px] text-gray-600 font-medium">
            © 2025 RGrlk Group. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-3 text-[11px] text-gray-700">
            <span className="hover:text-gray-500 transition-colors cursor-pointer">Política de Privacidad</span>
            <span className="w-1 h-1 rounded-full bg-gray-800"></span>
            <span className="hover:text-gray-500 transition-colors cursor-pointer">Términos de Uso</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;