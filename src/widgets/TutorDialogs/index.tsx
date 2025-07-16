import { FC, useState } from 'react';

import useForm from '../../shared/hooks/useForm';
import Input from '../../shared/ui/input';
import Popup from '../../shared/ui/popup/popup';
import Textarea from '../../shared/ui/textarea';
import {
  TutorDialogsVariant,
  arrangement,
  button,
  hadFirstClass,
  report
} from './data';

import styles from './index.module.scss';

interface TutorDialogsProps {
  variant: TutorDialogsVariant;
  close: () => void;
}

const TutorDialogs: FC<TutorDialogsProps> = ({ variant, close }) => {
  const [final, setFinal] = useState(false);
  const [state, setState] = useState({
    arrangement: {
      title: arrangement.mainTitles[0],
      button: button[0]
    },
    hadFirstClass: {
      title: hadFirstClass.mainTitles[0],
      button: button[0]
    },
    report: {
      title: report.mainTitles[0],
      button: button[3]
    }
  });

  const { values, setValues } = useForm({
    arrangement: '',
    hadFirstClass: '',
    report: ''
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
    setFinal(true);
  };

  const onSubmit = () => {
    switch (variant) {
      case arrangement.variant:
        setState({
          ...state,
          arrangement: { ...state.arrangement, button: button[1] }
        });
        final && console.log('Arrangement submitted:', values.arrangement);
        break;
      case hadFirstClass.variant:
        setState({
          ...state,
          hadFirstClass: { ...state.hadFirstClass, button: button[2] }
        });
        final &&
          console.log('Had first class submitted:', values.hadFirstClass);
        break;
      case report.variant:
        final && console.log('Report submitted:', values.report);
    }
  };

  const radio = (futureLesson?: boolean) => {
    return (
      <div className={styles.radio}>
        <label className={styles.radio__checkbox}>
          <input
            type="radio"
            name={variant}
            onChange={onChange}
            value="Да"
            checked={values[variant] === 'Да'}
          />
          {!futureLesson ? 'Да' : hadFirstClass.options[0]}
        </label>
        <label className={styles.radio__checkbox}>
          <input
            type="radio"
            name={variant}
            onChange={onChange}
            value="Нет"
            checked={values[variant] === hadFirstClass.options[1]}
          />
          {!futureLesson ? 'Нет' : hadFirstClass.options[1]}
        </label>
        {futureLesson && (
          <>
            <label className={styles.radio__checkbox}>
              <input
                type="radio"
                name={variant}
                onChange={onChange}
                value="Да"
                checked={values[variant] === hadFirstClass.options[2]}
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
          <div>
            {radio()}
            <Textarea placeholder="Введите комментарий" />
          </div>
        );
      case TutorDialogsVariant.hadFirstClass:
        return (
          <div>
            {radio()}
            <Textarea placeholder="Введите комментарий" />
          </div>
        );
      case TutorDialogsVariant.report:
        return (
          <div className={styles.inputs}>
            <Input
              placeholder={report.placeholder[0]}
              onChange={onChange}
              value={values[variant]}
              variant="report"
              label={report.secondaryTitles[0]}
            />
            <Input
              placeholder={report.placeholder[1]}
              onChange={onChange}
              value={values[variant]}
              variant="report"
              label={report.secondaryTitles[1]}
            />
            <Input
              placeholder={report.placeholder[2]}
              onChange={onChange}
              value={values[variant]}
              variant="report"
              label={report.secondaryTitles[2]}
            />
            <Textarea
              className={styles.textarea}
              onChange={onChange}
              value={values[variant]}
              label={report.secondaryTitles[3]}
            />
          </div>
        );
    }
  };

  return (
    <Popup
      title={state[variant].title}
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
