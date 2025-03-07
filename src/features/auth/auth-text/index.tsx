import './auth-text.scss';

export const AuthText: React.FC<{ login?: boolean }> = ({ login }) => {
  return (
    <div className="auth__text">
      <p>
        Нажимая «Получить код» вы соглашаетесь&nbsp;
        <a>с политикой конфиденциальности и пользовательским соглашением</a>
      </p>

      {login && (
        <p className="auth__text--login">
          Уже есть аккаунт?&nbsp;
          <a>Войти</a>
        </p>
      )}
    </div>
  );
};
