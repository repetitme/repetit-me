import React from 'react'
import { ILessonsList } from './type.ts'
import styles from './index.module.scss'

export const LessonsList: React.FC<ILessonsList> = ({
    children,
    status
}) => {
    const setStatus = status === 'paid'
        ? 'Список уроков пуст'
        : 'Задолженностей по комиссии нет';

    return (
        <div className={styles.lessonsList}>
            {React.Children.count(children) > 0 ? (
                children
            ) : (
                <div className={styles.lessonsList__empty}>
                    {setStatus}
                </div>
            )}
        </div>
    )
}
