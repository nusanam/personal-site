'use client';
import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const TITLE = 'Hi, I’m Ruth :)';
const TYPE_MS = 65;

const intro = [
  'Built autonomous voice agent that calls offices to chase documentation to bill home medical equipment orders + AI fax intake pipeline at Tomorrow Health.',
  'Prior to that: a RAG workflow at Premier, clinical trial visualizations at Medidata, and Reactime, an open source React devtool I co-founded that has picked up 2,200+ GitHub stars.',
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.45, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, x: -48 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: 'easeOut' as const },
  },
};

const HeroSection = () => {
  const [emailTooltip, setEmailTooltip] = useState('Click me to copy!');
  const [typed, setTyped] = useState('');
  const [typingDone, setTypingDone] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      setTyped(TITLE);
      setTypingDone(true);
      return;
    }
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setTyped(TITLE.slice(0, i));
      if (i >= TITLE.length) {
        window.clearInterval(id);
        setTypingDone(true);
      }
    }, TYPE_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  const copyEmail = () => {
    navigator.clipboard.writeText('ruthbaanam[at]gmail[dot]com');
    setEmailTooltip('Copied!');
    setTimeout(() => setEmailTooltip('Click me to copy!'), 2000);
  };

  return (
    <section className='relative bg-transparent text-white w-full overflow-hidden'>
      <div className='container relative pt-4 lg:pt-8 pb-24 md:pb-32 lg:pb-40'>
        <h1 className='text-4xl md:text-5xl lg:text-[4rem] font-medium leading-[1.2] max-w-[900px] min-h-[1.2em]'>
          {/* Screen readers get the finished line, not one character at a time. */}
          <span className='sr-only'>{TITLE}</span>
          <span aria-hidden='true'>
            {typed}
            <span
              className={`inline-block w-[0.06em] translate-y-[0.08em] self-stretch bg-accent-teal ${
                typingDone ? 'opacity-0' : 'animate-pulse'
              } transition-opacity duration-500`}
              style={{ height: '1em' }}
            />
          </span>
        </h1>

        <motion.div
          variants={container}
          initial='hidden'
          animate={typingDone ? 'show' : 'hidden'}
        >
          {intro.map((paragraph, index) => (
            <motion.p
              key={index}
              variants={item}
              className={
                index === 0
                  ? 'text-xl md:text-2xl lg:text-3xl font-light leading-[1.4] max-w-[900px] mt-8 text-white/80'
                  : 'text-lg md:text-xl font-light leading-[1.55] max-w-[900px] mt-6 text-white/70'
              }
            >
              {paragraph}
            </motion.p>
          ))}

          <motion.div
            variants={item}
            className='mt-10 flex flex-wrap gap-4 text-base md:text-lg text-white/60'
          >
            <button
              onClick={copyEmail}
              style={{ cursor: 'pointer' }}
              className='relative group'
            >
              Email me
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
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
