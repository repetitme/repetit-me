import { useEffect, useRef, useState } from 'react';

import useForm from '../../../shared/hooks/useForm';
import Button from '../../../shared/ui/button';
import AuthInputs from '../inputs';

import styles from './index.module.scss';
import AuthButton from '../auth-button';
import AuthSelectRole from '../authSelectRole';

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

const AuthForm: React.FC<TLogin> = ({ login, mainPageRegister }) => {
  const { values, handleChange, setValues } = useForm(defaultValues);
  const [currentTab, setStudentTab] = useState<TFormTabs>(
    mainPageRegister ? FormTabs.TUTOR : FormTabs.STUDENT
  );
  const [isValid, setIsValid] = useState(false);
  const [code, setReceived] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  // Сброс кода при изменении данных после его получения
  useEffect(() => {
    if (code) {
      setReceived(false);
    }
  }, [values.name, values.tg, values.link]);

  useEffect(() => {
    setValues((prev) => ({
      ...prev,
      authType: login ? AuthType.LOGIN : AuthType.REGISTER,
      role: currentTab
    }));
  }, [login, currentTab]);

  const handleValidity = () => {
    setIsValid(!!formRef.current?.checkValidity());
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsValid(false);
    if (code) {
      setValues(defaultValues);
      closeModal();
      // Close modal
      return;
    }
    // Код получен
    setReceived(true);
  };

  const handleActiveTab = (value: TFormTabs) => {
    setStudentTab(value);
    setReceived(false);
  };

  const AuthButton = () => {
    let text = '';
    if (login && code) {
      text = 'Войти';
    } else {
      text = code ? 'Зарегистрироваться' : 'Получить код';
    }

    return (
      <Button size="large" variant="purple" disabled={!isValid} text={text} />
    );
  };

  const inputProps: TInputProps = {
    values,
    handleChange
  };

  return (
    <div className={styles.auth}>
      {!mainPageRegister && (
        <Tab currentTab={currentTab} onClick={handleActiveTab} />
      )}
      <form
        ref={formRef}
        className={styles.auth__form}
        onChange={handleValidity}
        onSubmit={handleSubmit}
      >
        {/* Имя */}
        {!login &&
          AuthInputs.name(
            inputProps,
            currentTab === FormTabs.TUTOR ? 'notRequired' : ''
          )}
        {/* Telegram */}
        {AuthInputs.tg(inputProps)}
        {/* Ссылка */}
        {currentTab === FormTabs.STUDENT &&
          !login &&
          AuthInputs.link(inputProps)}{' '}
        {/* Код */}
        {code && AuthInputs.code(inputProps)}
        <AuthButton />
      </form>
    </div>
  );
};

export default AuthForm;
