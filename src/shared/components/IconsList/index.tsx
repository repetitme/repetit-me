import styles from './styles.module.css';
import { IconListProps } from './type';


  const IconList: React.FC<IconListProps> = ({ icons }) => (
    <div className={styles.icons}>
      {icons.map((icon, index) => (
        <img
          key={index}
          src={icon.src}
          className={icon.className}
          alt="icon"
        />
      ))}
    </div>
  );

  export default IconList;