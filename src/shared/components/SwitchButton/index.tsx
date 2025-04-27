import classNames from 'classnames';

import styles from './index.module.scss';

import { SwitchButtonProps } from './type';

const SwitchButton: React.FC<SwitchButtonProps> = ({ isActive, onSwitch }) => {
  return (
    <div className={styles.switch__background}>
      <button
        className={classNames(styles.switch__button, {
          [styles['switch__button--active']]: !isActive
        })}
        onClick={onSwitch}
      >
        Ученик
      </button>
      <button
        className={classNames(styles.switch__button, {
          [styles['switch__button--active']]: isActive
        })}
        onClick={onSwitch}
      >
        Репетитор
      </button>
    </div>
  );
};

export default SwitchButton;
