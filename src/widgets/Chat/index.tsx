import styles from './index.module.scss';

export const Chat: React.FC = () => {
  return (
    <section className={styles.chat}>
      <h2 className={styles.chat__title}>
        Умные алгоритмы подберут&nbsp;
        <span className={styles.accent}>преподавателя</span> под&nbsp;цели
        и&nbsp;стоимость
      </h2>
      <div className={styles.chat__viewport}></div>
    </section>
  );
};

export default Chat;
