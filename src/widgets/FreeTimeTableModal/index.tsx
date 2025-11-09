import { FC } from 'react';

import CloseIcon from '../../assets/icons/closeIcon.svg';
import { IFreeTime } from '../../shared/types/userData';
import Popup from '../../shared/ui/popup/popup';
import FreeTimeTable from '../FreeTimeTable';
import AddInfo from './AddInfo';

import styles from './index.module.scss';

interface IFreeTimeTable {
  requestTutor: () => void;
  freeTime: IFreeTime[];
  onClose: () => void;
  isOpen: boolean;
}

const FreeTimeTableModal: FC<IFreeTimeTable> = ({
  requestTutor,
  freeTime,
  onClose,
  isOpen
}) => {
  return (
    <Popup
      isOpen={isOpen}
      close={onClose}
      children={
        <div className={styles.container}>
          <div className={styles.container__content}>
            <div className={styles.container__content_header}>
              <h2 className={styles.container__content_header_title}>
                Связаться с репетитором
              </h2>
              <button
                className={styles.container__content_header_button}
                onClick={onClose}
              >
                <img
                  src={CloseIcon}
                  className={styles.container__content_header_button_img}
                  alt="иконка для закрытия модального окна"
                />
              </button>
            </div>
            <div className={styles.container__content_table}>
              <FreeTimeTable freeTime={freeTime} />
            </div>
            <div className={styles.container__content_addInfo}>
              <AddInfo
                onClose={() => {
                  requestTutor();
                  onClose();
                }}
              />
            </div>
          </div>
        </div>
      }
    />
  );
};
export default FreeTimeTableModal;
