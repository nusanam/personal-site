'use client';

const projects = [
  {
    title: 'Thyroid-Reproductive Hormone Health Explorer',
    subtitle:
      "Visualizes relationship between thyroid function and women's health",
    description:
      'A node-link visualization showing the cascade from thyroid dysfunction to reproductive impacts, with interactive depth at each node.',
    tech: ['React', 'D3.js', 'Typescript', 'TailwindCSS'],
    achievement: "To be featured on Reproductive Fertility Doctor\'s Podcast",
    link: 'https://thyroid-explorer.vercel.app/',
  },
  {
    title: 'Reactime',
    subtitle: 'Open Source React DevTool',
    description:
      'Chrome DevTools extension for visualizing React state changes in real-time. Nominated for React Open Source Award (2020).',
    tech: ['React', 'D3.js', 'Chrome Extension API', 'TypeScript'],
    achievement: 'Nominated for React Open Source Award 2020',
    link: 'https://github.com/reactime',
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
              className='group bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl p-8 md:p-10 border border-white/10 hover:border-accent-teal/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-accent-teal/10'
            >
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
