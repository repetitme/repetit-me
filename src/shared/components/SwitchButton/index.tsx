import { useState } from 'react';
import styles from './styles.module.css';


const SwitchButton = () => {
  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <div className={styles.switch_background}>
      <button
        className={isActive ? styles.button : styles.button_active}
        onClick={handleClick}
      >
        Ученик
      </button>
      <button
      
        className={isActive ? styles.button_active : styles.button}
        onClick={handleClick}
      >
        Репетитор
      </button>
    </div>
  );
};
export default SwitchButton;
