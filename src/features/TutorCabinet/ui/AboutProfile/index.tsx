import styles from './index.module.scss';
import { IAboutProfile } from './type';

import bookshelf from '../../../../assets/icons/bookshelf.svg';
import peoples from '../../../../assets/icons/peoples.svg';
import bachelorCap from '../../../../assets/icons/bachelor-cap.svg';

const AboutProfile = ({ studentInfo }: IAboutProfile) => {

    return (
        <div className={styles.profile__container}>
            <div className={styles.profile__textContainer}>
                <div className={styles.profile__textContainer_accent}>
                    <p className={styles.profile__studentName}>{studentInfo.name}</p>
                    <p className={styles.profile__lessonsAmount}>Пройдено занятий: {studentInfo.lessonsAmount}</p>
                    {studentInfo.debt ? <p className={styles.profile__debt}>Задолженность по комиссии: {studentInfo.debt} руб.</p> : <></>}
                </div>
                <p className={styles.profile__price}>{studentInfo.price} руб./час</p>
                {studentInfo.addInfo ? <p className={styles.profile__addInfo}>Доп. информация: <span className={styles.profile__addInfo_secondary}>{studentInfo.addInfo}</span></p> : <></>}
            </div>
            {studentInfo.isLessonStarted ? <div className={`${styles.profile__lessonTag} ${styles.profile__lessonTag_active}`}>Занятия начались</div> : <div className={`${styles.profile__lessonTag} ${styles.profile__lessonTag_inactive}`}>Занятия не начались</div>}
            <div className={styles.profile__tagContainer}>
                <div className={styles.profile__listContainer}>
                    <img src={bookshelf}></img>
                    <ul className={styles.profile__tagList}>
                        {studentInfo.subjectTag.map((subject, index) => (
                        <li key={index} className={styles.profile__tag}>{subject}</li>
                    ))}
                    </ul>
                </div>
                <div className={styles.profile__listContainer}>
                    <img src={peoples}></img>
                    <ul className={styles.profile__tagList}>
                        {studentInfo.gradeTag.map((grade, index) => (
                        <li key={index} className={styles.profile__tag}>{grade}</li>
                    ))}
                    </ul>
                </div>
                <div className={styles.profile__listContainer}>
                    <img src={bachelorCap}></img>
                    <ul className={styles.profile__tagList}>
                        {studentInfo.preparationsTag.map((prep, index) => (
                        <li key={index} className={styles.profile__tag}>{prep}</li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutProfile;