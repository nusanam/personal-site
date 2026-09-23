'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'AI systems',
    icon: '◈',
    skills: [
      'LLM orchestration',
      'Tool-using agents',
      'Prompt & schema design',
      'RAG (LangChain)',
      'Evals & guardrails',
      'Human-in-the-loop design',
      'PHI/PII minimization',
    ],
  },
  {
    title: 'Backend',
    icon: '⚙',
    skills: [
      'Python (Django, FastAPI)',
      'Node.js',
      'GraphQL',
      'PostgreSQL',
      'Celery',
      'REST APIs',
      'API contract design',
    ],
  },
  {
    title: 'Frontend',
    icon: '⚛',
    skills: [
      'React',
      'TypeScript',
      'Next.js',
      'D3.js',
      'TanStack Query',
      'Zustand',
      'Design systems',
    ],
  },
  {
    title: 'Data & infrastructure',
    icon: '✦',
    skills: [
      'AWS',
      'Docker',
      'Snowflake & dbt',
      'LaunchDarkly',
      'GitHub Actions',
      'Tracing & observability',
    ],
  },
  {
    title: 'Testing',
    icon: '◎',
    skills: ['Jest', 'React Testing Library', 'MSW', 'Pytest', 'TDD & BDD'],
  },
  {
    title: 'Picking up right now',
    icon: '↗',
    skills: ['Go', 'OpenTelemetry', 'Kubernetes'],
  },
];

const SkillsSection = () => {
  return (
    <section id='skills' className='text-white py-16 md:py-24'>
      <div className='max-w-[1400px] mx-auto px-6 md:px-10 xl:px-20'>
        <motion.h2
          className='text-3xl md:text-4xl lg:text-5xl font-light mb-6'
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          What I work with
        </motion.h2>

        <motion.p
          className='text-lg md:text-xl font-light text-white/60 max-w-[700px] mb-12 md:mb-16'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        >
          {
            'Roughly in the order I reach for them. The last group is honest about where I am still learning.'
          }
        </motion.p>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10'
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
