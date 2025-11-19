'use client';
import { useState } from 'react';

const HeroSection = () => {
  const [emailTooltip, setEmailTooltip] = useState('Click me to copy!');

  const copyEmail = () => {
    navigator.clipboard.writeText('ruthbaanam[at]gmail[dot]com');
    setEmailTooltip('Copied!');
    setTimeout(() => setEmailTooltip('Click me to copy!'), 2000);
  };
  // Keyframes for floating animations
  const animationStyles = `
    @keyframes float1 {
      0% { transform: translate(0px, 0px) scale(1); }
      50% { transform: translate(-10px, -20px) scale(1.05); }
      100% { transform: translate(0px, 0px) scale(1); }
    }
    .animate-float1 {
      animation: float1 12s ease-in-out infinite;
    }
    @keyframes float2 {
      0% { transform: translate(0px, 0px) scale(1); }
      50% { transform: translate(15px, 5px) scale(1.03); }
      100% { transform: translate(0px, 0px) scale(1); }
    }
    .animate-float2 {
      animation: float2 10s ease-in-out infinite 1s;
    }
    @keyframes float3 {
      0% { transform: translate(0px, 0px) scale(1); }
      50% { transform: translate(-5px, 15px) scale(1.04); }
      100% { transform: translate(0px, 0px) scale(1); }
    }
    .animate-float3 {
      animation: float3 11s ease-in-out infinite 0.5s;
    }
    @keyframes float4 {
      0% { transform: translate(0px, 0px) scale(1); }
      50% { transform: translate(10px, -10px) scale(1.02); }
      100% { transform: translate(0px, 0px) scale(1); }
    }
    .animate-float4 {
      animation: float4 9s ease-in-out infinite 1.5s;
    }
  `;

  return (
    <section className='relative bg-transparent text-white w-full overflow-hidden'>
      <div className='container relative pt-4 lg:pt-7 pb-7 md:pb-24 lg:pb-7'>
        <h1 className='text-4xl md:text-5xl lg:text-[4rem] font-light leading-[1.2] max-w-[900px]'>
          Hi I'm Ruth :)
        </h1>
        <p className='text-xl md:text-2xl lg:text-3xl font-light leading-[1.4] max-w-[900px] mt-8 text-white/80'>
          Senior Fullstack Engineer (7+ YOE) specializing in high performance{' '}
          <span className='underline decoration-2 decoration-accent-teal underline-offset-[6px]'>
            React, TypeScript, C#, ASP.NET Core, EF Core, GraphQL, Node.js, and
            Azure / AWS.
          </span>
        </p>{' '}
        <p className='text-xl md:text-xl lg:text-2xl font-light leading-[1.4] max-w-[900px] mt-8 text-white/80'>
          Strong background in system modernization, microfrontend and
          microservice transformation, API contract design, data visualization,
          data intensive workflows, and complex UI architecture.
        </p>
        <p className='text-xl md:text-xl lg:text-2xl font-light leading-[1.4] max-w-[900px] mt-8 text-white/80'>
          Experienced in translating ambiguous product requirements into
          scalable architecture across frontend, backend, and infrastructure.
        </p>
        <div className='mt-8 flex flex-wrap gap-4 text-base md:text-lg text-white/60'>
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
