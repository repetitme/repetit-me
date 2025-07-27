import cn from 'classnames';

import styles from './index.module.scss';

export const iconSources = (isActive: boolean) => [
  {
    src: '../../../assets/images/StudentIcons/loupe.svg',
    className: cn(styles.loupe, {[styles.student]: !isActive})
  },
  {
    src: '../../../assets/images/StudentIcons/toggle.svg',
    className: cn(styles.toggle,  {[styles.student]: !isActive})
  },
  {
    src: '../../../assets/images/StudentIcons/cone.svg',
    className: cn(styles.cone,  {[styles.student]: !isActive})
  },
  {
    src: '../../../assets/images/StudentIcons/bubble.svg',
    className: cn(styles.bubble,  {[styles.student]: !isActive})
  },
  {
    src: '../../../assets/images/StudentIcons/plus.svg',
    className: cn(styles.plus,  {[styles.student]: !isActive})
  },
  {
    src: '../../../assets/images/TeacherIcons/triangle.svg',
    className: cn(styles.triangle,  {[styles.teacher]: isActive})
  },
  {
    src: '../../../assets/images/TeacherIcons/cube.svg',
    className: cn(styles.cube,  {[styles.teacher]: isActive})
  },
  {
    src: '../../../assets/images/TeacherIcons/ring.svg',
    className: cn(styles.ring,  {[styles.teacher]: isActive})
  },
  {
    src: '../../../assets/images/TeacherIcons/spiral.svg',
    className: cn(styles.spiral,  {[styles.teacher]: isActive})
  }
];
