import { FC } from 'react';

import styles from './index.module.scss';

interface LoaderProps {
  className?: string;
}

const Loader: FC<LoaderProps> = ({ className = '' }) => {
  return (
    <div className={styles.loader + ' ' + className}>
      <div className={styles.loader__spinner} />
    </div>
  );
};

export default Loader;
