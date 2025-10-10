import { useEffect, useState } from 'react';

import iconAdd from '../../../../../../assets/icons/iconAdd.svg';
import { PopupContentURL } from '../popupContentURL';

import styles from './index.module.scss';

import { IPopupContentList } from './type';

export const PopupContentList: React.FC<IPopupContentList> = ({
  onListChange,
  onErrorChange
}) => {
  const [items, setItems] = useState<React.ReactNode[]>([]);
  const [urlErrors, setUrlErrors] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    if (onListChange) {
      onListChange(items);
    }
  }, [items, onListChange]);

  useEffect(() => {
    const hasErrors = Object.values(urlErrors).some((error) => error !== '');
    if (onErrorChange) {
      onErrorChange(hasErrors);
    }
  }, [urlErrors, onErrorChange]);

  const handleUrlErrorChange = (index: number, error: string) => {
    setUrlErrors((prev) => ({
      ...prev,
      [index]: error
    }));
  };

  const handleAddClick = () => {
    if (items.length < 10) {
      const newIndex = items.length;
      setItems([
        ...items,
        <PopupContentURL
          inputName={`Ссылка ${items.length + 1}`}
          url=""
          readOnly={false}
          key={items.length}
          onErrorChange={(error) => handleUrlErrorChange(newIndex, error)}
        />
      ]);
    }
  };

  return (
    <div className={styles.popup__content_list}>
      <div className={styles.popup__content_list_container}>{items}</div>
      <button
        onClick={handleAddClick}
        className={styles.popup__content_list_button}
        disabled={items.length >= 10}
      >
        <img
          src={iconAdd}
          alt="Добавить"
          className={styles.popup__content_list_button_image}
        ></img>
        Добавить ссылку
        <span className={styles.popup__content_list_button_amount}>
          {' '}
          (доступно {10 - items.length} из 10)
        </span>
      </button>
    </div>
  );
};
