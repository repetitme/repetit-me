import { FC } from 'react';

import Button from '../../../../../shared/ui/button';

import styles from './index.module.scss';

export interface IAuthButtonsProps {
  authType: boolean;
  code: boolean;
  isValid: boolean;
  handleAuthTypeChange(): void;
}

export const AuthButtons: FC<IAuthButtonsProps> = ({
  authType,
  code,
  isValid,
  handleAuthTypeChange
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
          Нажимая «Получить код», вы соглашаетесь с{' '}
          <a
            href="https://teletype.in/@repetitme/politica_obrabotki_personalnih_dannysh"
            target="_blank"
            rel="noopener noreferrer"
          >
            политикой конфиденциальности
          </a>{' '}
          и
        </p>
        <a
          href="https://teletype.in/@repetitme/polzovatelskoe_soglashenie"
          target="_blank"
          rel="noopener noreferrer"
        >
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
