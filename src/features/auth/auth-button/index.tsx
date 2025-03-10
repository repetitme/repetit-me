import Button from "../../../shared/button";

type AuthButtonProps = {
  type: "A" | "B";
  disabled: boolean;
  onClick: () => void;
};

const AuthButton = ({ type, disabled, onClick }: AuthButtonProps) => {
  return (
    <Button
      text= {type === "A" ? "Получить код" : "Зарегистрироваться"}
      variant="purple"
      size="large"
      disabled={disabled}
      onClick={onClick}
    />
  );
};

export default AuthButton;