import { FC } from 'react';
import Input from '../../shared/ui/input';
import styles from './index.module.scss';
import Textarea from '../../shared/ui/textarea';

interface TutorDialogsProps {
  variant: 'arrangement' | 'hadFirstClass' | 'report';
}

const TutorDialogs: FC<TutorDialogsProps> = ({ variant }) => {
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
        return radio();
      case 'hadFirstClass':
        return radio();
      case 'report':
        return radio();
    }
  };

  return <div>{dialogs()}</div>;
};

export default TutorDialogs;
