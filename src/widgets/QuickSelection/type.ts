export interface ITutorCard {
  id: number;
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

export interface IDisciplines {
  id: number;
  discipline: string;
}

export interface IClasses {
  class: string;
}

export interface ITarget {
  target: string;
}
