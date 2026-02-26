'use client';

import { Quote, Lightbulb } from 'lucide-react';

const ReflectionSection = () => {
  return (
    <section id="reflection" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cyan-500/5 via-transparent to-violet-600/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 rounded-full border border-cyan-500/30">
            <Lightbulb size={16} className="text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-200">Personal Reflection</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200">
            Learning & Growth
          </h2>
          <p className="text-foreground/70 text-lg font-medium">
            Insights from the RainyDay Café operational excellence journey
          </p>
        </div>

        {/* Reflection Card */}
        <div
          className="relative rounded-2xl border border-cyan-500/30 backdrop-blur-md bg-gradient-to-br from-white/5 to-transparent p-8 sm:p-12 hover:border-violet-400 smooth-transition"
          data-aos="fade-up-scale"
          data-aos-delay="100"
        >
          <Quote className="absolute top-8 right-8 text-cyan-400/20" size={50} />

          <div className="prose prose-invert max-w-none relative">
            <p className="text-foreground/85 leading-relaxed mb-6 text-lg italic font-light">
              Engaging with the RainyDay Café operational improvement project has fundamentally enhanced my understanding of contemporary business challenges and the multifaceted nature of organizational improvement. Throughout this experience, I have developed not only technical competencies in project management and business analysis, but also crucial soft skills in stakeholder engagement and collaborative problem-solving.
            </p>

            <p className="text-foreground/85 leading-relaxed mb-6 text-lg font-light">
              The analytical work required to identify inefficiencies demonstrated the importance of data-driven decision-making. By systematically examining operational processes and benchmarking against industry standards, I recognized how seemingly minor improvements can generate substantial organizational value. This empirical approach has shaped my commitment to evidence-based business recommendations.
            </p>

            <p className="text-foreground/85 leading-relaxed mb-6 text-lg font-light">
              Perhaps most significantly, this project illuminated the intersection of business efficiency and ethical responsibility. Balancing financial optimization with fair supplier practices, environmental sustainability, and employee wellbeing requires nuanced thinking that extends beyond traditional cost-benefit analysis. This holistic perspective will inform my professional approach moving forward.
            </p>

            <p className="text-foreground/85 leading-relaxed text-lg font-light">
              As I advance in my career, I will leverage these competencies to drive meaningful organizational change, recognizing that sustainable business improvement requires integrating strategic analysis, collaborative teamwork, and principled decision-making.
            </p>
          </div>
        </div>

        {/* Key Learnings */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Data-Driven Thinking',
              description: 'Importance of empirical analysis in business decisions',
            },
            {
              title: 'Ethical Leadership',
              description: 'Balancing efficiency with responsibility to stakeholders',
            },
            {
              title: 'Collaborative Excellence',
              description: 'Power of diverse perspectives in problem-solving',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden backdrop-blur-md bg-white/5 border border-violet-500/30 p-6 hover:border-cyan-400 smooth-transition text-center fade-in-up"
              data-aos="fade-up"
              data-aos-delay={`${150 + index * 100}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-cyan-500/10 pointer-events-none" />
              <h3 className="font-bold text-white mb-3 relative text-lg">{item.title}</h3>
              <p className="text-sm text-foreground/70 relative leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReflectionSection;
