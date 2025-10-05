import React from 'react';

import cn from 'classnames';

import Button from '../../../../shared/ui/button';
import { modalContent } from '../../data';

import styles from './index.module.scss';

interface ModalContentProps {
  type: 'submit' | 'filter';
  onClose: () => void;
}

const ModalContent: React.FC<ModalContentProps> = ({ type, onClose }) => {
  const isSubmit = type === 'submit';

  return (
    <div className={styles.modal}>
      <div className={styles.modal__context}>
        <h3 className={styles['modal__context--title']}>
          {isSubmit ? modalContent.submit.title : modalContent.filter.title}
        </h3>
        <p className={styles['modal__context--text']}>
          {isSubmit ? modalContent.submit.text : modalContent.filter.text}
        </p>
      </div>
      <div className={styles.modal__buttons}>
        <Button
          text={
            isSubmit
              ? modalContent.submit.button
              : modalContent.filter.button.first
          }
          variant={isSubmit ? 'purple' : 'white'}
          size="large"
          onClick={onClose}
          className={cn(
            styles['modal__buttons--item'],
            isSubmit && styles['modal__buttons--item-second']
          )}
        />
        {!isSubmit && (
          <Button
            text={modalContent.filter.button.second}
            variant="white"
            size="large"
            onClick={onClose}
            className={styles['modal__buttons--item']}
          />
        )}
      </div>
    </div>
  );
};

export default ModalContent;
