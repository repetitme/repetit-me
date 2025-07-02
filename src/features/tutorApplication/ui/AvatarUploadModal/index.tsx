import { useEffect, useRef, useState } from 'react';

import cn from 'classnames';

import closeIcon from '../../../../assets/icons/closeIconWhite.svg';
import { useFileUpload } from '../../../../shared/hooks/useFileUpload';
import Button from '../../../../shared/ui/button';
import ModalOverlay from '../../../../shared/ui/overlay';
import AvatarBlock from '../AvatarBlock';

import styles from './index.module.scss';

const MAX_AVATAR_SIZE = 5 * 1024 * 1024;

interface AvatarUploadModalProps {
  onClose: (file?: File) => void;
  previewAvatar?: string;
}

const AvatarUploadModal = ({
  onClose,
  previewAvatar
}: AvatarUploadModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { handleFileChange, triggerFileSelect, fileInputRef, errorMessage } =
    useFileUpload({
      files,
      setFiles,
      maxFiles: 1,
      acceptTypes: ['image/jpeg', 'image/png', 'image/webp'],
      typeConstraints: {
        'image/jpeg': { maxSizeBytes: MAX_AVATAR_SIZE },
        'image/png': { maxSizeBytes: MAX_AVATAR_SIZE },
        'image/webp': { maxSizeBytes: MAX_AVATAR_SIZE }
      }
    });

  const [avatarPreview, setAvatarPreview] = useState<string | undefined>(
    previewAvatar
  );

  useEffect(() => {
    setIsModalOpen(true);

    if (files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatarPreview(e.target?.result as string);
      };
      reader.readAsDataURL(files[0]);
    } else {
      setAvatarPreview(previewAvatar);
    }
  }, [files]);

  const handleClose = () => {
    setIsModalOpen(false);
    setTimeout(() => onClose(files[0]), 300);
  };

  return (
    <>
      <div
        className={cn(styles.modal, { [styles.active]: isModalOpen })}
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={handleClose} className={styles.modal__close}>
          <img src={closeIcon} alt="иконка закрытия модального окна" />
        </button>
        <h5 className={styles.modal__title}>Каким должно быть фото</h5>
        <div className={styles.modal__content}>
          <div className={styles.modal__avatar}>
            <AvatarBlock
              size={220}
              iconHeight={134}
              iconWidth={132}
              avatarUrl={avatarPreview}
            />
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/jpeg, image/png, image/webp"
              style={{ display: 'none' }}
            />

            <Button
              text="Загрузить фотографию"
              variant="underline"
              onClick={triggerFileSelect}
              className={styles.modal__button}
            />
            {errorMessage && (
              <div className={styles.modal__error}>{errorMessage}</div>
            )}
          </div>

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
            <ul>
              <li>На фото есть посторонние люди</li>
              <li>Это не ваше фото</li>
              <li>На фото есть запрещенные предметы</li>
            </ul>
          </div>
        </div>
      </div>
      <ModalOverlay onClose={handleClose} isOpen={isModalOpen} />
    </>
  );
};

export default AvatarUploadModal;
