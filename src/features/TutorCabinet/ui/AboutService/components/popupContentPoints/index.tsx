import { PopupContentURL } from '../popupContentURL';

import styles from './index.module.scss';

import { IPopupContentPoints } from './type';

export const PopupContentPoints: React.FC<IPopupContentPoints> = ({
  inputName,
  url,
  points
}) => {
  return (
    <div className={styles.popup__content_points}>
      <PopupContentURL
        inputName={inputName}
        readOnly={true}
        url={url}
      ></PopupContentURL>
      <div className={styles.popup__content_points_container}>
        <p className={styles.popup__content_points_text}>Количество баллов:</p>
        <p className={styles.popup__content_points_number}>{points}</p>
      </div>
    </div>
  );
};
