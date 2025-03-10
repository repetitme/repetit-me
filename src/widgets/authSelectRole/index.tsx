import { FC, useEffect, useState } from "react";
import styles from './authSelectRole.module.scss'



interface IAuthSelectRole {
    OnChangeSelect: (role: string) => void;
}

export const AuthSelectRole: FC<IAuthSelectRole> = ({ OnChangeSelect }) => {

    const [getRoleSelected, setRoleSelected] = useState<'pupil' | 'teacher'>('pupil');

    useEffect(() => {
        OnChangeSelect(getRoleSelected);
    }, [getRoleSelected])

    return (
        <div className={styles.containerSelectors}>
            <div onClick={() => setRoleSelected('pupil')} className={getRoleSelected === 'pupil' ? `${styles.activeSelect}` : ''}><p>Как ученик</p></div>
            <div onClick={() => setRoleSelected('teacher')} className={getRoleSelected === 'teacher' ? `${styles.activeSelect}` : ''}><p>Как репетитор</p></div>
        </div>
    )
}