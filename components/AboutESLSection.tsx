'use client';

import { CheckCircle2, Zap } from 'lucide-react';

const AboutESLSection = () => {
  const mandatorySkills = [
    'Attendance',
    'Punctuality',
    'Independent Learning',
    'Effective Verbal and Written Communication',
    'Collaboration',
    'Contribution',
  ];

  const midTierSkills = [
    'Resilience',
    'Self-Reflection',
  ];

  const topTierSkills = [
    'Analytical Thinking, Reasoning & Ideation',
    'Commercial Awareness & Acumen',
    'Problem Solving & Critical Analysis',
    'Emotional Intelligence',
    'Collaboration with Stakeholders',
    'Data Analysis',
    'Innovation, Creativity & Enterprise',
    'Asking Questions & Inquiry',
    'Curiosity & Active Learning',
    'Conceptual, Systemic & Critical Analysis',
  ];

  return (
    <section
      id="about"
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-700/5 via-transparent to-amber-700/5"
      data-aos="fade-up"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-green-700/30 to-amber-700/30 rounded-full border border-green-600/50">
            <Zap size={16} className="text-green-400" />
            <span className="text-sm font-semibold text-emerald-100">Competency Framework</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black mb-6 text-white">
            Demonstrated Competencies
          </h2>
          <p className="text-gray-300 text-lg font-medium">
            Foundational and advanced skills developed through professional project execution
          </p>
        </div>

        <div
          className="relative rounded-2xl border border-green-600/30 backdrop-blur-md bg-gradient-to-br from-white/5 to-transparent p-8 sm:p-12 hover:border-amber-600/40 smooth-transition"
          data-aos="fade-up-scale"
          data-aos-delay="100"
        >
          {/* Background accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-700/5 to-amber-700/5 rounded-2xl pointer-events-none" />

          <div className="relative">
            {/* Mandatory Skills */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">Lower-Tier: Foundational Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mandatorySkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-green-700/20 hover:bg-green-700/30 smooth-transition"
                    data-aos="fade-up"
                    data-aos-delay={`${150 + index * 50}`}
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mid Tier Skills */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">Mid-Tier: Elective Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {midTierSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-blue-700/20 hover:bg-blue-700/30 smooth-transition"
                    data-aos="fade-up"
                    data-aos-delay={`${200 + index * 50}`}
                  >
                    <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Tier Skills */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Top-Tier: Advanced Competencies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {topTierSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-amber-700/20 hover:bg-amber-700/30 smooth-transition"
                    data-aos="fade-up"
                    data-aos-delay={`${250 + index * 50}`}
                  >
                    <CheckCircle2 className="w-6 h-6 text-amber-300 flex-shrink-0 mt-0.5" />
                    <span className="text-white font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutESLSection;
