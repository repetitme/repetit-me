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
          strokeWidth={16}
          styles={{
            path: {
              stroke: 'url(#circleGradient)',
              strokeLinecap: "butt",
            },
            trail: {
              stroke: '#f0f0f0' // Цвет фоновой линии
            },
            text: {
              fill: '#333', // Цвет текста
              fontSize: '24px',
              fontWeight: 'bold'
            }
          }}
          text={`${progress}%`}
        />
        <GradientDefs />
      </div>

     
      <p>Скрыть анкету от учеников</p>
      <Switcher isActive={true} onChange={() => {}} />
    </div>
  );
};

export default ApplicationProgress;
