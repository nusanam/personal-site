'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Premier Inc.',
    role: 'Software Engineer',
    period: 'Aug 2024 – Present',
    location: '',
    highlights: [
      'Recognized for technical precision and surfacing critical domain gaps, optimizing releases ahead of $2.6B acquisition',
      'Drove architecture decisions on greenfield React/TypeScript frontend and .NET + C# CQRS backend API contracts, delivering flexible UI foundations ahead of specs to unblock downstream teams',
      'Modernized a 10-year Angular + .NET monolith running on Windows VM infrastructure to microfrontends with feature flag rollouts, enabling safe incremental migration of core supply chain features',
      'Engineered .NET utility with LangChain and Azure OpenAI RAG to automate local environment bootstrapping and onboarding documentation; slashed VM setup time by 88% and reclaimed 480+ annual engineering hours,',
    ],
  },
  {
    company: 'Medidata Solutions',
    role: 'Software Engineer',
    period: 'Nov 2022 – Aug 2024',
    location: 'New York, NY',
    highlights: [
      'Built metric-driven D3.js visualizations for AI-powered platform, contributing to 30% increase in customer adoption',
      'Led Q2 charting initiative: designed abstractions to eliminate repetitive configuration, shipping 2 weeks ahead of deadline',
      'Refactored architecture (HOCs, reducers, data pipelines) for better maintainability, cutting avg. cyclomatic complexity by 33%',
      'Improved frontend latency by ~0.8s through API contract redesign and optimized client-side data handling',
    ],
  },
  {
    company: 'Joy (Contract)',
    role: 'Software Engineer',
    period: 'Apr 2022 – Oct 2022',
    location: '',
    highlights: [
      'Stabilized rapidly scaling microservice architecture by building global error handling middleware in Node, restoring service observability and reducing unhandled exceptions by 60%',
      'solated AWS upload failures using telemetry, enabling rapid recovery + safe database rollbacks during production incidents',
    ],
  },
  {
    company: 'Peacekeepers',
    role: 'Software Engineer',
    period: 'Jan 2021 – Apr 2022',
    location: '',
    highlights: [
      'Led 3-person engineering team to design and launch an application to improve access to legal aid resources',
      'Delivered frontend and backend architecture with CEO under tight timelines using TDD and lightweight CI/CD pipeline',
    ],
  },
  {
    company: 'Codesmith',
    role: 'Software Engineer (Platform)',
    period: 'Aug 2019 – Dec 2022',
    location: 'New York, NY',
    highlights: [
      'Transformed core platform infrastructure to power remote workflows during the pandemic using Docker',
      'Led public JavaScript workshops for over 100 people; taught AWS deployment workshops to bootcamp cohorts',
    ],
  },
  {
    company: 'Reactime (Open Source)',
    role: 'Co-founder & Software Engineer',
    period: 'Aug 2019 – Dec 2021',
    location: 'New York, NY',
    highlights: [
      'Architected Reactime, a time-travel debugging devtool for React state; A/B tested options for a D3.js visualization rendering state changes via tree traversal of React fiber and AST parsing to detect React hooks in webpack bundles',
      'Published npm package for state tracking integration with Chrome devtools',
      'Configured port-based system for simultaneous debugging of multiple React applications',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id='experience' className='text-white py-16 md:py-24'>
      <div className='max-w-[1400px] mx-auto px-6 md:px-10 xl:px-20'>
        <motion.h2
          className='text-3xl md:text-4xl lg:text-5xl font-light mb-12 md:mb-16'
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Experience
        </motion.h2>

        <motion.div
          className='space-y-12 md:space-y-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          {experiences.map((exp, index) => (
            <div
              key={index}
              className='group border-l-2 border-accent-teal pl-6 md:pl-8 hover:border-accent-purple transition-colors duration-300'
            >
              <div className='mb-4'>
                <h3 className='text-2xl md:text-3xl font-medium text-white group-hover:text-accent-purple transition-colors duration-300 mb-2'>
                  {exp.company}
                </h3>
                <div className='flex flex-wrap gap-3 text-base md:text-lg text-text-secondary'>
                  <span className='font-medium text-accent-teal'>
                    {exp.role}
                  </span>
                  <span>•</span>
                  <span>{exp.period}</span>
                  {exp.location && (
                    <>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </>
                  )}
                </div>
              </div>

              <ul className='space-y-3'>
                {exp.highlights.map((highlight, hIndex) => (
                  <li
                    key={hIndex}
                    className="text-base md:text-lg text-white/80 leading-relaxed pl-5 relative before:content-['▹'] before:absolute before:left-0 before:text-accent-teal"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
