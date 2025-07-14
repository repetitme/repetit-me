import { FC } from 'react';

import useForm from '../../shared/hooks/useForm';
import Input from '../../shared/ui/input';
import Textarea from '../../shared/ui/textarea';

import styles from './index.module.scss';

interface TutorDialogsProps {
  variant: 'arrangement' | 'hadFirstClass' | 'report';
}

const TutorDialogs: FC<TutorDialogsProps> = ({ variant }) => {
  const { values, setValues } = useForm('');
  const radio = (futureLesson?: boolean) => {
    return (
      <div>
        <label>{!futureLesson ? 'Да' : 'Планируются дальнейшие занятия'}</label>
        <input type="radio" name="dialog" />
        <label>{!futureLesson ? 'Нет' : 'Дальнейших занятий не будет'}</label>
        <input type="radio" name="dialogs" />
        (futureLesson &&{' '}
        <label>Неизвестно планируются ли дальнейшие занятия</label>
        <input type="radio" name="dialog" />)
      </div>
    );
  };

  const dialogs = () => {
    switch (variant) {
      case 'arrangement':
        return (
          <div>
            (radio()
            <Input
              value={values}
              onChange={(e) => setValues(e.target.value)}
              type="text"
              placeholder="Введите тему занятия"
            />
            <Textarea placeholder="Введите комментарий" />
          </div>
        );
      case 'hadFirstClass':
        return radio();
      case 'report':
        return radio();
    }
  };

  return <div className={styles.dialogs}>{dialogs()}</div>;
};

export default TutorDialogs;
