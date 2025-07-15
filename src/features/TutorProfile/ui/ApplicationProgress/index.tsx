import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import Switcher from '../../../../shared/ui/switcher';
import { GradientDefs } from './gradientDefs';

import styles from './index.module.scss';

type ApplicationProgressProps = {
  progress?: number;
};

const ApplicationProgress = ({ progress = 90 }: ApplicationProgressProps) => {
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
              fill: 'url(#circleGradient)',
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
        <Switcher isActive={true} onChange={() => {}} />
      </div>
    </div>
  );
};

export default ApplicationProgress;
