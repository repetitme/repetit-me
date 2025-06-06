import useClickOutside from '../../../../shared/hooks/useClickOutside';
import Button from '../../../../shared/ui/button';
import { ModalOverlay } from '../../../../shared/ui/overlay';
import { AvatarWrapper } from '../AvatarWrapper';

import styles from './index.module.scss';

interface AvatarUploadModalProps {
  onClose: () => void;
}

export const AvatarUploadModal = ({ onClose }: AvatarUploadModalProps) => {
  const modalRef = useClickOutside(onClose);
  return (
    <>
      <ModalOverlay onClose={onClose} />
      <div className={styles.modal} ref={modalRef}>
        <h5 className={styles.modal__title}>Каким должно быть фото</h5>
        <AvatarWrapper size={220} iconHeight={134} iconWidth={132} />
        <Button
          text="Загрузить фотографию"
          variant="white"
          className={styles.button}
        />
        <div className={styles.requirements}>
          <ul className={styles.requirements_approve}>
            Фото подойдет
            <li>На фото изображены вы</li>
            <li>Лицо видно полностью</li>
            <li>
              Фотография лучше цветная, с высоким разрешением и без фильтров
            </li>
          </ul>
          <ul className={styles.requirements_noapprove}>
            Фото не подойдет
            <li>На фото есть посторонние люди</li>
            <li>Это не ваше фото</li>
            <li>На фото есть запрещенные предметы</li>
          </ul>
        </div>
      </div>
    </>
  );
};
