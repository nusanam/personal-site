'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [emailTooltip, setEmailTooltip] = useState('Click me to copy!');

  const copyEmail = () => {
    navigator.clipboard.writeText('ruthbaanam[at]gmail[dot]com');
    setEmailTooltip('Copied!');
    setTimeout(() => setEmailTooltip('Click me to copy!'), 2000);
  };

  return (
    <section className='relative bg-transparent text-white w-full overflow-hidden'>
      <div className='container relative pt-4 lg:pt-8 pb-24 md:pb-32 lg:pb-40'>
        <motion.h1
          className='text-4xl md:text-5xl lg:text-[4rem] font-medium leading-[1.2] max-w-[900px]'
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
        >
          Hi I'm Ruth :)
        </motion.h1>
        <motion.p
          className='text-xl md:text-2xl lg:text-3xl font-light leading-[1.4] max-w-[900px] mt-8 text-white/80'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
        >
          Senior Fullstack Engineer (7+ YOE) specializing in high performance{' '}
          <span className='underline decoration-2 decoration-accent-teal underline-offset-[6px]'>
            React, TypeScript, Node, & Python
          </span>
        </motion.p>
        <motion.p
          className='text-xl md:text-xl lg:text-2xl font-light leading-[1.4] max-w-[900px] mt-8 text-white/80'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
        >
          Co-founded<em> Reactime</em>, a state debugging devtool with
          <em> 2,200+ GitHub stars</em>, nominated for a React Open Source
          Award.
        </motion.p>
        <motion.p
          className='text-xl md:text-xl lg:text-2xl font-light leading-[1.4] max-w-[900px] mt-8 text-white/80'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: 'easeOut' }}
        >
          Currently architecting <em>React </em>and <em>Python </em>/{' '}
          <em>Node</em> services for a greenfield supply chain platform at Premier Inc.
          during a <em>$2.6B acquisition</em>. Previously engineered AI-powered
          clinical trial visualizations at Medidata.
        </motion.p>
        <motion.div
          className='mt-8 flex flex-wrap gap-4 text-base md:text-lg text-white/60'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
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
