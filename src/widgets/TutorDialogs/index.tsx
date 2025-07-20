import { FC, useEffect, useRef, useState } from 'react';

import useForm from '../../shared/hooks/useForm';
import Input from '../../shared/ui/input';
import Popup from '../../shared/ui/popup/popup';
import Textarea from '../../shared/ui/textarea';
import { TutorDialogsVariant, initialState, initialValues } from './constants';
import { arrangement, button, hadFirstClass, report } from './data';

import styles from './index.module.scss';

import {
  InputFactoryProps,
  TState,
  TutorDialogsProps,
  formData,
  radioFactoryProps
} from './types';

const TutorDialogs: FC<TutorDialogsProps> = ({ variant, isOpen, close }) => {
  const [state, setState] = useState(initialState);
  const { values, setValues, handleChange } = useForm<formData>(initialValues);
  const [isValid, setIsValid] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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

  const onSubmit = () => {
    // TEST
    console.log(values);
    setIsValid(false);
    switch (variant) {
      case arrangement.variant:
        if (values.arrangement.arranged === 'Нет') {
          close();
        } else {
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
          close();
        } else {
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
        close();
    }
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
      <label className={styles.radio__checkbox} htmlFor={'radio' + index}>
        <input
          id={'radio' + index}
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
        {futureLesson ? hadFirstClass.options[index] : isYes}
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
    return (
      <Tag
        className={textarea ? styles.textarea : ''}
        name={name}
        placeholder={variantData[variant].placeholder[index]}
        onChange={onChange}
        value={
          (values as { [key: string]: { [key: string]: string } })[variant][
            name
          ] || ''
        }
        variant="report"
        label={variantData[variant].secondaryTitles[index]}
        required={textarea ? false : true}
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

  const dialogs = () => {
    switch (variant) {
      case TutorDialogsVariant.arrangement:
        return (
          <>
            {state.arrangement.step === 1 && (
              <div style={{ inlineSize: '360px' }}>
                {radio()}
                {values.arrangement.arranged === 'Нет' &&
                  inputFactory({
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
          <div style={{ inlineSize: '360px' }}>
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
        onSubmit={onSubmit}
        onChange={handleValidity}
        ref={formRef}
        className={styles.dialogs}
      >
        {dialogs()}
      </form>
    </Popup>
  );
};

export default TutorDialogs;
