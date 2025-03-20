import AuthInputs from '../inputs';
import { Tab } from '../tabs';
import { useState, useRef, useEffect } from 'react';
import useForm from '../../../shared/hooks/useForm';
import styles from './form.module.scss';
import Button from '../../../shared/button';

const AuthForm = ({ login }: { login: boolean }) => {
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

  // Сброс кода при изменении данных после его получения
  useEffect(() => {
    if (code) {
      setReceived(false);
    }
  }, [values['name'], values['tg'], values['link']]);

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

  const handleActiveTab = (value: string) => {
    setCurrentTab(value);
    setReceived(false);
  };

  const handleSuccess = () => {
    if (formRef.current?.checkValidity()) {
      console.log(`Success! Имя: ${values.name}, Tg: ${values.tg}, Ссылка: ${values.link}, Код: ${values.code}.`);
    }
    setIsValid(false);
  };

  // Temp button
  const AuthButton = (reg?: string) => {
    return (
      <Button
        className={styles.auth__form__button}
        onClick={reg ? handleSuccess : undefined}
        size='large'
        variant='purple'
        disabled={!isValid}
        text={reg ? 'Зарегистрироваться' : 'Получить код'}
      >
      </Button>
    );
  };

  const props: {
    values: Record<string, string>;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  } = {
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
            {AuthInputs.tg(props)}
            {!code && <>{AuthButton()}</>}
            {code && (
              <>
                {AuthInputs.code(props)}
                {AuthButton('reg')}
              </>
            )}
          </>
        ) : currentTab === 'Как ученик' ? (
          <>
            {AuthInputs.name(props)}
            {AuthInputs.tg(props)}
            {AuthInputs.link(props)}
            {!code && <>{AuthButton()}</>}
            {code && (
              <>
                {AuthInputs.code(props)}
                {AuthButton('reg')}
              </>
            )}
          </>
        ) : (
          <>
            {AuthInputs.name(props, 'Необязательно')}
            {AuthInputs.tg(props)}
            {!code && <>{AuthButton()}</>}
            {code && (
              <>
                {AuthInputs.code(props)}
                {AuthButton('reg')}
              </>
            )}
          </>
        )}
      </form>
    </div>
  );
};

export default AuthForm;
