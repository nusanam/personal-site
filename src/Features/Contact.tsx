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
          I'm deeply passionate about preventative health, system architecture, and pixel perfect UI. I'm open to remote-only opportunities.
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
            href='https://ruth-anam-fullstack-resume.s3.us-east-2.amazonaws.com/Ruth%20Anam_resume_25.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAYYLBQDJCITITBDUZ%2F20251119%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20251119T200905Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLWVhc3QtMiJHMEUCIBJFQnWInRPqZiGjcATcBge8X5Q%2B9EIqMufGA7mL5L%2BFAiEAgCZYIsH3PNJevqvB3uta5NCAoCanwlNBr8dQ2luGUZgq3wII5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAEGgw2MDIwMzY3NzEzOTYiDNNdX9SEPW1dqXJMaSqzAoAWUTtS2aCXaXnO%2B5wfL7UqK5b4gFPhid%2FsGK8TJPTmv16IDnUotMFveDCpCmD%2BUeIfQTBLu1PWS%2F0abcdwpVoZp6dvHsBFfc%2FWDGeRJaHlTYL8liMJrt7g7lu%2BvDFSTN6Hvdoxgz6DEETBJEJH4mN23paM1xNm8YMzOT9brwWVuKemi6%2BP0S7D3NkRzck6a946%2BZ5hTGlZiRT9FczbFWrkSICE7%2FQ5wRIm9LmZgWnxTi4cLkURscp6j1w0tTkDTGgYXeIp9WH1aDNEBaqTWbn3X1aRqhyOqajiX8dka0oVddQ8enyMiZuHHM7RLfdIlpyYhdSHupy7IUphrmpe%2BzFhPixk6d4gOsk7shIa2Grt73HOOVaG2OwRYVnMj7btFZBPGE4Xc2wSoBAY5t%2FFYu0A5qkwksX4yAY6rQKU%2Fpry2s3kZpryMQp%2BXXEHurESdNzElYdyulKtWwdqR7uXZ03lkEcekEvsyvL1khvCM%2BzrwWmPfrJ7HduAqOliio9ZV0iahToDzfZgAuC3ld0W04xPj56w2grhbjVIgN2O8FO0g3lYCakrYdfuYidpNFA4w6PzSm%2BUYaIJNjdulMvsjaPtA3haALMJiS1us%2FyX0cv7nAx18DtBqyq8ScNp18%2FSupIKE%2BlCzcArhGfgfSSSijpLmPeDET1Np5VFx6RzXXvU2RfFyYRjOnN8UPKZAzyuXf8UEE1t67Lm7p6WeUA%2FA4%2FVNcWgqufvwoNMaZIe%2BKCqe%2BtruA6%2FwDdinMRo8pwXYC97teQ4NA62KP%2FqEbG3bQNL7%2FnJ3gpW1Ej29nUcKJfYHC0fpDNJoqr6&X-Amz-Signature=762110e83f00905806675ea9cb7971a8928f00a19f8f9d52f13b03e09e967073&X-Amz-SignedHeaders=host&response-content-disposition=inline'
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
