import cn from 'classnames';

import bubble from '../../../assets/images/StudentIcons/bubble.svg';
import cone from '../../../assets/images/StudentIcons/cone.svg';
import loupe from '../../../assets/images/StudentIcons/loupe.svg';
import plus from '../../../assets/images/StudentIcons/plus.svg';
import toggle from '../../../assets/images/StudentIcons/toggle.svg';
import cube from '../../../assets/images/TeacherIcons/cube.svg';
import ring from '../../../assets/images/TeacherIcons/ring.svg';
import spiral from '../../../assets/images/TeacherIcons/spiral.svg';
import triangle from '../../../assets/images/TeacherIcons/triangle.svg';

import styles from './index.module.scss';

export const iconSources = (isActive: boolean) => [
  { src: loupe, className: cn(styles.loupe, { [styles.student]: !isActive }) },
  {
    src: toggle,
    className: cn(styles.toggle, { [styles.student]: !isActive })
  },
  { src: cone, className: cn(styles.cone, { [styles.student]: !isActive }) },
  {
    src: bubble,
    className: cn(styles.bubble, { [styles.student]: !isActive })
  },
  { src: plus, className: cn(styles.plus, { [styles.student]: !isActive }) },
  {
    src: triangle,
    className: cn(styles.triangle, { [styles.teacher]: isActive })
  },
  { src: cube, className: cn(styles.cube, { [styles.teacher]: isActive }) },
  { src: ring, className: cn(styles.ring, { [styles.teacher]: isActive }) },
  { src: spiral, className: cn(styles.spiral, { [styles.teacher]: isActive }) }
];
