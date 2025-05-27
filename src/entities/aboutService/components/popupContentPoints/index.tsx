import { IPopupContentPoints } from './type';
import styles from './index.module.scss';
import { PopupContentURL } from '../popupContentURL';

export const PopupContentPoints: React.FC<IPopupContentPoints> = ({inputName, icon, url, points}) => {
  return (
    <div className={styles.popup__content_points}>
        <PopupContentURL inputName={inputName} icon={icon} url={url}></PopupContentURL>
        <div className={styles.popup__content_points_container}>
            <p className={styles.popup__content_points_text}>Количество баллов:</p>
            <p className={styles.popup__content_points_number}>{points}</p>
        </div>
    </div>

  );
};