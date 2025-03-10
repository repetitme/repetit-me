import { FC, useEffect, useState } from "react";
import styles from './authSelectRole.module.scss'



interface IAuthSelectRole {
    OnChangeSelect: (role: string) => void;
}

const AuthSelectRole: FC<IAuthSelectRole> = ({ OnChangeSelect }) => {

    const [getRoleSelected, setRoleSelected] = useState<'Как ученик' | 'Как репетитор'>('Как ученик');

    useEffect(() => {
        OnChangeSelect(getRoleSelected);
    }, [getRoleSelected])

    return (
        <div className={styles['container-selectors']}>
            <div onClick={() => setRoleSelected('Как ученик')} className={getRoleSelected === 'Как ученик' ? styles['active-select'] : ''}><p>Как ученик</p></div>
            <div onClick={() => setRoleSelected('Как репетитор')} className={getRoleSelected === 'Как репетитор' ? styles['active-select'] : ''}><p>Как репетитор</p></div>
        </div>
    )
}

export default AuthSelectRole;