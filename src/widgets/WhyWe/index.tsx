import styles from './index.module.scss';

export const WhyWe: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Почему <span className={styles.accent}>мы</span>?
      </h2>
      <ul className={styles.list}>
        <li className={styles.list__item}>
          <div className={styles.circle__container}>
            <div className={styles.circle}>01</div>
          </div>
          <div className={styles.content}>
            <h3 className={styles.content__title}>Понятный интерфейс</h3>
            <p className={styles.content__txt}>Любой пользователь приложения может одновременно быть как <a href="#" className={styles.content__link}>учеником</a>, так и <a href="#" className={styles.content__link}>преподавателем</a>.</p>
          </div>
          <div className={styles.elipse}>
          <img src="image1.jpg" alt="Описание изображения 1" />
          </div>
            
        </li>
        
      </ul>
    </div>
  );
};
