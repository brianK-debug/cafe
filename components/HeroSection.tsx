'use client';

import { ArrowDown, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Academic background gradient */}
      <div
        className="absolute inset-0 gradient-shift"
        style={{
          background: 'linear-gradient(135deg, oklch(0.12 0.01 250), oklch(0.15 0.02 260), oklch(0.18 0.01 240), oklch(0.12 0.01 250))',
          backgroundSize: '300% 300%',
        }}
      />

      {/* Subtle floating accents */}
      <div className="absolute top-20 right-32 w-96 h-96 bg-green-700/20 rounded-full filter blur-3xl float opacity-30 mix-blend-multiply" />
      <div className="absolute bottom-40 left-24 w-80 h-80 bg-amber-700/15 rounded-full filter blur-3xl float opacity-25 mix-blend-multiply" style={{ animationDelay: '1s' }} />

      {/* Content with enhanced visual hierarchy */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
          {/* Accent badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-gradient-to-r from-green-700/30 to-amber-700/30 rounded-full border border-green-600/50">
            <Sparkles size={16} className="text-green-400" />
            <span className="text-sm font-semibold text-emerald-100">Academic Portfolio</span>
          </div>

          {/* Name */}
          <p className="text-2xl sm:text-3xl font-bold text-amber-100 mb-4">Lucky Ale</p>

          {/* Main headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight text-white">
            Employability
            <br />
            Skills Portfolio
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl font-medium text-amber-100 mb-6">
            Comprehensive Competency Demonstration
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            This portfolio demonstrates development across foundational, elective, and advanced competency tiers through practical application of strategic analysis, analytical thinking, problem-solving, stakeholder collaboration, and commercial awareness. Evidence-based documentation showcases resilience, self-reflection, and the ability to drive meaningful organizational improvement through the RainyDay Café Operational Enhancement Initiative.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => scrollToSection('skills')}
            className="px-8 py-4 bg-green-700 hover:bg-green-600 text-white font-bold rounded-lg smooth-hover shadow-lg smooth-transition text-lg"
          >
            View Competencies
          </button>
          <button
            onClick={() => scrollToSection('evidence')}
            className="px-8 py-4 border-2 border-amber-600 text-amber-100 font-bold rounded-lg smooth-hover hover:bg-amber-700/20 text-lg"
          >
            View Evidence
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center animate-bounce">
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-amber-300/70 hover:text-amber-200 smooth-transition p-2 hover:bg-amber-700/10 rounded-full"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
