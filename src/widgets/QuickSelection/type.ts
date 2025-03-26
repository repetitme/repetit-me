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

export interface IDisciplines {
  id: string;
  discipline: string;
}

export interface IClasses {
  class: string;
}

export interface ITarget {
  target: string;
}
