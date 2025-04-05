import styles from './index.module.scss';
import { IconListProps, IconProps } from './type';

const Icon: React.FC<IconProps> = ({ src, className, alt = 'icon' }) => (
  <img src={src} className={className} alt={alt} />
);

const IconList: React.FC<IconListProps> = ({ icons }) => (
  <div className={styles.icons}>
    {icons.map((icon, index) => (
      <Icon key={index} {...icon} />
    ))}
  </div>
);

export default IconList;
