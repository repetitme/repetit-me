import Inputs from '../auth-inputs';
import { AuthModal } from '../../../widgets/ui/AuthModal';
import FC, { useState, useRef } from 'react';
import { useForm } from '../../../shared/hooks/useForm';
import styles from './index.module.scss';
import AuthButton from '../auth-button';
import AuthSelectRole from '../authSelectRole';

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

  if (login) {
    return (
      <div className={styles.auth}>
        <AuthSelectRole OnChangeSelect={handleActiveTab} />
        <form
          ref={formRef}
          className={styles.auth__form}
          onChange={handleValidity}
          onSubmit={handleSubmit}
        >
          {Inputs.tg(values.value, handleChange)}
          {!code && (
            <AuthButton
              type="A"
              disabled={!isValid}
              onClick={() => handleSubmit}
            />
          )}
          {code && (
            <>
              {Inputs.code(values.value, handleChange)}
              <AuthButton
                type="B"
                disabled={!isValid}
                onClick={handleSuccess}
              />
            </>
          )}
        </form>
      </div>
    );
  }

  return (
    <div className={styles.auth}>
      <AuthSelectRole OnChangeSelect={handleActiveTab} />
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
            <AuthButton
              type="A"
              disabled={!isValid}
              onClick={() => handleSubmit}
            />
          )}
          {code && (
            <>
              {Inputs.code(values.value, handleChange)}
              <AuthButton
                type="B"
                disabled={!isValid}
                onClick={handleSuccess}
              />
            </>
          )}
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
            <AuthButton
              type="A"
              disabled={!isValid}
              onClick={() => handleSubmit}
            />
          )}
          {code && (
            <>
              {Inputs.code(values.value, handleChange)}
              <AuthButton
                type="B"
                disabled={!isValid}
                onClick={handleSuccess}
              />
            </>
          )}
        </form>
      )}
    </div>
  );
};

const AuthModalForm = ({ onClose }: { onClose: () => void }) => {
  const [login, setLogin] = useState(false);

  return (
    <AuthModal
      type={login}
      toLogin={() => setLogin(true)}
      onClose={onClose}
    >
      <AuthForm login={login} />
    </AuthModal>
  );
};

export default AuthModalForm;
