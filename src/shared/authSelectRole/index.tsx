import { FC, useState } from "react";
import classNames from "classnames";
import styles from './index.module.scss';

interface IAuthSelectRole {
    onChangeSelect: (value: 'Как ученик' | 'Как репетитор') => void;
}

export enum FormTabs {
    STUDENT = 'Как ученик',
    TUTOR = 'Как репетитор'
  }

export const AuthSelectRole: FC<IAuthSelectRole> = ({ onChangeSelect }) => {
    const [selectedRole, setRoleSelected] = useState<'Как ученик' | 'Как репетитор'>('Как ученик');

    const handleSelect = (role: 'Как ученик' | 'Как репетитор') => () => {
        setRoleSelected(role);
        onChangeSelect(role);
    };


    return (
        <div className={styles['container-selectors']}>
            <button
                onClick={handleSelect('Как ученик')}
                className={classNames(
                    styles['container-selectors__button'],
                    { [styles['active-select']]: selectedRole === 'Как ученик' }
                )}
            >
                <p className={styles['container-selectors__button--text']}>Как ученик</p>
            </button>
            <button
                onClick={handleSelect('Как репетитор')}
                className={classNames(
                    styles['container-selectors__button'],
                    { [styles['active-select']]: selectedRole === 'Как репетитор' }
                )}
            >
                <p className={styles['container-selectors__button--text']}>Как репетитор</p>
            </button>
        </div>
    );
};
