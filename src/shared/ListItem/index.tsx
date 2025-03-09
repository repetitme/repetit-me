import styles from './index.module.scss';

type TListItemProps = {
  title: string;
  children: string;
  image: string;
  alt: string;
};

export const ListItem: React.FC<TListItemProps> = ({
  title,
  children,
  image,
  alt
}) => {
  return (
    <li className={styles.item}>
      <div className={styles.circle}>01</div>
      <div className={styles.content}>
        <h3 className={styles.content__title}>{title}</h3>
        <p className={styles.content__txt}>{children}</p>
      </div>
      <div className={styles.elipse}>
        <img src={image} alt={alt} />
      </div>
    </li>
  );
};
