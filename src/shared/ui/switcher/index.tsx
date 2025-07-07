import cn from 'classnames';

import styles from './index.module.scss';

import { SwitcherProps } from './type';

const Switcher: React.FC<SwitcherProps> = ({ isActive, onChange }) => {
  const handleSwitch = () => {
    onChange(!isActive);
  };

  return (
    <div className={styles.switcher} onClick={handleSwitch}>
      <button
        className={cn(styles.switcher__button, {
          [styles['switcher__button--inactive']]: !isActive
        })}
      />
    </div>
  );
};

export default Switcher;
