import { FC } from 'react';

import Button from '../../../../../shared/ui/button';

import styles from './index.module.scss';

import { IAuthButtonsProps } from './types';

export const AuthButtons: FC<IAuthButtonsProps> = ({
  buttonProps: { authType, code, isValid, handleAuthTypeChange }
}) => {
  let text = '';
  if (authType && code) {
    text = 'Войти';
  } else {
    text = code ? 'Зарегистрироваться' : 'Получить код';
  }

  return (
    <div className={styles.auth__wrapper}>
      <Button size="large" variant="purple" disabled={!isValid} text={text} />
      <div className={styles.auth__text}>
        <p>
          Нажимая «Получить код» вы соглашаетесь с{' '}
          <a href="#" target="_blank">
            политикой конфиденциальности
          </a>{' '}
          и
        </p>
        <a href="#" target="_blank">
          пользовательским соглашением
        </a>
        {!authType && (
          <p className={styles.auth__text__enter}>
            Уже есть аккаунт? <a onClick={handleAuthTypeChange}>Войти</a>
          </p>
        )}
      </div>
    </div>
  );
};
