import React from 'react';
import arrowUp from '../../../assets/images/arrow_up.svg';

import './styles.module.scss';

const ScrollUp: React.FC = () => {
  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="scroll-up" onClick={handleScrollUp}>
      {arrowUp}
    </div>
  );
};

export default ScrollUp;
