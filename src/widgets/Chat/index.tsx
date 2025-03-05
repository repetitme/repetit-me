import styles from './index.module.scss';

export const Chat = () => {
  return (
    <div className={styles.chat}>
      <h2 className={styles.chat__title}>
        Умные алгоритмы подберут{' '}
        <span className={styles.accent}>преподавателя</span> под цели и
        стоимость
      </h2>
      <div className={styles.chat__viewport}></div>
    </div>
  );
};
