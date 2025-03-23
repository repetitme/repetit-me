import { FC } from 'react';
import styles from './style.module.scss';

const Recruiting: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__recruiting}>
        <h2 className={styles.container__recruiting_title}>
          Мы найдем
          <br />
          учеников за вас
        </h2>
        <p className={styles.container__recruiting_subtitle}>
          И также дадим возможность найти их самостоятельно
        </p>
        <div className={styles.container__recruiting_disciplines}>
          <ul className={styles.container__recruiting_disciplines_width}>
            <li className={styles.container__recruiting_discipline}>
              Молодой преподаватель
            </li>
            <li className={styles.container__recruiting_discipline}>
              Математика
            </li>
            <li className={styles.container__recruiting_discipline}>ОГЭ</li>
            <li className={styles.container__recruiting_discipline}>
              Линейные уравнения
            </li>
            <li className={styles.container__recruiting_discipline}>
              Нужна еще помощь с домашкой
            </li>
            <li className={styles.container__recruiting_discipline}>
              Гибкий график
            </li>
            <li className={styles.container__recruiting_discipline}>
              Готов много заниматься
            </li>
            <li className={styles.container__recruiting_discipline}>
              Хромает геометрия
            </li>
            <li className={styles.container__recruiting_discipline}>
              Люблю пошутить
            </li>
            <li className={styles.container__recruiting_discipline}>
              Подготовка к экзамену
            </li>
            <li className={styles.container__recruiting_discipline}>
              Цена не так важна
            </li>
            <li className={styles.container__recruiting_discipline}>Алгебра</li>
          </ul>
          <ul className={styles.container__recruiting_disciplines_center}>
            <li className={styles.container__recruiting_discipline}>
              Геометрия
            </li>
            <li className={styles.container__recruiting_discipline}>
              Еще нужна информатика
            </li>
            <li className={styles.container__recruiting_discipline}>
              Python на начальном уровне
            </li>
            <li className={styles.container__recruiting_discipline}>ВПР</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Recruiting;
