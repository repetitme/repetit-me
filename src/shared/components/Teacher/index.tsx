import SwitchButton from '../SwitchButton';
import styles from '../Student/styles.module.css';

const Teacher = () => {
    return (
      <div className={styles.main_block}>
      <div className={styles.background_student}>
        <div className={styles.info}>
          <div className={styles.switch}><SwitchButton></SwitchButton></div>
          <h1 className={styles.title}>
            RepetitMe — сервис подбора онлайн − репетиторов
          </h1>
          <p className={styles.text}>
            Ученикам поможем найти преподавателя для онлайн-занятий,
            а репетиторам увеличить свой поток клиентов на 30%
          </p>
          <button className={styles.button}>Заполнить анкету</button>
        </div>
        </div>
        <div className={styles.icons}>
        <img className={styles.triangle}  src="src\assets\images\TeacherIcons\triangle.png"></img>
        <img className={styles.cube}  src="src\assets\images\TeacherIcons\cube.png"></img>
        <img className={styles.ring}  src="src\assets\images\TeacherIcons\ring.png"></img>
        <img className={styles.spiral}  src="src\assets\images\TeacherIcons\spiral.png"></img>
        </div>
      </div>
      
    );
  };
  export default Teacher;