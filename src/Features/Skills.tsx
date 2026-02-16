'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    icon: '⚛',
    skills: [
      'React',
      'TypeScript',
      'JavaScript',
      'Zustand',
      'TanStack Query',
      'Redux',
      'D3.js',
      'Next.js',
      'Design Systems',
    ],
  },
  {
    title: 'Backend',
    icon: '⚙',
    skills: [
      'Node.js',
      'Express',
      'Python (FastAPI, Pydantic',
      'ASP.NET Core',
      'SQL and NoSQL',
      'REST API',
      'GraphQL',
    ],
  },
  {
    title: 'Architecture',
    icon: '◎',
    skills: [
      'Clean Architecture',
      'CQRS',
      'API Contract Design',
      'Microservices',
      'Feature Flags',
    ],
  },
  {
    title: 'DevOps & Testing',
    icon: '✦',
    skills: [
      'AWS',
      'Azure',
      'Docker',
      'Jest',
      'React Testing Library',
      'MSW',
      'TDD & BDD',
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id='skills' className='text-white py-16 md:py-24'>
      <div className='max-w-[1400px] mx-auto px-6 md:px-10 xl:px-20'>
        <motion.h2
          className='text-3xl md:text-4xl lg:text-5xl font-light mb-12 md:mb-16'
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Technical Skills
        </motion.h2>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className='bg-white/5 rounded-3xl p-6 md:p-8 border border-white/10 hover:border-accent-teal/50 transition-all duration-300 hover:bg-white/[0.07]'
            >
              <div className='text-4xl mb-4'>{category.icon}</div>
              <h3 className='text-xl md:text-2xl font-medium text-white mb-6'>
                {category.title}
              </h3>
              <div className='flex flex-wrap gap-2'>
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className='px-3 py-1.5 bg-white/10 rounded-full text-sm text-white/90 hover:bg-accent-teal/20 hover:text-accent-teal transition-colors duration-200'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
