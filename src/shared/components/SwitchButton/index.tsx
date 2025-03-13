import styles from './styles.module.css';
import { SwitchButtonProps } from './type';

const SwitchButton: React.FC<SwitchButtonProps> = ({ isActive, onSwitch }) => {
  return (
    <div className={styles.switch_background}>
      <button
        className={`${styles.button} ${isActive ? '' : styles.button_active}`}
        onClick={onSwitch}
      >
        Ученик
      </button>
      <button
        className={`${styles.button} ${isActive ? styles.button_active : ''}`}
        onClick={onSwitch}
      >
        Репетитор
      </button>
    </div>
  );
};
export default SwitchButton;
