import { FC, ReactNode } from 'react';

import styles from './index.module.scss';

type TInnfoBlock = { children: ReactNode; title: string };

const InfoBlock: FC<TInnfoBlock> = ({ title, children }) => (
  <div className={styles.container}>
    <h3 className={styles.container__title}>{title}</h3>
    {children}
  </div>
);
export default InfoBlock;
