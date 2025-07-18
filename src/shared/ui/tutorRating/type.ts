export interface TutorRatingProps {
  variant: 'small' | 'medium' | 'onCard' | 'onProfile';
  //variant: small - рейтинг-звезда на карточке с краткой информацией, medium - рейтинг на модальном окне с отзывами, 'onCard' - рейтинг на карточке с полной информацией, 'onProfile' - в профиле преподавателя
  rating: number;
}
