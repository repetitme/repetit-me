import styles from './styles.module.css';
import { IconListProps } from './type';


export const iconSources = {
    student: [
      { src: "src/assets/images/StudentIcons/loupe.png", className: styles.loupe },
      { src: "src/assets/images/StudentIcons/toggle.png", className: styles.toggle },
      { src: "src/assets/images/StudentIcons/cone.png", className: styles.cone },
      { src: "src/assets/images/StudentIcons/bubble.png", className: styles.bubble },
      { src: "src/assets/images/StudentIcons/plus.png", className: styles.plus },
    ],
    teacher: [
      { src: "src/assets/images/TeacherIcons/triangle.png", className: styles.triangle },
      { src: "src/assets/images/TeacherIcons/cube.png", className: styles.cube },
      { src: "src/assets/images/TeacherIcons/ring.png", className: styles.ring },
      { src: "src/assets/images/TeacherIcons/spiral.png", className: styles.spiral },
    ],
  };

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