import classNames from 'classnames';
import { useNavigate } from 'react-router';

import IconList from '../../shared/ui/iconsList';
import SwitchButton from '../../shared/ui/switchButton';

import styles from './index.module.scss';

import { MainBlockProps } from './type';

const MainBlock: React.FC<MainBlockProps> = ({ isActive, setIsActive }) => {
  const navigate = useNavigate();
  const handleSwitch = () => {
    setIsActive(!isActive);
  };
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
            Ученикам поможем найти преподавателя для онлайн-занятий, а
            репетиторам увеличить свой поток клиентов на 30%
          </p>
          <button
            className={styles.main__button}
            onClick={
              isActive
                ? () => navigate('/tutor-application')
                : () => navigate('/tutor-catalog')
            }
          >
            {isActive ? 'Заполнить анкету' : 'Подобрать репетитора'}
          </button>
        </div>
      </div>
      <IconList isActive={isActive} />
    </section>
  );
};
export default MainBlock;
