
import styles from './styles.module.css';
import SwitchButton from '../SwitchButton';

const Student = () => {
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
          <button className={styles.button}>Подобрать репетитора</button>
        </div>
      </div>
      <div className={styles.icons}>
        <img className={styles.loupe} src="src\assets\images\StudentIcons\loupe.png"></img>
        <img className={styles.toggle} src="src\assets\images\StudentIcons\toggle.png"></img>
        <img className={styles.cone} src="src\assets\images\StudentIcons\cone.png"></img>
        <img className={styles.bubble} src="src\assets\images\StudentIcons\bubble.png"></img>
        <img className={styles.plus} src="src\assets\images\StudentIcons\plus.png"></img>
      </div>
    </div>
    
  );
  
};
export default Student;
