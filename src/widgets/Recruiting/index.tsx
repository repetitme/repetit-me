import { FC } from 'react';
import styles from './style.module.scss';
import classNames from 'classnames';

const Recruiting: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__recruiting}>
        <h1 className={classNames(styles['container__recruiting-title'])}>
          Мы{' '}
          <a href="###" className={classNames(styles['link'])}>
            найдем
          </a>
          <br />
          учеников{' '}
          <a href="###" className={classNames(styles['link'])}>
            за вас
          </a>
        </h1>
        <p className={classNames(styles['container__recruiting-subtitle'])}>
          И также дадим возможность найти&nbsp;
          <br /> их самостоятельно
        </p>
        <div
          className={classNames(styles['container__recruiting-disciplines'])}
        >
          <ul
            className={classNames(
              styles['container__recruiting-disciplines-width']
            )}
          >
            <li
              className={classNames(styles['container__recruiting-discipline'])}
            >
              Молодой преподаватель
            </li>
            <li
              className={classNames(styles['container__recruiting-discipline'])}
            >
              Математика
            </li>
            <li
              className={classNames(styles['container__recruiting-discipline'])}
            >
              ОГЭ
            </li>
            <li
              className={classNames(styles['container__recruiting-discipline'])}
            >
              Линейные уравнения
            </li>
            <li
              className={classNames(styles['container__recruiting-discipline'])}
            >
              Нужна еще помощь с домашкой
            </li>
            <li
              className={classNames(styles['container__recruiting-discipline'])}
            >
              Гибкий график
            </li>
            <li
              className={classNames(styles['container__recruiting-discipline'])}
            >
              Готов много заниматься
            </li>
            <li
              className={classNames(styles['container__recruiting-discipline'])}
            >
              Хромает геометрия
            </li>
            <li
              className={classNames(styles['container__recruiting-discipline'])}
            >
              Люблю пошутить
            </li>
            <li
              className={classNames(styles['container__recruiting-discipline'])}
            >
              Подготовка к экзамену
            </li>
            <li
              className={classNames(styles['container__recruiting-discipline'])}
            >
              Цена не так важна
            </li>
            <li
              className={classNames(styles['container__recruiting-discipline'])}
            >
              Алгебра
            </li>
          </ul>
          <ul
            className={classNames(
              styles['container__recruiting-disciplines-center']
            )}
          >
            <li
              className={classNames(styles['container__recruiting-discipline'])}
            >
              Геометрия
            </li>
            <li
              className={classNames(styles['container__recruiting-discipline'])}
            >
              Еще нужна информатика
            </li>
            <li
              className={classNames(styles['container__recruiting-discipline'])}
            >
              Python на начальном уровне
            </li>
            <li
              className={classNames(styles['container__recruiting-discipline'])}
            >
              ВПР
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Recruiting;
