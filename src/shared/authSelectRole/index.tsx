import { FC, useEffect, useState } from "react";
import styles from './index.module.scss'



interface IAuthSelectRole {
    onChangeSelect: (role: string) => void;
}

export const AuthSelectRole: FC<IAuthSelectRole> = ({ onChangeSelect }) => {

    const [getRoleSelected, setRoleSelected] = useState<'pupil' | 'teacher'>('pupil');

    useEffect(() => {
        onChangeSelect(getRoleSelected);
    }, [getRoleSelected])

    return (
        <div className={styles['container-selectors']}>
            <button onClick={() => setRoleSelected('pupil')} className={getRoleSelected === 'pupil' ? styles['active-select'] : ''}>
                <p className={styles['button-text']}>Как ученик</p>
            </button>
            <button onClick={() => setRoleSelected('teacher')} className={getRoleSelected === 'teacher' ? styles['active-select'] : ''}>
                <p className={styles['button-text']}>Как репетитор</p>
            </button>
        </div>
    )
}