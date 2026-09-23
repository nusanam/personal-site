'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Tomorrow Health',
    role: 'Senior Software Engineer',
    period: 'Apr 2026 – Present',
    location: 'Remote',
    highlights: [
      'Built THEA, an autonomous voice agent that calls provider offices to collect the clinical documents needed to bill home medical equipment orders. I owned the Celery jobs that run the business rules, the GraphQL layer on top of them, and the console operators use to watch and correct the agent.',
      'Designed the call gating: daily and weekly caps per phone line, business hours checks in each office timezone, do-not-call handling, and a closed-world outcome model where anything the system does not recognize goes to a human instead of retrying blind.',
      'Reverse engineered a 5,000 line undocumented Google Apps Script system before the production port, to work out which business rules were actually load bearing and which were just assumed.',
      'Rebalanced the retry schedule using real pilot data, where connect rates ranged from 71% at 10am to 36% at 2pm. Piloted with five supplier companies, several of which converted to contracts.',
      'Worked on Horizon, an LLM pipeline that turns incoming faxed orders into draft orders for staff review. I designed the classification schema, built the admin GraphQL tooling operations needed to review AI processed records that previously had no visibility, and ran the phased multi-org rollout behind LaunchDarkly.',
      'Cohort analysis against our Snowflake and dbt models showed AI assisted handling cut staff review time from about 10.5 to 8.5 minutes per order, with AI fax adoption reaching 75%.',
    ],
  },
  {
    company: 'Premier Inc.',
    role: 'Software Engineer',
    period: 'Aug 2024 – Apr 2026',
    location: 'Remote',
    highlights: [
      'Worked on a greenfield supply chain platform for 4,000+ hospitals through a $2.6B acquisition, mostly on surfacing domain gaps early enough that they did not become release problems.',
      'Drove architecture decisions on the React/TypeScript frontend and the .NET + C# CQRS backend API contracts, shipping flexible UI foundations ahead of the specs so downstream teams were not blocked.',
      'Strangled reporting modules out of a legacy .NET monolith into FastAPI services while migrating the frontend to React microfrontends, using feature flags to roll out with no downtime.',
      'Built a Python automation engine on LangChain and Azure OpenAI (RAG) that bootstrapped local environments and automated git workflows, cutting VM setup time by 88% and saving 480+ engineering hours a year.',
    ],
  },
  {
    company: 'Medidata Solutions',
    role: 'Software Engineer',
    period: 'Nov 2022 – Aug 2024',
    location: 'New York, NY',
    highlights: [
      'Built the metric benchmarking and ML projection visualizations in D3.js for the clinical trial platform, including the layer used on the Moderna COVID-19 vaccine trials.',
      'Led the Q2 charting initiative and designed Python service layers that removed repetitive config, shipping two weeks early.',
      'Refactored HOCs, reducers and data pipelines for maintainability, cutting average cyclomatic complexity by 33%.',
      'Cut frontend latency by roughly 0.8s by redesigning the API contract and how the client handled the data.',
    ],
  },
  {
    company: 'Joy',
    role: 'Independent Contractor for Client',
    period: 'Apr 2022 – Oct 2022',
    location: 'Remote',
    highlights: [
      'Stabilized a rapidly scaling microservice architecture with global error handling middleware in Node, which restored observability and cut unhandled exceptions by 60%.',
      'Isolated AWS upload failures using telemetry, which made recovery and safe database rollbacks possible during production incidents.',
    ],
  },
  {
    company: 'Peacekeepers',
    role: 'Founding Software Engineer',
    period: 'Jan 2021 – Apr 2022',
    location: 'New York / Remote',
    highlights: [
      'Led a 3 person engineering team to design and launch a platform improving access to legal resources.',
      'Partnered with the CEO on a greenfield React, Node and Python platform, with FastAPI for data logic, Express for real-time APIs, and GitHub Actions CI/CD built around TDD.',
    ],
  },
  {
    company: 'Codesmith EdTech Platform',
    role: 'Platform Engineer',
    period: 'Oct 2019 – Jan 2021',
    location: 'New York, NY',
    highlights: [
      'Moved core platform infrastructure onto Docker so the team could work remotely through the pandemic.',
      'Ran public JavaScript workshops for over 100 people, and taught Python and AWS deployment workshops to bootcamp cohorts.',
    ],
  },
  {
    company: 'Reactime (Open Source)',
    role: 'Co-founding Engineer',
    period: 'Aug 2019 – Dec 2021',
    location: 'New York, NY',
    highlights: [
      'Architected Reactime, a time travel debugging devtool for React state. The D3.js visualization renders state changes by traversing the React fiber tree, with AST parsing to detect hooks inside webpack bundles.',
      'Published the npm package for state tracking integration with Chrome devtools.',
      'Built a port based system so you can debug several React applications at once.',
    ],
  },
  {
    company: 'Allergy Asthma Sleep Center',
    role: 'DB Admin & Developer',
    period: '2017 – 2019',
    location: 'New York, NY',
    highlights: [
      'Built a custom patient data platform on AWS with a SQL database, role based authentication and clinical intake forms, replacing handwritten allergy and sleep records.',
      'Designed the interfaces clinical staff used to enter and retrieve patient information in one place, instead of across separate systems.',
      'Automated synchronization across previously siloed clinical records, which routed documentation to the right provider and cut hours of manual processing a day.',
    ],
  },
  {
    company: 'MBCC (Nonprofit)',
    role: 'Web Developer',
    period: '2014 – 2016',
    location: 'New York, NY + Boston, MA',
    highlights: [
      'Built and maintained consumer facing web features including dynamic content displays and event pages, across thousands of media assets.',
      'Built intake and registration pages that integrated with external platforms to generate participant profile pages, improving fundraiser and event onboarding.',
      'Maintained the databases tracking sponsors, volunteers and participants across multiple annual events.',
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
          Where I have worked
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
