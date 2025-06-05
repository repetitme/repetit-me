import styles from './index.module.scss';

type StepTitleProps = { titles: string[] };

const StepTitles = ({ titles }: StepTitleProps) => {
  return (
    <div className={styles.wrapper}>
      {titles.map((title) => (
        <span className={styles.title} key={title}>
          {title}
        </span>
      ))}
    </div>
  );
};

export default StepTitles;
