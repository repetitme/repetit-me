import { useRef } from 'react';

import Button from '../../../../shared/ui/button';
import { ModalOverlay } from '../../../../shared/ui/overlay';
import AvatarWrapper from '../AvatarWrapper';
import closeIcon from '../../../../assets/icons/closeIconWhite.svg'

import styles from './index.module.scss';

interface AvatarUploadModalProps {
  onClose: () => void;
  onUpload: (file: File) => void;
}

const AvatarUploadModal = ({ onClose, onUpload }: AvatarUploadModalProps) => {
  // const modalRef = useClickOutside(onClose);
  const modalRef = useRef<HTMLDivElement>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      onUpload(e.target.files[0]);
      onClose();
    }
  };

  return (
    <>
      <div
        className={styles.modal}
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className={styles.modal__close}>
              <img
                src={closeIcon}
                alt="иконка закрытия модального окна уведомления"
              />
            </button>
        <h5 className={styles.modal__title}>Каким должно быть фото</h5>
        <div className={styles.modal__content}>
        <div className={styles.modal__avatar}><AvatarWrapper size={220} iconHeight={134} iconWidth={132} />
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          style={{ display: 'none' }}
        />
        <Button
          text="Загрузить фотографию"
          variant="underline"
          onClick={() => fileInputRef.current?.click()}
          className={styles.modal__button}
        /></div>
        
        <div className={styles.requirements}>
          <p className={styles.requirement__title}>Фото подойдет</p>
          <ul>
            <li>На фото изображены вы</li>
            <li>Лицо видно полностью</li>
            <li>
              Фотография лучше цветная, с высоким разрешением и без фильтров
            </li>
          </ul>
          <p className={styles.requirement__title}>Фото подойдет</p>
          <ul >
            
            <li>На фото есть посторонние люди</li>
            <li>Это не ваше фото</li>
            <li>На фото есть запрещенные предметы</li>
          </ul>
        </div>
        </div>
      </div>
      <ModalOverlay onClose={onClose} />
    </>
  );
};

export default AvatarUploadModal;
