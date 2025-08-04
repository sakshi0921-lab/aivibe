'use client';

import { useEffect } from 'react';
import ModernNavbar from '@/components/ui/ModernNavbar';
import ModernHero from '@/components/sections/ModernHero';
import ModernFeatures from '@/components/sections/ModernFeatures';
import ModernPricing from '@/components/sections/ModernPricing';
import ModernTestimonials from '@/components/sections/ModernTestimonials';
import ModernFAQ from '@/components/sections/ModernFAQ';
import ModernFooter from '@/components/sections/ModernFooter';
import Starfield from '@/components/ui/Starfield';
import ScrollProgress from '@/components/ui/ScrollProgress';
import { useGSAP } from '@/hooks/useGSAP';

export default function Home() {
  useGSAP();

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Starfield />
      <ScrollProgress />
      <ModernNavbar />
      <ModernHero />
      <ModernFeatures />
      <ModernPricing />
      <ModernTestimonials />
      <ModernFAQ />
      <ModernFooter />
    </div>
  );
}