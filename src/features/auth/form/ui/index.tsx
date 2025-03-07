import Inputs from '../../auth-inputs/ui';
import { AuthText } from '../../auth-text';
import { Tab } from '../../tabs/ui';
import { useState, useRef } from 'react';
import { useForm } from '../../../../shared/hooks/useForm';
import styles from './styles.module.scss';

export const AuthForm = () => {
  const [currentTab, setCurrentTab] = useState('Как ученик');
  const { values, handleChange } = useForm({
    name: '',
    tg: '',
    link: '',
    code: ''
  });
  const [isValid, setIsValid] = useState(false);
  const [code, receiveCode] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    receiveCode(true);
    setIsValid(false);
  };

  const handleActiveTab = (value: string) => {
    setCurrentTab(value);
    receiveCode(false);
  };

  const handleValidity = () => {
    if (formRef) {
      setIsValid(true);
    }
  };

  const handleSuccess = () => {
    // Тестовый вывод данных в консоль
    console.log(
      `Имя: ${values.name}, Tg: ${values.tg}, Ссылка: ${values.link}, Код: ${values.code}.`
    );
    setIsValid(false);
  };

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
          <AuthText login = {true}/>
        </form>
      )}
    </div>
  );
};
