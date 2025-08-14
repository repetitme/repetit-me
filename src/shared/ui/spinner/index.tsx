import { FC } from 'react';

import styles from './index.module.scss';

const Spinner: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__loader} />
    </div>
  );
};
export default Spinner;
