import { FC, ReactNode} from 'react';

import styles from './style.module.scss';
type TTutorFormBlock = { children: ReactNode; }

  const TutorFormBlock: FC<TTutorFormBlock> = ({children}) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.container__title}>
        Вы&nbsp;
        <span className={styles.container__title_gradient}>репетитор</span>?
      </h2>
      <p className={styles.container__subtitle}>
        Тогда заполняйте анкету и получайте заявки <br />
        на репетиторство прямо в Telegram
      </p>
      <div className={styles.container__form}> {children} </div> 
    </div>
  );
};

export default TutorFormBlock;
