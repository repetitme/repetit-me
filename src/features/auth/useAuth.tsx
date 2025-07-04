import { useEffect, useRef, useState } from 'react';

import useForm from '../../shared/hooks/useForm';
import { AuthType, FormTabs, defaultValues } from './constants';
import { IAuthButtonsProps } from './ui/components/button';

import { TFormTabs, TInputProps, TUseAuth } from './types';

const useAuth = ({ mainPageRegister, login = false, closeModal }: TUseAuth) => {
  const { values, handleChange, setValues } = useForm(defaultValues);
  const formRef = useRef<HTMLFormElement | null>(null);

  const [currentTab, setStudentTab] = useState<TFormTabs>(
    mainPageRegister ? FormTabs.TUTOR : FormTabs.STUDENT
  );
  const [authType, setAuthType] = useState(login);
  const [isValid, setIsValid] = useState(false);
  const [code, setReceived] = useState(false);

  const [inputCount, setInputCount] = useState(0);
  const [formChange, setFormChange] = useState(false);
  const [delayedTab, setDelayedTab] = useState<TFormTabs>(currentTab);

  useEffect(() => {
    if (formRef.current) {
      setInputCount(formRef.current.querySelectorAll('input').length);
    }
  }, [authType, code, delayedTab]);

  // Сброс кода при изменении данных после его получения
  useEffect(() => {
    if (code) {
      setReceived(false);
    }
  }, [values.name, values.tg, values.link]);

  useEffect(() => {
    setValues((prev) => ({
      ...prev,
      authType: authType ? AuthType.LOGIN : AuthType.REGISTER,
      role: currentTab
    }));
  }, [authType, currentTab]);

  const handleValidity = () => {
    setIsValid(!!formRef.current?.checkValidity());
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsValid(false);
    if (code) {
      setValues(defaultValues);
      closeModal?.();
      return;
    }
    // Код получен
    setReceived(true);
  };

  const handleActiveTab = (value: TFormTabs) => {
    setFormChange(true);
    setReceived(false);
    setStudentTab(value);
    setTimeout(() => {
      setFormChange(false);
      setDelayedTab(value);
    }, 500);
  };

  const handleAuthTypeChange = () => {
    setFormChange(true);
    setTimeout(() => {
      setFormChange(false);
      setAuthType(true);
    }, 300);
  };

  const inputProps: TInputProps = {
    values,
    handleChange
  };

  const buttonProps: IAuthButtonsProps = {
    authType,
    code,
    isValid,
    handleAuthTypeChange
  };

  return {
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
  };
};

export default useAuth;
