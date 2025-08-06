import cn from 'classnames';

import styles from './index.module.scss';

import { SwitcherProps } from './type';

const Switcher = ({ isActive, onChange }: SwitcherProps) => {
  const handleSwitch = () => onChange(!isActive);

  return (
    <div className={styles.switcher}>
      <button
        type="button"
        className={cn(styles.switcher__button, {
          [styles['switcher__button--inactive']]: !isActive
        })}
        onClick={handleSwitch}
        aria-label="Видимость профиля"
        aria-pressed={isActive}
      />
    </div>
  );
};

export default Switcher;
