import { FC, useEffect, useRef, useState } from 'react';

import cn from 'classnames';
import { useNavigate } from 'react-router-dom';

import useForm from '../../shared/hooks/useForm';
import Input from '../../shared/ui/input';
import Popup from '../../shared/ui/popup/popup';
import Textarea from '../../shared/ui/textarea';
import {
  TutorDialogsVariant,
  blocksizes,
  initialState,
  initialValues,
  inlineSizes
} from './constants';
import { arrangement, button, hadFirstClass, report, validation } from './data';

import styles from './index.module.scss';

import {
  InputFactoryProps,
  TState,
  TutorDialogsProps,
  formData,
  radioFactoryProps
} from './types';

const TutorDialogs: FC<TutorDialogsProps> = ({
  variant,
  isOpen,
  close,
  id
}) => {
  const [state, setState] = useState(initialState);
  const { values, setValues, handleChange } = useForm<formData>(initialValues);
  const [isValid, setIsValid] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formChange, setFormChange] = useState(false);
  const [inputChange, setInputChange] = useState(true);
  const [errors, setErrors] = useState<{ [key: string]: string | number }>({
    acc: 0
  });
  const defaultWidth =
    variant === 'report' ||
    (variant === 'arrangement' && state.arrangement.step === 2)
      ? inlineSizes[1]
      : inlineSizes[0];
  const defaultHeight = variant !== 'report' ? blocksizes[0] : blocksizes[4];
  const [blockSize, setBlockSize] = useState(defaultHeight);
  const [inlineSize, setInlineSize] = useState(defaultWidth);
  const navigate = useNavigate();

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if ((name === 'arranged' || name === 'hadClass') && value === 'Нет') {
      handleInputChange();
      setBlockSize(blocksizes[1]);
      setState((prevState) => ({
        ...prevState,
        [variant]: { ...prevState[variant], button: button[2] }
      }));
    }
    if (
      value === 'Да' &&
      (name === 'arranged' || name === 'hadClass') &&
      state.hadFirstClass.step === 1
    ) {
      handleInputChange(true);
      setBlockSize(blocksizes[0]);
      setState((prevState) => ({
        ...prevState,
        [variant]: { ...prevState[variant], button: button[0] }
      }));
    }
    if (value === 'Да' && name === 'hadClass') {
      setBlockSize(blocksizes[0]);
      setState((prevState) => ({
        ...prevState,
        [variant]: { ...prevState[variant], step: 1 }
      }));
    }
    handleChange(e, variant);
  };

  const onStateChange = (
    value: Partial<TState[keyof TState]>,
    path: TutorDialogsVariant
  ) => {
    setState((prevState) => ({
      ...prevState,
      [path]: { ...prevState[path], ...value }
    }));
  };

  useEffect(() => {
    variant === TutorDialogsVariant.report && setInputChange(false);
    variant === TutorDialogsVariant.arrangement && setInputChange(true);
    setBlockSize(defaultHeight);
    setInlineSize(defaultWidth);
    setTimeout(() => {
      setValues(initialValues);
      setState(initialState);
      handleValidity();
    }, 300);
  }, [isOpen]);

  const handleValidity = () => {
    requestAnimationFrame(() => {
      if (formRef.current) {
        setIsValid(!!formRef.current?.checkValidity());
      }
    });
  };

  const handleFormChange = () => {
    setFormChange(true);
    setTimeout(() => {
      setFormChange(false);
    }, 500);
  };

  const handleInputChange = (hide?: boolean) => {
    if (hide) {
      setInputChange(true);
      return;
    }
    setInputChange(true);
    setTimeout(() => {
      setInputChange(false);
    }, 500);
  };

  const onSubmit = () => {
    handleFormChange();
    setTimeout(() => {
      setIsValid(false);
      switch (variant) {
        case arrangement.variant:
          if (values.arrangement.arranged === 'Нет') {
            close();
          } else {
            setBlockSize(blocksizes[2]);
            setInlineSize(inlineSizes[1]);
            onStateChange(
              {
                title: arrangement.mainTitles[1],
                button: button[1],
                step: 2
              },
              TutorDialogsVariant.arrangement
            );
          }
          if (state.arrangement.step === 2) {
            close();
          }
          break;
        case hadFirstClass.variant:
          if (
            state.hadFirstClass.step === 1 &&
            values.hadFirstClass.hadClass === 'Нет'
          ) {
            setBlockSize(blocksizes[1]);
            close();
          } else {
            setBlockSize(blocksizes[3]);
            onStateChange(
              {
                button: button[2],
                step: 2
              },
              TutorDialogsVariant.hadFirstClass
            );
          }
          if (state.hadFirstClass.step === 2) {
            close();
          }
          break;
        default:
          navigate('/tutor-student/' + id);
          close();
      }
    }, 300);
  };

  const radioFactory = ({ futureLesson, index }: radioFactoryProps) => {
    const fieldName =
      variant === TutorDialogsVariant.arrangement ? 'arranged' : 'hadClass';
    const fieldValue =
      variant === TutorDialogsVariant.arrangement
        ? values.arrangement.arranged
        : values.hadFirstClass.hadClass;
    const isYes = index === 0 ? 'Да' : 'Нет';

    return (
      <label
        className={styles.radio__checkbox}
        htmlFor={'radio' + index + (futureLesson ? 'future' : '')}
      >
        <input
          id={'radio' + index + (futureLesson ? 'future' : '')}
          type="radio"
          name={futureLesson ? 'futurePlan' : fieldName}
          value={futureLesson ? hadFirstClass.options[index] : isYes}
          checked={
            futureLesson
              ? values.hadFirstClass.futurePlan === hadFirstClass.options[index]
              : fieldValue === isYes
          }
          onChange={onChange}
        />
        <span>{futureLesson ? hadFirstClass.options[index] : isYes}</span>
      </label>
    );
  };

  const inputFactory = ({ name, textarea, index }: InputFactoryProps) => {
    const variantData = {
      [TutorDialogsVariant.arrangement]: arrangement,
      [TutorDialogsVariant.hadFirstClass]: hadFirstClass,
      [TutorDialogsVariant.report]: report
    };
    const Tag = textarea ? Textarea : Input;
    const validate = (isPattern?: boolean) => {
      const validationParams = validation[name as keyof typeof validation];
      if (isPattern) {
        return validationParams[1] as string;
      }
      return validationParams[0] as string;
    };

    return (
      <Tag
        className={cn(styles.inactive, {
          [styles.textarea]: textarea,
          [styles.textarea__report]: variant === TutorDialogsVariant.report,
          [styles.active]: !inputChange
        })}
        name={name}
        placeholder={variantData[variant].placeholder[index]}
        onChange={onChange}
        value={
          (values as { [key: string]: { [key: string]: string } })[variant][
            name
          ] || ''
        }
        variant="report"
        {...(!textarea && {
          onlyNumber:
            name === 'price' ||
            name === 'duration' ||
            name === 'planedNumberOfLessons'
        })}
        label={variantData[variant].secondaryTitles[index]}
        required={
          variant === TutorDialogsVariant.report ||
          (variant === TutorDialogsVariant.arrangement &&
            values.arrangement.arranged === 'Да')
            ? false
            : true
        }
        maxLength={
          textarea
            ? 500
            : name === 'price'
              ? 6
              : name === 'duration'
                ? 3
                : name === 'planedNumberOfLessons'
                  ? 2
                  : 50
        }
        title={textarea ? '' : validate()}
        pattern={textarea ? '' : validate(true)}
        autoComplete="off"
        {...((!textarea && {
          onError: (error: string, name: string) => addErrorSpace(error, name)
        }) as any)}
      />
    );
  };

  const radio = (futureLesson?: boolean) => {
    return (
      <div className={styles.radio}>
        {futureLesson && (
          <h3 className={styles.radio__title}>
            {hadFirstClass.secondaryTitles[1]}
          </h3>
        )}
        {radioFactory({ futureLesson, index: 0 })}
        {radioFactory({ futureLesson, index: 1 })}
        {futureLesson && radioFactory({ futureLesson, index: 2 })}
      </div>
    );
  };
  const addErrorSpace = (error: string, name: string) => {
    setErrors((prevErrors) => {
      const errors = { ...prevErrors };
      if (!error) delete errors[name as keyof typeof errors];
      if (errors[name as keyof typeof errors]) return errors;
      errors[name as keyof typeof errors] = error;
      errors.acc = Object.entries(errors).filter(
        ([k, v]) => k !== 'acc' && v
      ).length;
      return errors;
    });
  };

  const dialogs = () => {
    switch (variant) {
      case TutorDialogsVariant.arrangement:
        return (
          <>
            {state.arrangement.step === 1 && (
              <div
                className={cn({
                  [styles.radio__small]: values.arrangement.arranged === 'Да'
                })}
              >
                {radio()}
                {inputFactory({
                  name: 'cause',
                  textarea: true,
                  index: 0
                })}
              </div>
            )}
            {state.arrangement.step === 2 && (
              <div className={styles.inputs}>
                {inputFactory({ name: 'price', index: 1 })}
                {inputFactory({ name: 'date', index: 2 })}
                {inputFactory({ name: 'time', index: 3 })}
              </div>
            )}
          </>
        );
      case TutorDialogsVariant.hadFirstClass:
        return (
          <div
            className={cn({
              [styles.radio__small]: values.hadFirstClass.hadClass === 'Да'
            })}
          >
            {radio()}
            {values.hadFirstClass.hadClass === 'Да'
              ? state.hadFirstClass.step === 2 && radio(true)
              : inputFactory({ name: 'cause', textarea: true, index: 0 })}
          </div>
        );
      case TutorDialogsVariant.report:
        return (
          <div className={styles.inputs}>
            {inputFactory({ name: 'price', index: 0 })}
            {inputFactory({ name: 'duration', index: 1 })}
            {inputFactory({ name: 'planedNumberOfLessons', index: 2 })}
            {inputFactory({ name: 'additionalInfo', textarea: true, index: 3 })}
          </div>
        );
    }
  };

  return (
    <Popup
      title={state[variant].title}
      isOpen={isOpen}
      close={close}
      buttonText={state[variant].button}
      buttonOnClick={onSubmit}
      variant="form"
      isValid={isValid}
    >
      <form
        style={{
          blockSize: `${blockSize + 30 * (errors.acc as number)}px`,
          inlineSize: `${inlineSize}px`
        }}
        onSubmit={onSubmit}
        onChange={handleValidity}
        ref={formRef}
        className={cn(styles.dialogs, {
          [styles.dialogs__change]: formChange
        })}
      >
        {dialogs()}
      </form>
    </Popup>
  );
};

export default TutorDialogs;
