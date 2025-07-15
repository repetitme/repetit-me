import Switcher from '../../../../shared/ui/switcher';
import styles from './index.module.css';

type ApplicationProgressProps = {
  progress: number; // Процент заполненности (0-100)
};

export const ApplicationProgress = ({ progress }: ApplicationProgressProps) => {
  return (
    <div className={styles.wrapper}>
      <h3>Завершенность анкеты</h3>
      <div className={styles.progressBar}>
        <div style={{ width: `${progress}%` }} />
      </div>

      <span>{progress}%</span>
      <p>Скрыть анкету от учеников</p>
      <Switcher isActive={true} onChange={() => {}} />
    </div>
  );
};
