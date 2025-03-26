import { useEffect, useRef, useState } from 'react';

import Button from '../../../shared/button';
import useForm from '../../../shared/hooks/useForm';
import AuthInputs from '../inputs';
import Tab from '../tabs';

import styles from './index.module.scss';

import { TFormTabs, TInputProps, TLogin } from './types';

const AuthForm: React.FC<TLogin> = ({ login }) => {
  const defaultValues = { name: '', tg: '', link: '', code: '' };
  const { values, handleChange, setValues } = useForm(defaultValues);
  const [isStudentTab, setStudentTab] = useState<TFormTabs>(true);
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

  const handleActiveTab = () => {
    setStudentTab((prev) => !prev);
    setReceived(false);
  };

  const handleSuccess = () => {
    console.log(
      `Success! Имя: ${values.name}, Tg: ${values.tg}, Ссылка: ${values.link}, Код: ${values.code}.`
    );
    setIsValid(false);
    setValues(defaultValues);
    // Close modal
  };

  const AuthButton = (isRegistration?: boolean) => {
    return (
      <Button
        onClick={isRegistration ? handleSuccess : undefined}
        size="large"
        variant="purple"
        disabled={!isValid}
        text={isRegistration ? 'Зарегистрироваться' : 'Получить код'}
      />
    );
  };

  const inputProps: TInputProps = {
    values,
    handleChange
  };

  return (
    <div className={styles.auth}>
      <Tab isStudent={isStudentTab} onClick={handleActiveTab} />
      <form
        ref={formRef}
        className={styles.auth__form}
        onChange={handleValidity}
        onSubmit={handleSubmit}
      >
        {login ? (
          <>
            {AuthInputs.tg(inputProps)}
            {!code && <>{AuthButton()}</>}
            {code && (
              <>
                {AuthInputs.code(inputProps)}
                {AuthButton(true)}
              </>
            )}
          </>
        ) : isStudentTab ? (
          <>
            {AuthInputs.name(inputProps)}
            {AuthInputs.tg(inputProps)}
            {AuthInputs.link(inputProps)}
            {!code && <>{AuthButton()}</>}
            {code && (
              <>
                {AuthInputs.code(inputProps)}
                {AuthButton(true)}
              </>
            )}
          </>
        ) : (
          <>
            {AuthInputs.name(inputProps, 'Необязательно')}
            {AuthInputs.tg(inputProps)}
            {!code && <>{AuthButton()}</>}
            {code && (
              <>
                {AuthInputs.code(inputProps)}
                {AuthButton(true)}
              </>
            )}
          </>
        )}
      </form>
    </div>
  );
};

export default AuthForm;
