import { FC } from 'react';

import CloseIcon from '../../assets/icons/closeIcon.svg';
import AddInfo from '../../features/AddInfo';
import useClickOutside from '../../shared/hooks/useClickOutside';
import useScrollLock from '../../shared/hooks/useScrollLock';
import { IFreeTime } from '../../shared/types/userData';
import ModalOverlay from '../../shared/ui/overlay';
import FreeTimeTable from '../FreeTimeTable';

import styles from './index.module.scss';

interface IFreeTimeTable {
  freeTime: IFreeTime[];
  onClose: () => void;
  isOpen: boolean;
}

const FreeTimeTableModal: FC<IFreeTimeTable> = ({
  freeTime,
  onClose,
  isOpen
}) => {
  const modalRef = useClickOutside(onClose);
  useScrollLock(isOpen);

  return (
    <>
      <ModalOverlay onClose={onClose} />
      <div className={styles.container} ref={modalRef}>
        <div className={styles.container__header}>
          <h2 className={styles.container__header_title}>
            Связаться с репетитором
          </h2>
          <button className={styles.container__header_button} onClick={onClose}>
            <img
              src={CloseIcon}
              className={styles.container__header_button_img}
              alt="иконка для закрытия модального окна"
            />
          </button>
        </div>
        <div className={styles.container__table}>
          <FreeTimeTable freeTime={freeTime} />
        </div>
        <div className={styles.container__addInfo}>
          <AddInfo />
        </div>
      </div>
    </>
  );
};
export default FreeTimeTableModal;
