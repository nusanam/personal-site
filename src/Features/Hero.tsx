'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: 'blur(8px)'
  },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      delay: delay,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  }),
};

const HeroSection = () => {
  const [emailTooltip, setEmailTooltip] = useState('Click me to copy!');

  const copyEmail = () => {
    navigator.clipboard.writeText('ruthbaanam[at]gmail[dot]com');
    setEmailTooltip('Copied!');
    setTimeout(() => setEmailTooltip('Click me to copy!'), 2000);
  };

  return (
    <section className='relative bg-transparent text-white w-full overflow-hidden'>
      <div className='container relative pt-4 lg:pt-8 pb-7 md:pb-24 lg:pb-8'>
        <motion.h1
          className='text-4xl md:text-5xl lg:text-[4rem] font-light leading-[1.2] max-w-[900px]'
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          custom={0.1}
        >
          Hi I'm Ruth :)
        </motion.h1>
        <motion.p
          className='text-xl md:text-2xl lg:text-3xl font-light leading-[1.4] max-w-[900px] mt-8 text-white/80'
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          custom={0.25}
        >
          Senior Fullstack Engineer (7+ YOE) specializing in high performance{' '}
          <span className='underline decoration-2 decoration-accent-teal underline-offset-[6px]'>
            React, TypeScript, .NET
          </span>
        </motion.p>
        <motion.p
          className='text-xl md:text-xl lg:text-2xl font-light leading-[1.4] max-w-[900px] mt-8 text-white/80'
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          custom={0.4}
        >
          Co-founded Reactime, a React DevTools project with 2,200+ GitHub
          stars, nominated for a React Open Source Award by the Meta React team.
        </motion.p>
        <motion.p
          className='text-xl md:text-xl lg:text-2xl font-light leading-[1.4] max-w-[900px] mt-8 text-white/80'
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          custom={0.55}
        >
          Currently building supply chain software at Premier Inc. during a
          $2.6B acquisition. Previously built AI-powered clinical trial
          visualizations at Medidata.
        </motion.p>
        <motion.div
          className='mt-8 flex flex-wrap gap-4 text-base md:text-lg text-white/60'
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          custom={0.7}
        >
          <span>Austin, TX</span>
          <span>•</span>
          <button
            onClick={copyEmail}
            style={{ cursor: 'pointer' }}
            className='relative group'
          >
            Email Me
            <span className='absolute left-1/2 -translate-x-1/2 -top-10 bg-white text-black text-sm px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none'>
              {emailTooltip}
            </span>
          </button>
          <span>•</span>
          <a
            href='https://linkedin.com/in/ruthanam'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-accent-teal transition-colors underline decoration-1 underline-offset-4'
          >
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
