import { FC, useState } from "react";
import styles from './index.module.scss';

interface IAboutMe {
    textContent: string;
    servicesList: {
        [key: string]: number
    }
}

export const AboutMe: FC<IAboutMe> = ({ textContent, servicesList }) => {
    const [aboutMeHidden, setAboutMeHidden] = useState(true);
    const [listHidden, setListHidden] = useState(true)

    const toggleAboutMeVisibility = () => {
        setAboutMeHidden(!aboutMeHidden);
    };

    const toggleListVisibility = () => {
        setListHidden(!listHidden);
    };

    return (
        <>
            <div className={`${styles.container} ${styles.about}`}>
                <h3 className={styles.container__header}>Обо мне</h3>
                <div className={`${styles.container__content} ${aboutMeHidden ? styles.container__content_text_hidden : ''}`}>
                    <p className={styles.container__content_text}>
                        {textContent}
                    </p>
                </div>
                <button className={styles.container__button} onClick={toggleAboutMeVisibility}>{aboutMeHidden ? 'Читать дальше' : 'Скрыть'}</button>
            </div>
            <div className={styles.container}>
                <h3 className={styles.container__header}>Услуги и цены</h3>
                <div className={`${styles.container__content} ${listHidden ? styles.container__content_list_hidden : ''}`}>
                    <ul className={styles.container__content_list}>
                        {Object.entries(servicesList).map(([service, price]) => (
                            <li key={service} className={styles.container__content_list_item}>
                                <span>{service}</span> <span>{price} руб./час</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <button className={styles.container__button} onClick={toggleListVisibility}>{listHidden ? 'Читать дальше' : 'Скрыть'}</button>
            </div>
        </>
    );
};