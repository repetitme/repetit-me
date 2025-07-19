import { FC, useEffect, useState } from 'react';

import useForm from '../../shared/hooks/useForm';
import Input from '../../shared/ui/input';
import Popup from '../../shared/ui/popup/popup';
import Textarea from '../../shared/ui/textarea';
import { TutorDialogsVariant, initialState, initialValues } from './constants';
import { arrangement, button, hadFirstClass, report } from './data';

import styles from './index.module.scss';

import { TState, TutorDialogsProps, formData } from './types';

const TutorDialogs: FC<TutorDialogsProps> = ({ variant, isOpen, close }) => {
  const [state, setState] = useState(initialState);

  const { values, setValues, handleChange } = useForm<formData>(initialValues);

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
    setValues(initialValues);
    setState(initialState);
  }, [isOpen]);

  const onSubmit = () => {
    switch (variant) {
      case arrangement.variant:
        if (values.arrangement.arranged === 'Нет') {
          close();
          console.log('Arrangement submitted:', values.arrangement);
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
        break;
      case hadFirstClass.variant:
        if (values.hadFirstClass.hadClass === 'Нет') {
          close();
          console.log('Had first class submitted:', values.hadFirstClass);
        } else if (values.hadFirstClass.hadClass === 'Да') {
          onStateChange(
            {
              button: button[2],
              step: 2
            },
            TutorDialogsVariant.hadFirstClass
          );
          console.log('Had first submitted:', values.hadFirstClass);
        } else if (state.hadFirstClass.step === 2) {
          close();
          console.log('Had first class submitted:', values.hadFirstClass);
        }
        break;
      case report.variant:
        close();
        console.log('Report submitted:', values.report);
    }
  };

  const radio = (futureLesson?: boolean) => {
    const fieldName =
      variant === TutorDialogsVariant.arrangement ? 'arranged' : 'hadClass';
    const fieldValue =
      variant === TutorDialogsVariant.arrangement
        ? values.arrangement.arranged
        : values.hadFirstClass.hadClass;
    return (
      <div className={styles.radio}>
        {futureLesson && (
          <h3 className={styles.radio__title}>
            {hadFirstClass.secondaryTitles[1]}
          </h3>
        )}
        <label className={styles.radio__checkbox}>
          <input
            type="radio"
            name={futureLesson ? 'futurePlan' : fieldName}
            value={futureLesson ? hadFirstClass.options[0] : 'Да'}
            checked={
              futureLesson
                ? values.hadFirstClass.futurePlan === hadFirstClass.options[0]
                : fieldValue === 'Да'
            }
            onChange={onChange}
          />
          {!futureLesson ? 'Да' : hadFirstClass.options[0]}
        </label>
        <label className={styles.radio__checkbox}>
          <input
            type="radio"
            name={futureLesson ? 'futurePlan' : fieldName}
            onChange={onChange}
            value={futureLesson ? hadFirstClass.options[1] : 'Нет'}
            checked={
              futureLesson
                ? values.hadFirstClass.futurePlan === hadFirstClass.options[1]
                : fieldValue === 'Нет'
            }
          />
          {!futureLesson ? 'Нет' : hadFirstClass.options[1]}
        </label>
        {futureLesson && (
          <>
            <label className={styles.radio__checkbox}>
              <input
                type="radio"
                name={'futurePlan'}
                onChange={onChange}
                value={hadFirstClass.options[2]}
                checked={
                  values.hadFirstClass.hadClass === hadFirstClass.options[2]
                }
              />
              {hadFirstClass.options[2]}
            </label>
          </>
        )}
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
                {values.arrangement.arranged === 'Нет' && (
                  <Textarea
                    className={styles.textarea}
                    name="cause"
                    onChange={onChange}
                    value={values.arrangement.cause}
                    label={arrangement.secondaryTitles[0]}
                    placeholder={arrangement.placeholder[0]}
                  />
                )}
              </div>
            )}
            {state.arrangement.step === 2 && (
              <div className={styles.inputs}>
                <Input
                  name="price"
                  placeholder={arrangement.placeholder[1]}
                  onChange={onChange}
                  value={values.arrangement.price || ''}
                  variant="report"
                  label={arrangement.secondaryTitles[1]}
                />
                <Input
                  name="date"
                  placeholder={arrangement.placeholder[2]}
                  onChange={onChange}
                  value={values.arrangement.date || ''}
                  variant="report"
                  label={arrangement.secondaryTitles[2]}
                />
                <Input
                  name="time"
                  placeholder={arrangement.placeholder[3]}
                  onChange={onChange}
                  value={values.arrangement.time || ''}
                  variant="report"
                  label={arrangement.secondaryTitles[3]}
                />
              </div>
            )}
          </>
        );
      case TutorDialogsVariant.hadFirstClass:
        return (
          <div style={{ inlineSize: '360px' }}>
            {radio()}
            {values.hadFirstClass.hadClass === 'Да' ? (
              state.hadFirstClass.step === 2 && radio(true)
            ) : (
              <Textarea
                name="cause"
                className={styles.textarea}
                onChange={onChange}
                value={values.hadFirstClass.cause}
                label={hadFirstClass.secondaryTitles[0]}
                placeholder={hadFirstClass.placeholder}
              />
            )}
          </div>
        );
      case TutorDialogsVariant.report:
        return (
          <div className={styles.inputs}>
            <Input
              name="price"
              placeholder={report.placeholder[0]}
              onChange={onChange}
              value={values.report.price}
              variant="report"
              label={report.secondaryTitles[0]}
            />
            <Input
              name="duration"
              placeholder={report.placeholder[1]}
              onChange={onChange}
              value={values.report.duration}
              variant="report"
              label={report.secondaryTitles[1]}
            />
            <Input
              name="planedNumberOfLessons"
              placeholder={report.placeholder[2]}
              onChange={onChange}
              value={values.report.planedNumberOfLessons}
              variant="report"
              label={report.secondaryTitles[2]}
            />
            <Textarea
              name="additionalInfo"
              className={styles.textarea}
              onChange={onChange}
              value={values.report.additionalInfo}
              label={report.secondaryTitles[3]}
            />
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
    >
      <form className={styles.dialogs}>{dialogs()}</form>
    </Popup>
  );
};

export default TutorDialogs;
