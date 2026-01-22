import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string; // Tailwind color class base (e.g., "blue", "purple")
  glowColor: string; // Hex for custom glow if needed
  gradientUrl?: string; // Optional background decoration
}

export interface BrandingAssets {
  ventureLogo: string;
  rgrlkWhite: string;
  labIaLogo: string;
  rgrlkLogo: string;
}