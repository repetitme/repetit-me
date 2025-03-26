//import { ITutorCard } from '../QuickSelection/type';
//
//export type CarouselProps = {
//  tutor: ITutorCard;
//};

export interface ITutorCard {
  id: string;
  rating: number;
  avatar: string;
  name: string;
  surname: string;
  type_tutor: string;
  experience: number;
  about: string;
  price: number;
  disciplines: string[];
  classes: string[];
  targets: string[];
}
