import { TrendingUp, MessageSquareText, ShieldCheck } from 'lucide-react';
import { ServiceItem, BrandingAssets } from './types';

export const ASSETS: BrandingAssets = {
  ventureLogo: "https://i.ibb.co/DfqgRYH6/Venture-Logo.png",
  rgrlkWhite: "https://i.ibb.co/pr9NtKhX/RGrlk-Group-Blanco.png",
  labIaLogo: "https://i.ibb.co/7df45bm5/Lab-IA-Logo.png",
  rgrlkLogo: "https://i.ibb.co/XfDJHq74/Logo-RGrlk-Group.jpg"
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'predictive-analysis',
    title: 'Análisis Predictivo',
    description: 'Prediga tendencias de mercado con precisión excepcional utilizando modelos de aprendizaje profundo.',
    icon: TrendingUp,
    color: 'blue',
    glowColor: '#0071e3',
    gradientUrl: 'https://cdn.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg' // Abstract graph
  },
  {
    id: 'nlp',
    title: 'Procesamiento de Lenguaje',
    description: 'Automatice el soporte y análisis con comprensión del lenguaje a nivel humano.',
    icon: MessageSquareText,
    color: 'purple',
    glowColor: '#a855f7',
    gradientUrl: 'https://cdn.pixabay.com/photo/2020/08/09/14/25/business-5475661_1280.jpg' // Network connections
  },
  {
    id: 'security',
    title: 'Seguridad con IA',
    description: 'Proteja su infraestructura con detección de amenazas adaptativa que evoluciona en tiempo real.',
    icon: ShieldCheck,
    color: 'emerald',
    glowColor: '#10b981',
    gradientUrl: 'https://cdn.pixabay.com/photo/2018/01/14/23/12/matrix-3083028_1280.jpg' // Matrix/Security style
  }
];

export const WHATSAPP_LINK = "https://wa.me/595984355775";