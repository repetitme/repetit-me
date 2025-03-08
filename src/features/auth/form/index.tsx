import Inputs from '../auth-inputs';
import { AuthText } from '../auth-text';
import { Tab } from '../tabs';
import { useState, useRef } from 'react';
import { useForm } from '../../../shared/hooks/useForm';
import styles from './index.module.scss';

export const AuthForm = ({login}:{login: boolean}) => {
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
    setReceived(true);
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

  if (login) {
    return (
      <div className={styles.auth}>
        <div className={styles.auth__tabs}>
          <Tab
            value="Как ученик"
            active={currentTab === 'Как ученик'}
            onClick={handleActiveTab}
          />
          <Tab
            value="Как репетитор"
            active={currentTab === 'Как репетитор'}
            onClick={handleActiveTab}
          />
        </div>
        <form
          ref={formRef}
          className={styles.auth__form}
          onChange={handleValidity}
          onSubmit={handleSubmit}
        >
          {Inputs.tg(values.value, handleChange)}
          {!code && (
            <button
              className={styles.auth__form__button}
              disabled={!isValid}
              type="submit"
            >
              Получить код
            </button>
          )}
          {code && (
            <>
              {Inputs.code(values.value, handleChange)}
              <button
                className={styles.auth__form__button}
                type="submit"
                onClick={handleSuccess}
                disabled={!isValid}
              >
                Зарегистрироваться
              </button>
            </>
          )}
          <AuthText />
        </form>
      </div>
    );
  }

  return (
    <div className={styles.auth}>
      <div className={styles.auth__tabs}>
        <Tab
          value="Как ученик"
          active={currentTab === 'Как ученик'}
          onClick={handleActiveTab}
        />
        <Tab
          value="Как репетитор"
          active={currentTab === 'Как репетитор'}
          onClick={handleActiveTab}
        />
      </div>
      {currentTab === 'Как ученик' && (
        <form
          ref={formRef}
          className={styles.auth__form}
          onChange={handleValidity}
          onSubmit={handleSubmit}
        >
          {Inputs.name(values.value, handleChange, 'Необязательно')}
          {Inputs.tg(values.value, handleChange)}
          {Inputs.link(values.value, handleChange)}
          {!code && (
            <button
              className={styles.auth__form__button}
              disabled={!isValid}
              type="submit"
            >
              Получить код
            </button>
          )}
          {code && (
            <>
              {Inputs.code(values.value, handleChange)}
              <button
                className={styles.auth__form__button}
                type="submit"
                onClick={handleSuccess}
                disabled={!isValid}
              >
                Зарегистрироваться
              </button>
            </>
          )}
          <AuthText />
        </form>
      )}
      {currentTab === 'Как репетитор' && (
        <form
          ref={formRef}
          className={styles.auth__form}
          onChange={handleValidity}
          onSubmit={handleSubmit}
        >
          {Inputs.name(values.value, handleChange, 'Необязательно')}
          {Inputs.tg(values.value, handleChange)}
          {!code && (
            <button
              className={styles.auth__form__button}
              disabled={!isValid}
              type="submit"
            >
              Получить код
            </button>
          )}
          {code && (
            <>
              {Inputs.code(values.value, handleChange)}
              <button
                className={styles.auth__form__button}
                type="submit"
                onClick={handleSuccess}
                disabled={!isValid}
              >
                Зарегистрироваться
              </button>
            </>
          )}
          <AuthText login={true} />
        </form>
      )}
    </div>
  );
};
