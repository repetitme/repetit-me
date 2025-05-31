import { useEffect, useRef, useState } from 'react';

import cn from 'classnames';

import useForm from '../../../shared/hooks/useForm';
import Button from '../../../shared/ui/button';
import AuthInputs from '../inputs';
import { FormTabs, Tab } from '../tabs';

import styles from './index.module.scss';

import { TAuthData, TFormTabs, TInputProps, TLogin } from './types';

enum AuthType {
  LOGIN = 'login',
  REGISTER = 'register'
}

const defaultValues: TAuthData = {
  authType: AuthType.REGISTER,
  role: FormTabs.STUDENT,
  name: '',
  tg: '',
  link: '',
  code: ''
};

const AuthForm: React.FC<TLogin> = ({ mainPageRegister, closeModal }) => {
  const { values, handleChange, setValues } = useForm(defaultValues);
  const [currentTab, setStudentTab] = useState<TFormTabs>(
    mainPageRegister ? FormTabs.TUTOR : FormTabs.STUDENT
  );
  const [authType, setAuthType] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [code, setReceived] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const [inputCount, setInputCount] = useState(0);
  const [formChange, setFormChange] = useState(false);
  const [delayedTab, setDelayedTab] = useState<TFormTabs>(currentTab);

  useEffect(() => {
    if (formRef.current) {
      setInputCount(formRef.current.querySelectorAll('input').length);
    }
  }, [authType, code, delayedTab]);

  // Сброс кода при изменении данных после его получения
  useEffect(() => {
    if (code) {
      setReceived(false);
    }
  }, [values.name, values.tg, values.link]);

  useEffect(() => {
    setValues((prev) => ({
      ...prev,
      authType: authType ? AuthType.LOGIN : AuthType.REGISTER,
      role: currentTab
    }));
  }, [authType, currentTab]);

  const handleValidity = () => {
    setIsValid(!!formRef.current?.checkValidity());
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsValid(false);
    if (code) {
      setValues(defaultValues);
      closeModal?.();
      return;
    }
    // Код получен
    setReceived(true);
  };

  const handleActiveTab = (value: TFormTabs) => {
    setFormChange(true);
    setReceived(false);
    setStudentTab(value);
    setTimeout(() => {
      setFormChange(false);
      setDelayedTab(value);
    }, 500);
  };

  const handleAuthTypeChange = () => {
    setFormChange(true);
    setTimeout(() => {
      setFormChange(false);
      setAuthType(true);
    }, 300);
  };

  const AuthButton = () => {
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

  const inputProps: TInputProps = {
    values,
    handleChange
  };

  return (
    <div className={styles.auth}>
      {!mainPageRegister && (
        <>
          <h2 className={styles.auth__title}>
            {authType ? 'Вход' : 'Регистрация'}
          </h2>
          <Tab currentTab={currentTab} onClick={handleActiveTab} />
        </>
      )}
      <form
        ref={formRef}
        className={cn(styles.auth__form, {
          [styles.auth__form__change]: formChange
        })}
        style={{
          blockSize: `${104 * inputCount + 164 + (authType ? 0 : 42)}px`
        }}
        onChange={handleValidity}
        onSubmit={handleSubmit}
      >
        {/* Имя */}
        {!authType &&
          AuthInputs.name(inputProps, currentTab === FormTabs.TUTOR)}
        {/* Telegram */}
        {AuthInputs.tg(inputProps)}
        {/* Ссылка */}
        {delayedTab === FormTabs.STUDENT &&
          !authType &&
          AuthInputs.link(inputProps)}
        {/* Код */}
        {code && AuthInputs.code(inputProps)}
        <AuthButton />
      </form>
    </div>
  );
};

export default AuthForm;
