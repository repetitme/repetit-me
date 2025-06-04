import React, { useState } from 'react';

import styles from './index.module.scss';

import { TStarRatingProps } from './type';

const StarRating: React.FC<TStarRatingProps> = ({
  rating,
  size,
  onRatingChange
}) => {
  const [selectedRating, setSelectedRating] = useState(rating);
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);

  const handleStarClick = (index: number) => {
    const newRating = index + 1;
    setSelectedRating(newRating);
    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

  const stars = [...Array(5)].map((_, index) => {
    const isActive = index < (hoveredRating ?? selectedRating);

    return (
      <svg
        key={index}
        className={`${styles.star} ${
          isActive ? styles.active : styles.inactive
        }`}
        viewBox="0 0 16 16"
        width={size}
        height={size}
        onClick={() => handleStarClick(index)}
        onMouseOver={() => setHoveredRating(index + 1)}
        onMouseLeave={() => setHoveredRating(null)}
      >
        <path d="m8 11.953 4.635 2.797-1.23-5.273L15.5 5.93l-5.393-.457L8 .5 5.893 5.473.5 5.93l4.095 3.547-1.23 5.273L8 11.953Z" />
      </svg>
    );
  });

  return <div>{stars}</div>;
};

export default StarRating;
