import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { ASSETS } from '../constants';

const ConsultancySection: React.FC = () => {
  const whatsappMainUrl = `https://wa.me/595984355775?text=${encodeURIComponent("Hola, quisiera solicitar una consultoría para mi empresa.")}`;

  return (
    <div className="w-full mt-12 mb-8 animate-fade-in-up">
      <div className="glass-panel rounded-apple p-8 relative overflow-hidden text-center border border-primary/20">
        
        {/* Background Gradient Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-5">
          
          <div className="size-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-1">
            <Sparkles className="w-6 h-6 text-primary" strokeWidth={1.5} />
          </div>

          <div>
            <h4 className="text-white font-bold text-[22px] tracking-tight mb-2">IA Empresarial a Medida</h4>
            <p className="text-[#86868b] text-[16px] font-medium leading-relaxed max-w-xs mx-auto">
              Soluciones diseñadas específicamente para los desafíos más complejos de su organización.
            </p>
          </div>

          <a 
            href={whatsappMainUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-sm flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-dark active:scale-[0.98] transition-all h-[52px] text-white text-[16px] font-semibold shadow-[0_0_25px_rgba(0,113,227,0.25)] mt-2 group"
          >
            <span>Solicitar Consultoría</span>
            {/* WhatsApp Icon */}
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 group-hover:scale-110 transition-transform">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </a>

          {/* Branding */}
          <div className="flex justify-center mt-2 opacity-60">
             <img src={ASSETS.rgrlkWhite} alt="RGrlk Group" className="h-4 object-contain" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ConsultancySection;