import cn from 'classnames';

import { FormTabs } from '../constants';
import useAuth from '../useAuth';
import { AuthButtons, AuthInputs, Tab } from './components';

import styles from './index.module.scss';

import { TLogin } from '../types';

export const AuthForm: React.FC<TLogin> = ({
  mainPageRegister,
  closeModal
}) => {
  const {
    currentTab,
    authType,
    code,
    formRef,
    inputCount,
    formChange,
    delayedTab,
    handleValidity,
    handleSubmit,
    handleActiveTab,
    inputProps,
    buttonProps
  } = useAuth(mainPageRegister, closeModal);

  return (
    <div className={styles.auth}>
      {!mainPageRegister && (
        <>
          <h2 className={styles.auth__title}>
            <span>{authType ? 'Вход' : 'Регистрация'}</span>
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
        <AuthButtons {...buttonProps} />
      </form>
    </div>
  );
};
