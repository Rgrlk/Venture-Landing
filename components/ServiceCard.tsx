import React from 'react';
import { ChevronRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceCardProps {
  service: ServiceItem;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { title, description, icon: Icon, color, gradientUrl } = service;

  // Dynamic color mappings for Tailwind
  const colorMap: Record<string, { bg: string, text: string, border: string, glow: string }> = {
    blue: { bg: 'bg-blue-500/20', text: 'text-blue-500', border: 'border-blue-500/20', glow: 'from-blue-600' },
    purple: { bg: 'bg-purple-500/20', text: 'text-purple-400', border: 'border-purple-500/20', glow: 'from-purple-600' },
    emerald: { bg: 'bg-emerald-500/20', text: 'text-emerald-400', border: 'border-emerald-500/20', glow: 'from-emerald-600' },
  };

  const theme = colorMap[color] || colorMap.blue;
  
  // Create specific WhatsApp link for this service
  const whatsappUrl = `https://wa.me/595984355775?text=${encodeURIComponent(`Hola, me interesa recibir más información sobre sus servicios de ${title}.`)}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-panel rounded-apple p-7 relative overflow-hidden group block transition-all duration-500 ease-out 
                 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60 hover:border-white/20
                 active:scale-[0.98] active:translate-y-0 cursor-pointer"
    >
      {/* Decorative Glow - Intensifies on hover */}
      <div className={`absolute -top-10 -left-10 w-[140px] h-[140px] rounded-full bg-gradient-to-br ${theme.glow} to-transparent opacity-20 blur-[50px] pointer-events-none group-hover:opacity-40 transition-opacity duration-700`}></div>

      {/* Header with Icon and Subtle Background Image */}
      <div className="relative z-10 flex items-start justify-between mb-6">
        <div className={`size-14 rounded-2xl ${theme.bg} ${theme.border} border flex items-center justify-center backdrop-blur-md transition-all duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-lg group-hover:shadow-black/20`}>
          <Icon className={`w-7 h-7 ${theme.text}`} strokeWidth={1.5} />
        </div>
        
        {/* Subtle decorative image in top right - Zooms and reveals color on hover */}
        {gradientUrl && (
          <div 
            className="w-20 h-14 rounded-xl bg-cover bg-center opacity-30 mix-blend-screen grayscale group-hover:grayscale-0 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700 ease-out origin-center"
            style={{ backgroundImage: `url(${gradientUrl})` }}
          ></div>
        )}
      </div>

      {/* Content */}
      <h3 className="relative z-10 text-white text-[22px] font-semibold mb-2 tracking-tight group-hover:text-white transition-colors">
        {title}
      </h3>
      <p className="relative z-10 text-gray-400 text-[15px] leading-relaxed mb-6 font-medium group-hover:text-gray-300 transition-colors duration-300">
        {description}
      </p>

      {/* Link Visual - Arrow moves on hover */}
      <div className={`relative z-10 inline-flex items-center gap-1 ${theme.text} text-[15px] font-semibold transition-all group-hover:brightness-125`}>
        Saber más
        <ChevronRight className="w-[18px] h-[18px] transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </a>
  );
};

export default ServiceCard;