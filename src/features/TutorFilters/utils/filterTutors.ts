import { ITutorData } from '../../../shared/types/userData';

const filterTutors = (tutors: ITutorData[], filters: any) => {
  return tutors.filter((tutor) => {
    // Фильтрация по цене
    const [minPrice, maxPrice] = filters[titles.price].map((price) =>
      Number(price.replace(/\D/g, ''))
    );
    if (tutor.price < minPrice || tutor.price > maxPrice) return false;

    // Фильтрация по предметам
    if (filters[titles.subjects] && filters[titles.subjects].length > 0) {
      if (!filters[titles.subjects].includes(tutor.subjects)) return false;
    }

    // Другие критерии фильтрации...

    return true;
  });
};
