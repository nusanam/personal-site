'use client';

import Image from 'next/image';

const projects = [
  {
    title: 'Thyroid Reproductive Hormone Health Explorer',
    subtitle:
      "Uses evidence-based research to visualize hypothyroid effects on women's health",
    description:
      'A thyroid health exploration tool showing the cascade from thyroid dysfunction to reproductive impacts with interactive depth at each node.',
    tech: ['React', 'D3.js', 'Typescript', 'TailwindCSS'],
    achievement: "To be featured on Reproductive Fertility Doctor\'s Podcast",
    link: 'https://thyroid-explorer.vercel.app/',
    image: '/assets/thyroid.png',
  },
  {
    title: 'Reactime',
    subtitle: 'Open Source React DevTool',
    description:
      'Chrome DevTools extension for visualizing React state changes in real-time. Nominated for React Open Source Award (2020).',
    tech: ['React', 'D3.js', 'Chrome Extension API', 'TypeScript'],
    achievement: 'Nominated for React Open Source Award 2020',
    link: 'https://github.com/open-source-labs/Reactime',
    image: '/assets/reactimev26.png',
  },
];

const ProjectsHighlight = () => {
  return (
    <section id='projects' className='text-white py-16 md:py-24'>
      <div className='max-w-[1400px] mx-auto px-6 md:px-10 xl:px-20'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-light mb-12 md:mb-16'>
          Featured Projects
        </h2>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='group relative bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl p-8 md:p-10 border border-white/10 hover:border-accent-teal/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent-teal/10 overflow-hidden'
            >
              {/* Image overlay on hover */}
              {project.image && (
                <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10'>
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    className='object-cover'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30' />
                  <div className='absolute bottom-6 left-8 right-8'>
                    <p className='text-white text-lg font-medium mb-2'>{project.title}</p>
                    <a
                      href={project.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center text-accent-teal hover:text-white transition-colors duration-200 underline underline-offset-4'
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              )}

              <div className='mb-4'>
                <h3 className='text-2xl md:text-3xl font-medium text-white mb-2 group-hover:text-accent-teal transition-colors duration-300'>
                  {project.title}
                </h3>
                <p className='text-base md:text-lg text-accent-purple font-medium'>
                  {project.subtitle}
                </p>
              </div>

              <p className='text-base md:text-lg text-white/70 leading-relaxed mb-6'>
                {project.description}
              </p>

              {project.achievement && (
                <div className='mb-6 px-4 py-2 bg-accent-teal/10 border border-accent-teal/30 rounded-xl inline-block'>
                  <p className='text-sm text-accent-teal font-medium'>
                    ✨ {project.achievement}
                  </p>
                </div>
              )}

              <div className='flex flex-wrap gap-2'>
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className='px-3 py-1.5 bg-white/10 rounded-full text-sm text-white/80 border border-white/20'
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mt-6 inline-flex items-center text-accent-teal hover:text-white transition-colors duration-200 underline underline-offset-4'
                >
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsHighlight;
