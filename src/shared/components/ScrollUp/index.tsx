import React from 'react';

import arrow from '../../../assets/images/arrow_up.svg';

import styles from './index.module.scss';

const ScrollUp: React.FC = () => {
  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.scrollUp} onClick={handleScrollUp}>
      <img src={arrow} alt="Стрелочка в вверх" />
    </div>
  );
};

export default ScrollUp;
