import React, { useState } from 'react';

import { TStarRatingProps } from './type';

const StarRating: React.FC<TStarRatingProps> = ({
  rating,
  size,
  onRatingChange
}) => {
  const [selectedRating, setSelectedRating] = useState(rating);

  const handleStarClick = (index: number) => {
    const newRating = index + 1;
    setSelectedRating(newRating);
    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

  const stars = [...Array(5)].map((_, index) => {
    const isFilled = index < selectedRating;

    return (
      <svg
        key={index}
        viewBox="0 0 16 15"
        width={size}
        height={size}
        fill={isFilled ? '#F6DA43' : '#DDD'}
        onClick={() => handleStarClick(index)}
        style={{ cursor: 'pointer' }}
      >
        <path d="m8 11.953 4.635 2.797-1.23-5.273L15.5 5.93l-5.393-.457L8 .5 5.893 5.473.5 5.93l4.095 3.547-1.23 5.273L8 11.953Z" />
      </svg>
    );
  });

  return <div>{stars}</div>;
};

export default StarRating;