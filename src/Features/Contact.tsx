'use client';

import { useState } from 'react';

const ContactSection = () => {
  const [emailTooltip, setEmailTooltip] = useState('Click me to copy!');

  const copyEmail = () => {
    navigator.clipboard.writeText('ruthbaanam[at]gmail[dot]com');
    setEmailTooltip('Copied!');
    setTimeout(() => setEmailTooltip('Click me to copy!'), 2000);
  };

  return (
    <section
      id='contact'
      className='bg-gradient-to-br from-accent-purple/20 to-accent-teal/20 text-white py-20 md:py-32'
    >
      <div className='max-w-[1400px] mx-auto px-6 md:px-10 xl:px-20 text-center'>
        <p className='text-xl md:text-2xl font-light text-white/80 max-w-[800px] mx-auto mb-12'>
          I'm deeply passionate about preventative health, system architecture,
          and pixel perfect UI. I'm open to remote-only opportunities.
        </p>

        <div className='flex flex-col sm:flex-row items-center justify-center gap-6'>
          <div className='relative group'>
            <button
              onClick={copyEmail}
              className='px-8 py-4 bg-white text-black rounded-full font-medium text-lg hover:bg-accent-teal hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-teal/30 cursor-pointer'
            >
              Email Me
            </button>
            <span className='absolute left-1/2 -translate-x-1/2 -top-10 bg-white text-black text-sm px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none'>
              {emailTooltip}
            </span>
          </div>
          <a
            target='_blank'
            rel='noopener noreferrer'
            className='group px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-medium text-lg hover:bg-white hover:text-black transition-all duration-300 hover:scale-105'
            href='https://ruth-anam-fullstack-resume.s3.us-east-2.amazonaws.com/Ruth+Anam_resume_25.pdf'
          >
            Fullstack Resume
          </a>
          <a
            href='https://linkedin.com/in/ruthanam'
            target='_blank'
            rel='noopener noreferrer'
            className='group px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-medium text-lg hover:bg-white hover:text-black transition-all duration-300 hover:scale-105'
          >
            LinkedIn Profile
          </a>
        </div>

        <div className='mt-16 pt-8 border-t border-white/20'></div>
      </div>
    </section>
  );
};

export default ContactSection;
