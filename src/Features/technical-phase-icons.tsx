'use client';

const ScatteredDotsIcon = () => {
  const dotPositions = [
    [20, 40],
    [30, 30],
    [40, 25],
    [50, 22],
    [60, 25],
    [70, 30],
    [80, 40],
    [25, 55],
    [35, 45],
    [45, 40],
    [55, 40],
    [65, 45],
    [75, 55],
    [35, 70],
    [45, 65],
    [55, 65],
    [65, 70],
    [45, 85],
    [55, 85],
  ];

  return (
    <svg viewBox='0 0 100 100' className='w-full h-full' overflow='visible'>
      <defs>
        <radialGradient id='grad-dots'>
          <stop
            offset='0%'
            style={{ stopColor: 'var(--color-gradient-orange-light)' }}
          />
          <stop
            offset='100%'
            style={{ stopColor: 'var(--color-gradient-coral)' }}
          />
        </radialGradient>
      </defs>
      <g>
        {dotPositions.map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r='4'
            fill='url(#grad-dots)'
            style={{
              animation: `float ${2.5 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2.5}s`,
            }}
          />
        ))}
      </g>
    </svg>
  );
};

const RadiatingLinesIcon = () => {
  const numLines = 36;
  return (
    <svg viewBox='0 0 100 100' className='w-full h-full' overflow='visible'>
      <defs>
        <linearGradient id='grad-lines' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop
            offset='0%'
            style={{ stopColor: 'var(--color-gradient-pink-bright)' }}
          />
          <stop
            offset='100%'
            style={{ stopColor: 'var(--color-gradient-pink)' }}
          />
        </linearGradient>
      </defs>
      <g
        style={{
          animation: 'rotatePulse 15s linear infinite',
          transformOrigin: '50% 50%',
        }}
      >
        {Array.from({ length: numLines }).map((_, i) => (
          <line
            key={i}
            x1='50'
            y1='50'
            x2='50'
            y2='5'
            stroke='url(#grad-lines)'
            strokeWidth='1.5'
            style={{
              transform: `rotate(${i * (360 / numLines)}deg)`,
              transformOrigin: '50% 50%',
            }}
          />
        ))}
      </g>
    </svg>
  );
};

const WaveCurveIcon = () => {
  return (
    <svg viewBox='0 0 100 100' className='w-full h-full' overflow='hidden'>
      <defs>
        <linearGradient id='grad-wave' x1='0%' y1='0%' x2='0%' y2='100%'>
          <stop
            offset='0%'
            style={{ stopColor: 'var(--color-gradient-blue)' }}
          />
          <stop
            offset='100%'
            style={{ stopColor: 'var(--color-gradient-indigo)' }}
          />
        </linearGradient>
      </defs>
      <path
        fill='url(#grad-wave)'
        style={{ animation: 'wave 5s ease-in-out infinite' }}
        d='M0,100 C20,100 30,50 50,50 C70,50 80,100 100,100 Z'
      />
    </svg>
  );
};

const StarBurstIcon = () => {
  const numLines = 8;
  return (
    <svg viewBox='0 0 100 100' className='w-full h-full' overflow='visible'>
      <defs>
        <linearGradient id='grad-star' gradientTransform='rotate(90)'>
          <stop
            offset='0%'
            style={{ stopColor: 'var(--color-gradient-cyan)' }}
          />
          <stop
            offset='100%'
            style={{ stopColor: 'var(--color-gradient-teal)' }}
          />
        </linearGradient>
      </defs>
      <g
        style={{
          animation: 'twinkle 4s ease-in-out infinite',
          transformOrigin: '50% 50%',
        }}
      >
        {Array.from({ length: numLines }).map((_, i) => (
          <line
            key={i}
            x1='50'
            y1='50'
            x2='50'
            y2='5'
            stroke='url(#grad-star)'
            strokeWidth='2'
            style={{
              transform: `rotate(${i * (360 / numLines)}deg)`,
              transformOrigin: '50% 50%',
            }}
          />
        ))}
      </g>
    </svg>
  );
};

type TechnicalPhaseIconType = 'dots' | 'lines' | 'wave' | 'star';

interface TechnicalPhaseIconProps {
  type: TechnicalPhaseIconType;
}

export default function TechnicalPhaseIcon({ type }: TechnicalPhaseIconProps) {
  const renderIcon = () => {
    switch (type) {
      case 'dots':
        return <ScatteredDotsIcon />;
      case 'lines':
        return <RadiatingLinesIcon />;
      case 'wave':
        return <WaveCurveIcon />;
      case 'star':
        return <StarBurstIcon />;
      default:
        return null;
    }
  };

  return (
    <div className='w-[150px] h-[150px] md:w-[200px] md:h-[200px] mx-auto mb-8 bg-transparent flex items-center justify-center'>
      <style>
        {`
        @keyframes float {
            0% { transform: translateY(0px); opacity: 0.8; }
            50% { transform: translateY(-6px); opacity: 1; }
            100% { transform: translateY(0px); opacity: 0.8; }
        }
        @keyframes rotatePulse {
            0% { transform: scale(0.95) rotate(0deg); }
            50% { transform: scale(1.05) rotate(180deg); }
            100% { transform: scale(0.95) rotate(360deg); }
        }
        @keyframes wave {
            0% { d: path("M0,100 C20,100 30,50 50,50 C70,50 80,100 100,100 Z"); }
            50% { d: path("M0,100 C20,100 40,20 50,20 C60,20 80,100 100,100 Z"); }
            100% { d: path("M0,100 C20,100 30,50 50,50 C70,50 80,100 100,100 Z"); }
        }
        @keyframes twinkle {
            0%, 100% { opacity: 0.7; transform: scale(0.98) rotate(0deg); }
            50% { opacity: 1; transform: scale(1.02) rotate(4deg); }
        }
    `}
      </style>
      {renderIcon()}
    </div>
  );
}
