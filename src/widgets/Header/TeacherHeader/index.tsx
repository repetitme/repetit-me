import React from 'react';

const TeacherHeader: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
    return (
        <nav>
            <button>Анкета</button>
            <button>Мои заявки</button>
            <button>Личный кабинет</button>
            <div  onClick={onLogout}>
                <img src='src\assets\images\avatar.svg'/>
                <img src='src\assets\images\arrow.svg'/>
            </div>
        </nav>
    );
};

export default TeacherHeader;