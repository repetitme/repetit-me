import React from 'react';
import styles from '../styles.module.css'

const StudentHeader: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
    return (
        <nav className={styles.menu}>
            <button  className={styles.button}>Мои заявки</button>
            <button className={styles.button}>Репетиторы</button>
            <div className={styles.avatar} onClick={onLogout}>
                <img src='src\assets\images\avatar.svg'/>
                <img src='src\assets\images\arrow.svg'/>
            </div>
        </nav>
    );
};

export default StudentHeader;