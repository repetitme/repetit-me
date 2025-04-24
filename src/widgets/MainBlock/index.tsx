import styles from './index.module.scss';
import SwitchButton from '../../shared/components/SwitchButton';
import { useState } from 'react';
import IconList from '../../shared/components/IconsList';
import { iconSources } from '../../shared/components/IconsList/data';
import classNames from 'classnames';
import { MainBlockProps } from './type';


const MainBlock:React.FC<MainBlockProps> = ({ isActive, setIsActive }) => {

  const handleSwitch = () => {
    setIsActive(!isActive);
  };

  const icons = isActive ? iconSources.teacher : iconSources.student;

  return (
    <section className={styles.main__block}>
      <div
        className={classNames(styles.main__background, {
          [styles['main__background--teacher']]: isActive,
          [styles['main__background--student']]: !isActive
        })}
      >
        <div className={styles.main__info}>
          <div className={styles.main__switch}>
            <SwitchButton isActive={isActive} onSwitch={handleSwitch} />
          </div>
          <h1 className={styles.main__title}>
            RepetitMe — сервис подбора онлайн − репетиторов
          </h1>
          <p className={styles.main__text}>
            Ученикам помогем найти преподавателя для онлайн-занятий, а
            репетиторам увеличить свой поток клиентов на 30%
          </p>
          <button className={styles.main__button}>
            {isActive ? 'Заполнить анкету' : 'Подобрать репетитора'}
          </button>
        </div>
      </div>
      <IconList icons={icons} />
    </section>
  );
};

export default MainBlock;
