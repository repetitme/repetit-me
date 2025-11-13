import { FC } from 'react';

import Button from '../../../shared/ui/button';
import TextareaForAddInfo from '../../../shared/ui/textareaForAddInfo';
import { MAX_LENGTH, useAddInfo } from './useAddInfo';

import styles from './index.module.scss';

import { AddInfoProps } from './type';

const AddInfo: FC<AddInfoProps> = ({ selectedTime, onClose }) => {
  const { content, error, handleContentChange } = useAddInfo();

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <div className={styles.container}>
        <h3 className={styles.container__title}>
          Укажите дополнительную информацию
        </h3>
        <div className={styles.container__textarea}>
          <TextareaForAddInfo
            value={content}
            onChange={handleContentChange}
            placeholder="Например, желаемое время занятий, если его нет в расписании, ваш уровень, конкретную цель занятий или другую важную информацию для репетитора."
            maxLength={MAX_LENGTH}
            title={error}
          />
        </div>
      </div>
      <div className={styles.button}>
        <Button
          text="Связаться"
          variant="purple"
          disabled={selectedTime.time === '' || error !== ''}
          className={styles.button}
          onClick={onClose}
        />
      </div>
    </div>
  );
};
export default AddInfo;
