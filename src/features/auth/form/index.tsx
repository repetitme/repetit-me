import { useEffect, useRef, useState } from 'react';

import Button from '../../../shared/button';
import useForm from '../../../shared/hooks/useForm';
import AuthInputs from '../inputs';
import { FormTabs, Tab } from '../tabs';

import styles from './index.module.scss';

import { TAuthData, TFormTabs, TInputProps, TLogin } from './types';

const AuthForm: React.FC<TLogin> = ({ login }) => {
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
  const { values, handleChange, setValues } = useForm(defaultValues);
  const [currentTab, setStudentTab] = useState<TFormTabs>(FormTabs.STUDENT);
  const [isValid, setIsValid] = useState(false);
  const [code, setReceived] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  // Сброс кода при изменении данных после его получения
  useEffect(() => {
    if (code) {
      setReceived(false);
    }
  }, [values.name, values.tg, values.link]);

  const handleValidity = () => {
    if (formRef.current?.checkValidity()) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Код получен
    setReceived(true);
    setIsValid(false);
  };

  const handleActiveTab = (value: TFormTabs) => {
    setStudentTab(value);
    setValues({
      ...values,
      authType: login ? AuthType.LOGIN : AuthType.REGISTER,
      role: value === FormTabs.STUDENT ? FormTabs.STUDENT : FormTabs.TUTOR
    });
    setReceived(false);
  };

  const handleSuccess = () => {
    console.log(
      `Success! Роль: ${values.role}, Имя: ${values.name}, Tg: ${values.tg}, Ссылка: ${values.link}, Код: ${values.code}.`
    );
    setIsValid(false);
    setValues(defaultValues);
    // Close modal
  };

  const AuthButton = () => {
    let text = '';
    if (login && code) {
      text = 'Войти';
    } else {
      text = code ? 'Зарегистрироваться' : 'Получить код';
    }

    return (
      <Button
        onClick={code ? handleSuccess : undefined}
        size="large"
        variant="purple"
        disabled={!isValid}
        text={text}
      />
    );
  };

  const inputProps: TInputProps = {
    values,
    handleChange
  };

  return (
    <div className={styles.auth}>
      <Tab currentTab={currentTab} onClick={handleActiveTab} />
      <form
        ref={formRef}
        className={styles.auth__form}
        onChange={handleValidity}
        onSubmit={handleSubmit}
      >
        {login ? (
          <>
            {AuthInputs.tg(inputProps)}
            {!code ? (
              <AuthButton />
            ) : (
              <>
                {AuthInputs.code(inputProps)}
                <AuthButton />
              </>
            )}
          </>
        ) : currentTab === FormTabs.STUDENT ? (
          <>
            {AuthInputs.name(inputProps)}
            {AuthInputs.tg(inputProps)}
            {AuthInputs.link(inputProps)}
            {!code ? (
              <AuthButton />
            ) : (
              <>
                {AuthInputs.code(inputProps)}
                <AuthButton />
              </>
            )}
          </>
        ) : (
          <>
            {AuthInputs.name(inputProps, 'Необязательно')}
            {AuthInputs.tg(inputProps)}
            {!code ? (
              <AuthButton />
            ) : (
              <>
                {AuthInputs.code(inputProps)}
                <AuthButton />
              </>
            )}
          </>
        )}
      </form>
    </div>
  );
};

export default AuthForm;
