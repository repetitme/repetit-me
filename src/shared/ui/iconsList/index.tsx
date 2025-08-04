import cn from 'classnames';

import { iconSources } from './data';

import styles from './index.module.scss';

import { IconListProps, IconProps } from './type';

const Icon: React.FC<IconProps> = ({ src, className, alt = 'icon' }) => (
  <img src={src} className={cn(className, styles.icon)} alt={alt} />
);

const IconList: React.FC<IconListProps> = ({ isActive }) => {
  return (
    <div className={styles.icons}>
      {iconSources(isActive).map((icon, index) => (
        <Icon key={index} {...icon} />
      ))}
    </div>
  );
};

export default IconList;
