import styles from './styles.module.css';
import SwitchButton from '../../shared/components/SwitchButton';
import { useState } from 'react';
import IconList from '../../shared/components/IconsList';
import { iconSources } from '../../shared/components/IconsList/data';


const MainBlock = () => {
  const [isActive, setIsActive] = useState(false);

  const handleSwitch = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <section className={styles.main_block}>
      <div
        className={`${styles.background} ${isActive ? styles.background_teacher : styles.background_student}`}>
        <div className={styles.info}>
          <div className={styles.switch}>
            <SwitchButton isActive={isActive} onSwitch={handleSwitch} />
          </div>
          <h1 className={styles.title}>
            RepetitMe — сервис подбора онлайн − репетиторов
          </h1>
          <p className={styles.text}>
            Ученикам помогем найти преподавателя для онлайн-занятий, а
            репетиторам увеличить свой поток клиентов на 30%
          </p>
          <button className={styles.button}>
            {isActive ? 'Заполнить анкету' : 'Подобрать репетитора'}
          </button>
        </div>
      </div>
      {isActive ? (
        <IconList icons={iconSources.teacher} />
      ) : (
        <IconList icons={iconSources.student} />
      )}
    </section>
  );
};

export default MainBlock;
