import styles from './index.module.scss';
import { TStarRating } from './type';

const StarRating: React.FC<TStarRating> = ({ color, rating }) => {
  const stars = [...Array(5)].map((_, index) => {
    const isFilled = index < rating;

    return (
      <svg
        key={index}
        viewBox="0 0 16 15"
        width="18"
        height="18"
        fill={isFilled ? color : 'grey'}
      >
        <path d="m8 11.953 4.635 2.797-1.23-5.273L15.5 5.93l-5.393-.457L8 .5 5.893 5.473.5 5.93l4.095 3.547-1.23 5.273L8 11.953Z" />
      </svg>
    );
  });

  return <div className={styles.stars}>{stars}</div>;
};

export default StarRating;
