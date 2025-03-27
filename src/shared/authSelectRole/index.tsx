import { FC, useState } from "react";
import classNames from "classnames";
import styles from './index.module.scss';

interface IAuthSelectRole {
    onChangeSelect: (role: 'pupil' | 'teacher') => void;
}

export const AuthSelectRole: FC<IAuthSelectRole> = () => {
    const [selectedRole, setRoleSelected] = useState<'pupil' | 'teacher'>('pupil');

    const handleSelect = (role: 'pupil' | 'teacher') => () => setRoleSelected(role);


    return (
        <div className={styles['container-selectors']}>
            <button
                onClick={handleSelect('pupil')}
                className={classNames(
                    styles['container-selectors__button'],
                    { [styles['active-select']]: selectedRole === 'pupil' }
                )}
            >
                <p className={styles['container-selectors__button--text']}>Как ученик</p>
            </button>
            <button
                onClick={handleSelect('teacher')}
                className={classNames(
                    styles['container-selectors__button'],
                    { [styles['active-select']]: selectedRole === 'teacher' }
                )}
            >
                <p className={styles['container-selectors__button--text']}>Как репетитор</p>
            </button>
        </div>
    );
};
