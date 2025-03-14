import { FC } from 'react';
import styles from './style.module.scss';

const SignIn: FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>
        Вы&nbsp;
        <span className={styles.container__title_gradient}>репетитор</span>?
      </h1>
      <p className={styles.container__subtitle}>
        Тогда заполняйте анкету и получайте заявки <br />
        на репетиторство прямо в Telegram
      </p>
      <div className={styles.container__form}></div>
    </div>
  );
};

export default SignIn;
