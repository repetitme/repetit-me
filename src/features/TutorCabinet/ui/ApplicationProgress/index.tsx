import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import Switcher from '../../../../shared/ui/switcher';
import { GradientDefs } from './gradientDefs';

import styles from './index.module.scss';

import { ApplicationProgressProps } from './type';

const ApplicationProgress = ({
  progress = 90,
  isApplicationHidden,
  onToggleVisibility
}: ApplicationProgressProps) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Завершенность анкеты</h3>
      <div className={styles.circleProgress}>
        <CircularProgressbar
          value={progress}
          strokeWidth={14}
          styles={{
            path: {
              stroke: 'url(#circleGradient)',
              strokeLinecap: 'butt'
            },
            trail: {
              stroke: '#f0f0f0'
            },
            text: {
              fill: 'url(#textGradient)',
              fontFamily: 'var(--ffm-title)',
              fontSize: '18px',
              fontWeight: '500',
              paintOrder: 'stroke'
            }
          }}
          text={`${progress}%`}
        />
        <GradientDefs />
      </div>
      <div className={styles.switcher}>
        <p className={styles.switcher__text}>Скрыть анкету от учеников</p>
        <Switcher
          isActive={!isApplicationHidden}
          onChange={onToggleVisibility}
        />
      </div>
    </div>
  );
};

export default ApplicationProgress;
