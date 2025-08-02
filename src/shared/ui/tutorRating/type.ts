export interface TutorRatingProps {
  variant: 'small' | 'medium' | 'large';
  //variant: small - рейтинг на карточке с краткой информацией, medium - рейтинг на модальном окне с отзывами, large - рейтинг на карточке с полной информацией
  rating: number;
  setOpenModalState?: (isOpenModalState: boolean) => void;
  disabled?: boolean;
}
