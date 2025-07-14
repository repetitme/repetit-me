import { FC, useState } from 'react';

import useForm from '../../shared/hooks/useForm';
import Button from '../../shared/ui/button';
import Input from '../../shared/ui/input';
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
}

const TutorDialogs: FC<TutorDialogsProps> = ({ variant }) => {
  const [final, setFinal] = useState(false);
  const { values, setValues } = useForm({
    arrangement: '',
    hadFirstClass: '',
    report: ''
  });
  let buttonText = variant === TutorDialogsVariant.arrangement || variant === TutorDialogsVariant.hadFirstClass ? button[0] : button[3];

  const onSubmit = () => {
    switch (variant) {
      case arrangement.variant:
        buttonText = buttonText[1];
        final && console.log('Arrangement submitted:', values.arrangement);
        break;
      case hadFirstClass.variant:
        buttonText = buttonText[2];
        final &&
          console.log('Had first class submitted:', values.hadFirstClass);
        break;
      case report.variant:
        final && console.log('Report submitted:', values.report);
    }
  };

  const radio = (futureLesson?: boolean) => {
    return (
      <div>
        <label>{!futureLesson ? 'Да' : hadFirstClass.options[0]}</label>
        <input type="radio" name="dialog" checked onChange={() => setFinal(true)} />
        <label>{!futureLesson ? 'Нет' : hadFirstClass.options[1]}</label>
        <input type="radio" name="dialogs" />
        (futureLesson && <label>{hadFirstClass.options[2]}</label>
        <input type="radio" name="dialog" />)
      </div>
    );
  };

  const dialogs = () => {
    switch (variant) {
      case 'arrangement':
        return (
          <div>
            radio()
            <Textarea placeholder="Введите комментарий" />
          </div>
        );
      case 'hadFirstClass':
        return radio();
      case 'report':
        return radio();
    }
  };

  return (
    <form className={styles.dialogs}>
      {dialogs()}
      <Button onClick={onSubmit} text={buttonText} variant="purple" />
    </form>
  );
};

export default TutorDialogs;
