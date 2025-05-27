import { IButtonsContainer } from './type'
import styles from './index.module.scss'

export const ButtonsContainer: React.FC<IButtonsContainer> = ({ children }) => {
    return (
        <div className={styles.buttons__container}>{children}</div>
    )
}