import React from 'react';
import { Link } from 'react-router';
import notFoundImage from '../../assets/Not-found.png';
import styles from './index.module.scss';
import Button from '../button'

const NotFoundPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Страница не найдена</h1>
      <p className={styles.text}>
        Извините, но страница, которую вы ищете, не существует
      </p>
      <img
        src={notFoundImage}
        alt="Ошибка 404 - Страница не найдена"
        className={styles.image}
      />
     
      <Link to="/">
        <Button text='Вернуться на главную страницу' variant='purple'></Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
