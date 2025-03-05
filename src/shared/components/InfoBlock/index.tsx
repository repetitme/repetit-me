import styles from './index.module.scss';

type TInfoBlock = {
  title: string;
  children: string;
};

export const InfoBlock: React.FC<TInfoBlock> = ({ title, children }) => {
  return (
    <div className={styles.block}>
      <h3 className={styles.block__title}>{title}</h3>
      <p className={styles.block__txt}>{children}</p>
    </div>
  );
};
