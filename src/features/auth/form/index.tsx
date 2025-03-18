import Inputs from '../inputs';
import { Tab } from '../tabs';
import { useState, useRef } from 'react';
import useForm from '../../../shared/hooks/useForm';
import styles from './index.module.scss';
import Button from '../../../shared/button';

export const AuthForm = ({ login }: { login: boolean }) => {
  const [currentTab, setCurrentTab] = useState('Как ученик');
  const { values, handleChange } = useForm({
    name: '',
    tg: '',
    link: '',
    code: ''
  });
  const [isValid, setIsValid] = useState(false);
  const [code, setReceived] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Код получен
    setReceived(true);
    setIsValid(false);
  };

  const handleActiveTab = (value: string) => {
    setCurrentTab(value);
    setReceived(false);
  };

  const handleValidity = () => {
    if (formRef.current?.checkValidity()) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleSuccess = () => {
    // Тестовый вывод данных в консоль
    console.log(
      `Success! Имя: ${values.name}, Tg: ${values.tg}, Ссылка: ${values.link}, Код: ${values.code}.`
    );
    setIsValid(false);
  };

  // Temp button
  const Button = (reg?: string) => {
    return (
      <button
        className={styles.auth__form__button}
        onClick={reg ? handleSuccess : undefined}
        disabled={!isValid}
      >
        {reg ? 'Зарегистрироваться' : 'Получить код'}
      </button>
    );
  };

  const props = {
    values,
    handleChange
  };

  return (
    <div className={styles.auth}>
      <Tab current={currentTab} onClick={handleActiveTab} />
      <form
        ref={formRef}
        className={styles.auth__form}
        onChange={handleValidity}
        onSubmit={handleSubmit}
      >
        {login ? (
          <>
            {Inputs.tg(props)}
            {!code && <>{Button()}</>}
            {code && (
              <>
                {Inputs.code(props)}
                {Button('reg')}
              </>
            )}
          </>
        ) : currentTab === 'Как ученик' ? (
          <>
            {Inputs.name(props)}
            {Inputs.tg(props)}
            {Inputs.link(props)}
            {!code && <>{Button()}</>}
            {code && (
              <>
                {Inputs.code(props)}
                {Button('reg')}
              </>
            )}
          </>
        ) : (
          <>
            {Inputs.name(props, 'Необязательно')}
            {Inputs.tg(props)}
            {!code && <>{Button()}</>}
            {code && (
              <>
                {Inputs.code(props)}
                {Button('reg')}
              </>
            )}
          </>
        )}
      </form>
    </div>
  );
};
