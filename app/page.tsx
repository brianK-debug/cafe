'use client';

import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutESLSection from '@/components/AboutESLSection';
import SkillsSection from '@/components/SkillsSection';
import EvidenceGallery from '@/components/EvidenceGallery';
import ReflectionSection from '@/components/ReflectionSection';
import CareerReadinessSection from '@/components/CareerReadinessSection';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    // Initialize AOS scroll animations
    const initAOS = async () => {
      try {
        const AOS = (await import('aos')).default;
        AOS.init({
          duration: 800,
          easing: 'ease-out-cubic',
          once: true,
          offset: 100,
          disable: function () {
            const maxWidth = 600;
            return window.innerWidth < maxWidth;
          },
        });

        // Refresh AOS on component mount
        AOS.refresh();
      } catch (error) {
        console.error('Failed to initialize AOS:', error);
      }
    };

    initAOS();
  }, []);

  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-x-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Sections */}
      <HeroSection />
      <AboutESLSection />
      <SkillsSection />
      <EvidenceGallery />
      <ReflectionSection />
      <CareerReadinessSection />
      <Footer />
    </main>
  );
}
