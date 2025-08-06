import cn from 'classnames';

import styles from './index.module.scss';

import { SwitcherProps } from './type';

const Switcher = ({ isActive, onChange }: SwitcherProps) => {
  const handleSwitch = () => onChange(!isActive);

  return (
    <button
      type="button"
      className={cn(styles.switcher, {
        [styles.active]: isActive
      })}
      onClick={handleSwitch}
      aria-pressed={isActive}
      aria-label={isActive ? 'Профиль виден' : 'Профиль скрыт'}
    >
      <span className={styles.thumb} />
    </button>
  );
};

export default Switcher;
