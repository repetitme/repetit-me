import { ICardContainer } from './type'
import styles from './index.module.scss';
import classNames from "classnames";
  
export const CardContainer: React.FC<ICardContainer> = ({ 
    title, 
    isHidden, 
    toggleVisibility, 
    children, 
    hiddenClassName,
    buttonText
}) => {
    const containerClasses = classNames(
        styles.container__content,
        {
            [styles[hiddenClassName]]: isHidden
        }
    );

    return (
        <div className={styles.container}>
            <h3 className={styles.container__header}>{title}</h3>
            <div className={containerClasses}>
                {children}
            </div>
            <button className={styles.container__button} onClick={toggleVisibility}>
                {isHidden ? `${buttonText}` : 'Скрыть'}
            </button>
        </div>
    );
};