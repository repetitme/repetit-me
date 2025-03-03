import React from 'react';

interface PlusIconSwitcherProps {
  isOpen: boolean;
}

const PlusIconSwitcher: React.FC<PlusIconSwitcherProps> = ({ isOpen }) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="horizontal"
        d="M0 12.4444H28V15.5556H0V12.4444Z"
        fill="url(#paint0_linear)"
        style={{
          opacity: 1,
          transform: isOpen ? 'scale(0)' : 'scale(1)',
          transformOrigin: 'center',
          transition: 'opacity 0.3s ease, transform 0.3s ease'
        }}
      />
      <path
        className="vertical"
        d="M12.4444 0V28H15.5556V0H12.4444Z"
        fill="url(#paint0_linear)"
        style={{
          transform: isOpen ? 'rotate(-90deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease',
          transformOrigin: 'center'
        }}
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="26.0631"
          y1="27.9031"
          x2="-11.4336"
          y2="15.0921"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3DC5FF" />
          <stop offset="0.22" stopColor="#4558FF" />
          <stop offset="0.5" stopColor="#865BFF" />
          <stop offset="0.76" stopColor="#FF71F9" />
          <stop offset="1" stopColor="#FFAA47" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default PlusIconSwitcher;
