const experiences = [
  {
    company: 'Premier Inc.',
    role: 'Software Engineer',
    period: 'Aug 2024 – Present',
    location: '',
    highlights: [
      'Built a greenfield React + TypeScript frontend and contributing to the .NET Core + C# CQRS backend for Premier’s next-generation supply-chain platform.',
      'Modernized a decade-old Angular/.NET monolith into React microfrontends with safe, feature-flag-driven rollouts.',
      'Defined GraphQL and API contracts that reduced redundancy and improved data accuracy across the app.',
      'Optimized ASP.NET Core and EF Core queries to reduce latency and strengthen backend reliability.',
      'Automated a .NET bootstrap tool that cut Windows VM environment setup from 25 minutes to 3.',
      'Identified critical domain issues that improved system stability ahead of a $2.6B acquisition.',
    ],
  },
  {
    company: 'Medidata Solutions',
    role: 'Software Engineer',
    period: 'Nov 2022 – Aug 2024',
    location: 'New York, NY',
    highlights: [
      'Developed metric-driven D3.js and HighCharts visualizations for an AI-powered clinical trial platform, contributing to a 30% increase in customer adoption.',
      'Refactored core UI architecture to reduce cyclomatic complexity and improve maintainability.',
      'Standardized design patterns using Atomic Design to increase consistency and speed up feature delivery.',
      'Improved frontend performance by redesigning API contracts and optimizing client data workflows.',
      'Enhanced delivery predictability by introducing engineering refinement and migrating the component library to Artifactory.',
    ],
  },
  {
    company: 'Joy (Contract)',
    role: 'Software Engineer',
    period: 'Apr 2022 – Oct 2022',
    location: '',
    highlights: [
      'Stabilized a fast-scaling microservice architecture during the rollout of a new dropshipping feature.',
      'Introduced global error-handling middleware in Node to restore observability after a 60% drop in exception signal.',
      'Used telemetry to isolate AWS media-upload failures, enabling rapid recovery and safe database rollbacks.',
    ],
  },
  {
    company: 'Peacekeepers',
    role: 'Software Engineer',
    period: 'Jan 2021 – Apr 2022',
    location: '',
    highlights: [
      'Led a small engineering team to deliver a TDD-driven MVP improving access to legal-aid resources.',
      'Architected the platform’s frontend and backend under tight deadlines using a streamlined CI workflow.',
    ],
  },
  {
    company: 'Codesmith',
    role: 'Software Engineer (Platform)',
    period: 'Aug 2019 – Dec 2022',
    location: 'New York, NY',
    highlights: [
      'Modernized the core learning platform with Docker to support fully remote workflows during the pandemic.',
      'Automated YAML-to-React component generation to help non-engineers publish content rapidly.',
      'Led public workshops teaching JavaScript, debugging, testing, and deployment to engineering cohorts.',
    ],
  },
  {
    company: 'Reactime (Open Source)',
    role: 'Co-founder & Software Engineer',
    period: 'Aug 2019 – Dec 2021',
    location: 'New York, NY',
    highlights: [
      'Co-founded Reactime, a real-time React state-visualization devtool nominated for a React Open Source Award.',
      'Built the D3.js node-graph visualizer integrated into Chrome DevTools for live state inspection and time-travel debugging.',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id='experience' className='text-white py-16 md:py-24'>
      <div className='max-w-[1400px] mx-auto px-6 md:px-10 xl:px-20'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-light mb-12 md:mb-16'>
          Experience
        </h2>

        <div className='space-y-12 md:space-y-16'>
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
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
