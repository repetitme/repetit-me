import { FC } from 'react';

import styles from './index.module.scss';

const Loader: FC = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loader__spinner} />
    </div>
  );
};

export default Loader;
