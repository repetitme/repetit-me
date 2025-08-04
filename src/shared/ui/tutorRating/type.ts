export type VariantType = 'small' | 'medium' | 'large' | 'onProfile';
//variant: small - рейтинг-звезда на карточке с краткой информацией, medium - рейтинг на модальном окне с отзывами, 'large' - рейтинг на карточке с полной информацией, 'onProfile' - в профиле преподавателя

export interface TutorRatingProps {
  variant: VariantType;
  rating: number;
  setOpenModalState?: (isOpenModalState: boolean) => void;
  disabled?: boolean;
}
