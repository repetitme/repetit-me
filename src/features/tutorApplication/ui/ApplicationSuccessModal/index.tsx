import { useRef } from 'react';

import cn from 'classnames';
import { useNavigate } from 'react-router';

import closeIcon from '../../../../assets/icons/closeIconWhite.svg';
import Button from '../../../../shared/ui/button';
import ModalOverlay from '../../../../shared/ui/overlay';

import styles from './index.module.scss';

interface ApplicationSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApplicationSuccessModal = ({
  isOpen,
  onClose
}: ApplicationSuccessModalProps) => {
  const navigate = useNavigate();

  const modalRef = useRef<HTMLDivElement>(null);

  const handleProfileClick = () => {
    onClose();
    navigate('/tutor-cabinet');
  };

  return (
    <>
      <div
        className={cn(styles.modal, { [styles.active]: isOpen })}
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className={styles.modal__close}>
          <img src={closeIcon} alt="иконка закрытия модального окна" />
        </button>

        <h3 className={styles.modal__title}>Анкета успешно сохранена!</h3>
        <p className={styles.modal__text}>
          Информация сохранилась у вас в профиле. <br /> Вы всегда можете
          вернуться и изменить данные в анкете. Переходите в личный кабинет и
          просматривайте заявки от учеников.
        </p>

        <Button
          text="Личный кабинет"
          variant="purple"
          className={styles.modal__button}
          onClick={handleProfileClick}
        />
      </div>
      <ModalOverlay onClose={onClose} isOpen={isOpen} />
    </>
  );
};
export default ApplicationSuccessModal;
