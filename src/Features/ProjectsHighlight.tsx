'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

type Project = {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  achievement?: string;
  link?: string;
  linkLabel?: string;
  repoLink?: string;
  image?: string;
  comingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: 'Drydock',
    subtitle: 'An agent that migrates code, where the test suite decides',
    description:
      'Point it at a mechanical migration and it works one file at a time: propose a replacement, run that file’s tests, keep the change if they pass, feed the failure back if they do not, then revert and flag the file for a human. The agent never reports its own success. Writes and commands go through a policy engine with separate read and write allowlists and a budget on steps, tokens, dollars and wall clock.',
    tech: ['Go', 'Anthropic API', 'OpenTelemetry', 'JavaScript'],
    achievement:
      'The demo page replays a real run and lets you edit any file and run its actual tests in your browser',
    link: 'https://nusanam.com/drydock',
    linkLabel: 'Try the live demo',
    repoLink: 'https://github.com/nusanam/drydock',
    image: '/assets/drydock.png',
  },
  {
    title: 'Snowline',
    subtitle: 'A wallet-side project on Avalanche',
    description:
      'In progress. Core wallet backend work on Avalanche, written up here once the first milestone is shippable.',
    tech: ['Avalanche', 'TypeScript', 'Node.js'],
    comingSoon: true,
  },
  {
    title: 'Thyroid Reproductive Hormone Health Explorer',
    subtitle:
      "Visualizing what the research says about hypothyroidism and women's health",
    description:
      'An interactive walk through the cascade from thyroid dysfunction to reproductive effects, where each node opens into the evidence behind it.',
    tech: ['React', 'D3.js', 'Python', 'TypeScript', 'TailwindCSS'],
    achievement: "To be featured on a reproductive fertility doctor's podcast",
    link: 'https://thyroid-explorer.vercel.app/',
    image: '/assets/thyroid.png',
  },
  {
    title: 'Reactime',
    subtitle: 'Open source React devtool',
    description:
      'A Chrome DevTools extension for time travel debugging of React state. Co-founded it in 2019 and it has picked up 2,200+ stars since.',
    tech: ['React', 'D3.js', 'Chrome Extension API', 'TypeScript'],
    achievement: 'Nominated for a React Open Source Award in 2020',
    link: 'https://github.com/open-source-labs/Reactime',
    image: '/assets/reactimev26.png',
  },
];

const ProjectsHighlight = () => {
  return (
    <section id='projects' className='text-white py-16 md:py-24'>
      <div className='max-w-[1400px] mx-auto px-6 md:px-10 xl:px-20'>
        <motion.h2
          className='text-3xl md:text-4xl lg:text-5xl font-light mb-12 md:mb-16'
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Things I have built
        </motion.h2>

        <motion.div
          className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
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
                    <p className='text-white text-lg font-medium mb-2'>
                      {project.title}
                    </p>
                    <a
                      href={project.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center text-accent-teal hover:text-white transition-colors duration-200 underline underline-offset-4'
                    >
                      View project →
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

              <div className='mt-6 flex flex-wrap items-center gap-6'>
                {project.comingSoon && (
                  <span className='inline-flex items-center px-3 py-1.5 bg-white/5 border border-white/20 rounded-full text-sm text-white/50'>
                    Coming soon
                  </span>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center text-accent-teal hover:text-white transition-colors duration-200 underline underline-offset-4'
                  >
                    {project.linkLabel ?? 'View project'} →
                  </a>
                )}
                {project.repoLink && (
                  <a
                    href={project.repoLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center text-white/60 hover:text-white transition-colors duration-200 underline underline-offset-4'
                  >
                    Source →
                  </a>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsHighlight;
