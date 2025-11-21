import { useEffect } from 'react';

import { useNavigate } from 'react-router';

import backgroundStudent from '../../assets/images/StudentIcons/backgroundStudent.svg';
import backgroundTeacher from '../../assets/images/TeacherIcons/backgroundTeacher.svg';
import IconList from '../../shared/ui/iconsList';
import SwitchButton from '../../shared/ui/switchButton';

import styles from './index.module.scss';

import { MainBlockProps } from './type';

const MainBlock: React.FC<MainBlockProps> = ({ isActive, setIsActive }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const imgs = [backgroundStudent, backgroundTeacher];
    imgs.forEach((img) => {
      const image = new Image();
      image.src = img;
    });
  }, []);
  const handleSwitch = () => {
    setIsActive(!isActive);
  };
  return (
    <section className={styles.main__block}>
      <div
        className={styles.main__background}
        style={{
          backgroundImage: `url(${isActive ? backgroundTeacher : backgroundStudent})`
        }}
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
            onClick={() => {
              window.scrollTo(0, 0);
              isActive
                ? navigate('/tutor-application')
                : navigate('/tutor-catalog');
            }}
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
