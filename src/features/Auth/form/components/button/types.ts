export interface IAuthButtonsProps {
  buttonProps: {
    authType: boolean;
    code: boolean;
    isValid: boolean;
    handleAuthTypeChange(): void;
  };
}
