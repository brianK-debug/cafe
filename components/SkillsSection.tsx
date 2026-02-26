'use client';

import SkillCard from './SkillCard';
import {
  Zap,
  Users,
  BarChart3,
  Briefcase,
  TrendingUp,
  Leaf,
} from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    {
      title: 'Project Planning & Organisation',
      description: 'Demonstrated ability to structure complex projects and coordinate deliverables',
      icon: <Briefcase />,
      proficiency: 92,
      evidence: [
        'Created comprehensive Work Breakdown Structure (WBS)',
        'Developed detailed Gantt chart with timeline management',
        'Established RACI matrix for role clarification',
        'Managed project milestones and dependencies',
      ],
    },
    {
      title: 'Analytical & Problem-Solving',
      description: 'Strategic analysis of business processes and identification of improvement opportunities',
      icon: <BarChart3 />,
      proficiency: 88,
      evidence: [
        'Conducted operational audit of café processes',
        'Identified 12 key bottlenecks in service delivery',
        'Analyzed customer flow and wait times',
        'Developed quantified improvement recommendations',
      ],
    },
    {
      title: 'Teamwork & Collaboration',
      description: 'Effective contribution within cross-functional project team',
      icon: <Users />,
      proficiency: 90,
      evidence: [
        'Collaborated with 5+ team members on project',
        'Contributed to weekly team meetings and discussions',
        'Shared findings and supported colleague presentations',
        'Maintained professional communication standards',
      ],
    },
    {
      title: 'Communication & Presentation',
      description: 'Professional articulation of findings and recommendations',
      icon: <Zap />,
      proficiency: 87,
      evidence: [
        'Prepared formal consultant-style pitch presentation',
        'Documented findings in professional report format',
        'Communicated complex data in accessible manner',
        'Presented recommendations to stakeholders',
      ],
    },
    {
      title: 'Financial Awareness',
      description: 'Understanding of cost-benefit analysis and financial decision-making',
      icon: <TrendingUp />,
      proficiency: 85,
      evidence: [
        'Estimated implementation costs for recommendations',
        'Conducted market benchmarking analysis',
        'Calculated ROI on proposed improvements',
        'Analyzed budget impact of efficiency gains',
      ],
    },
    {
      title: 'Ethical & Sustainable Decision-Making',
      description: 'Consideration of environmental and social responsibility in recommendations',
      icon: <Leaf />,
      proficiency: 88,
      evidence: [
        'Recommended supplier diversification for fair practices',
        'Proposed waste reduction and sustainability initiatives',
        'Considered employee wellbeing in process improvements',
        'Balanced stakeholder interests in recommendations',
      ],
    },
  ];

  return (
    <section id="skills" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-violet-600/5 via-transparent to-cyan-500/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200">
            Core Employability Skills
          </h2>
          <p className="text-foreground/70 text-lg font-medium">
            Six key competencies demonstrated through the RainyDay Café Operational Excellence Project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <SkillCard
                title={skill.title}
                description={skill.description}
                evidence={skill.evidence}
                proficiency={skill.proficiency}
                icon={skill.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
