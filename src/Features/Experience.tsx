'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Premier Inc.',
    role: 'Software Engineer',
    period: 'Aug 2024 – Present',
    location: 'Remote',
    highlights: [
      'Recognized for technical precision and surfacing critical domain gaps, optimizing releases ahead of $2.6B acquisition',
      'Drove architecture decisions on greenfield React/TypeScript frontend and .NET + C# CQRS backend API contracts, delivering flexible UI foundations ahead of specs to unblock downstream teams',
      'Modernized legacy .NET monolith by strangling reporting modules into high performance FastAPI microservices while migrating to React microfrontends. This architecture leverages feature flags for 0% downtime during rollout of new supply chain analytics',
      'Engineered a Python-based automation engine using LangChain and Azure OpenAI (RAG) to orchestrate local environment bootstrapping; integrated PyWin32 for OS level synchronization and git workflow automation, slashing VM setup time by 88% and saving 480+ annual engineering hours',
    ],
  },
  {
    company: 'Medidata Solutions',
    role: 'Software Engineer',
    period: 'Nov 2022 – Aug 2024',
    location: 'New York, NY',
    highlights: [
      'Built metric-driven D3.js visualizations for AI-powered platform, contributing to 30% increase in customer adoption',
      'Led Q2 charting initiative: designed Python service layers to eliminate repetitive config, shipping 2 weeks ahead of deadline',
      'Refactored architecture (HOCs, reducers, data pipelines) for better maintainability, cutting avg. cyclomatic complexity by 33%',
      'Improved frontend latency by ~0.8s through API contract redesign and optimized client-side data handling',
    ],
  },
  {
    company: 'Joy',
    role: 'Independent Contractor for Client',
    period: 'Apr 2022 – Oct 2022',
    location: 'Remote',
    highlights: [
      'Stabilized rapidly scaling microservice architecture by building global error handling middleware in Node, restoring service observability and reducing unhandled exceptions by 60%',
      'Isolated AWS upload failures using telemetry, enabling rapid recovery + safe database rollbacks during production incidents',
    ],
  },
  {
    company: 'Peacekeepers',
    role: 'Founding Software Engineer',
    period: 'Jan 2021 – Apr 2022',
    location: 'New York / Remote',
    highlights: [
      'Led 3-person engineering team to design and launch a platform improving access to legal resources',
      'Partnered with CEO to launch a greenfield React, Node, and Python platform; engineered FastAPI for data logic and Express for real-time APIs with GitHub Actions CI/CD for 100% availability via TDD',
    ],
  },
  {
    company: 'Codesmith EdTech Platform',
    role: 'Platform Engineer',
    period: 'Oct 2019 – Jan 2021',
    location: 'New York, NY',
    highlights: [
      'Transformed core platform infrastructure to power remote workflows during the pandemic using Docker',
      'Led public JavaScript workshops for over 100 people; taught Python/AWS deployment workshops to bootcamp cohortss',
    ],
  },
  {
    company: 'Reactime (Open Source)',
    role: 'Co-founding Engineer',
    period: 'Aug 2019 – Dec 2021',
    location: 'New York, NY',
    highlights: [
      'Architected Reactime, a time-travel debugging devtool for React state; A/B tested options for a D3.js visualization rendering state changes via tree traversal of React fiber and AST parsing to detect React hooks in webpack bundles',
      'Published npm package for state tracking integration with Chrome devtools',
      'Configured port-based system for simultaneous debugging of multiple React applications',
    ],
  },
  {
    company: 'Allergy Asthma Sleep Center',
    role: 'Db Admin & Developer',
    period: '2017 – 2019',
    location: 'New York, NY',
    highlights: [
      'Built custom patient data platform on AWS with SQL database, role based authentication, and clinical intake forms to digitize patient allergy and sleep records from previously managed handwritten documentation',
      'Designed UIs enabling clinical staff to enter and retrieve patient information across unified system, improving data accessibility and reducing administrative overhead for providers',
      'Automated data synchronization across previously siloed clinical records, streamlining documentation routing to appropriate providers, reducing manual processing time by hours a day',
    ],
  },
  {
    company: 'MBCC (Nonprofit) — Web Developer',
    role: 'Web Developer',
    period: '2014-2016',
    location: 'New York, NY + Boston, MA (travel required)',
    highlights: [
      'Developed and maintained consumer facing web features including dynamic content displays and event pages, managing thousands of media assets across campaigns',
      'Built intake and registration pages integrating with external platforms to dynamically generate user profile pages, improving fundraiser and event participant onboarding experiences',
      'Maintained operational databases tracking stakeholder relationships across sponsors, volunteers, and participants for multiple annual events',
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
