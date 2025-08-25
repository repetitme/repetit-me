import { useEffect, useState } from 'react';

import iconAdd from '../../../../../../assets/icons/iconAdd.svg';
import { PopupContentURL } from '../popupContentURL';

import styles from './index.module.scss';

import { IPopupContentList } from './type';

export const PopupContentList: React.FC<IPopupContentList> = ({
  onListChange
}) => {
  const [items, setItems] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    if (onListChange) {
      onListChange(items);
    }
  }, [items, onListChange]);

  const handleAddClick = () => {
    if (items.length < 10) {
      setItems([
        ...items,
        <PopupContentURL
          inputName={`Ссылка ${items.length + 1}`}
          url=""
          readOnly={false}
          key={items.length}
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
