import { IServiceButtons } from './type'
import styles from './index.module.scss'

export const ServiceURL: React.FC<IServiceButtons> = ({ title, icon, url}) => {

    return (
        <a className={styles.button} href={url}>
            <p className={styles.button__title}>{title}</p>
            <img src={icon} alt={`${title} icon`} className={styles.button__icon}></img>
        </a>
    )
};