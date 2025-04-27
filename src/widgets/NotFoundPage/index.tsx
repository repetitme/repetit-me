import React from 'react';

import { useNavigate } from 'react-router';

import notFoundImage from '../../assets/Not-found.png';

import styles from './index.module.scss';
import Button from '../../shared/components/Button';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

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
      <Button
        text="Вернуться на главную страницу"
        variant="purple"
        size="large"
        onClick={handleClick}
        className={styles.button}
      ></Button>
    </div>
  );
};

export default NotFoundPage;
