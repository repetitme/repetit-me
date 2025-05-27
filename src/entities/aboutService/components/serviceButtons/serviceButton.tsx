import { IServiceButtons } from './type'
import styles from './index.module.scss'

export const ServiceButton: React.FC<IServiceButtons> = ({ title, icon, onModal}) => {

    return (
        <button className={styles.button} onClick={onModal}>
            <p className={styles.button__title}>{title}</p>
            <img src={icon} alt={`${title} icon`} className={styles.button__icon}></img>
        </button>
    )
};