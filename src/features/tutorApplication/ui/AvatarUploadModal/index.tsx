import { useEffect, useRef, useState } from 'react';

import closeIcon from '../../../../assets/icons/closeIconWhite.svg';
import Button from '../../../../shared/ui/button';
import { ModalOverlay } from '../../../../shared/ui/overlay';
import AvatarBlock from '../AvatarBlock';

import styles from './index.module.scss';
import useFileUpload from '../../../../shared/hooks/useFileUpload'

interface AvatarUploadModalProps {
  onClose: (file?: File) => void;
  previewAvatar?: string;
}

const AvatarUploadModal = ({
  onClose,
  previewAvatar
}: AvatarUploadModalProps) => {
  // const modalRef = useClickOutside(() => handleClose());
  const modalRef = useRef<HTMLDivElement>(null);

  const {
    files,
    handleFileChange,
    triggerFileSelect,
    fileInputRef,
    errorMessage
  } = useFileUpload({
    maxFiles: 1, // Только 1 файл
    acceptTypes: ['image/jpeg', 'image/png', 'image/webp'] // Только изображения
  });

   const [avatarPreview, setAvatarPreview] = useState<string | undefined>(previewAvatar);
  
  useEffect(() => {
    if (files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatarPreview(e.target?.result as string);
      };
      reader.readAsDataURL(files[0]);
    }
  }, [files]);

  const handleClose = () => {
    onClose(files[0]); // Передаем выбранный файл при закрытии
  };


  // const fileInputRef = useRef<HTMLInputElement>(null);
  // const [avatarPreview, setAvatarPreview] = useState<string | undefined>(
  //   previewAvatar
  // );
  // const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files?.[0]) {
  //     const file = e.target.files[0];
  //     setSelectedFile(file);

  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       setAvatarPreview(e.target?.result as string);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  // const handleClose = () => {
  //   onClose(selectedFile || undefined);
  // };

  return (
    <>
      <div
        className={styles.modal}
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
              accept="image/*"
              style={{ display: 'none' }}
            />
            {errorMessage && <div className={styles.error}>{errorMessage}</div>}
            <Button
              text="Загрузить фотографию"
              variant="underline"
              onClick={() => fileInputRef.current?.click()}
              className={styles.modal__button}
            />
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
      <ModalOverlay onClose={handleClose} />
    </>
  );
};

export default AvatarUploadModal;
