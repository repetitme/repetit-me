import React, { useState } from 'react';

import icon from '../../../assets/Icon_Sorting.svg';

import styles from './index.module.scss';

interface IReview {
  id: string;
  author: string;
  content: string;
  date: Date;
  rating: number;
}

const initialReviews: IReview[] = [
  {
    id: '1',
    author: 'Sergey',
    content: 'Отличный сервис!',
    date: new Date('2025-04-07'),
    rating: 5
  },
  {
    id: '2',
    author: 'Evgeny',
    content: 'Хороший репетор.',
    date: new Date('2024-08-20'),
    rating: 3
  },
  {
    id: '3',
    author: 'Pavel',
    content: 'Прекрасный опыт!',
    date: new Date('2023-10-05'),
    rating: 4
  }
];

const ReviewList: React.FC = () => {
  const [reviews, setReviews] = useState<IReview[]>(initialReviews);
  const [isAscending, setIsAscending] = useState<boolean>(true);

  const sortReviewsByDate = () => {
    const sortedReviews = [...reviews].sort((a, b) => {
      return isAscending
        ? a.date.getTime() - b.date.getTime()
        : b.date.getTime() - a.date.getTime();
    });

    setReviews(sortedReviews);
    setIsAscending(!isAscending);
  };

  return (
    <div>
      <button className={styles.sort} onClick={sortReviewsByDate}>
        {isAscending ? 'Сначала новые' : 'Сначала старые'}
        <img src={icon} />
      </button>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <h2>{review.author}</h2>
            <p>{review.content}</p>
            <p>{review.rating}</p>
            <p>{review.date.toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
