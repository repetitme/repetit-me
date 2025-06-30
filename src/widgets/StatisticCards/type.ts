export interface Card {
  title: string;
  value: number | string;
  currency?: string;
  additionalInfo?: string;
  additionalValue?: number | string;
}

export interface StatCardProps {
  cards: Card[];
}

export const cards = [
  {
    title: 'Незаполненные отчёты',
    value: 4,
    additionalInfo: `Задолженность по комиссии: 680 ₽`
  },

  {
    title: 'Уроков проведено',
    value: '50'
  },

  {
    title: 'Доход за октябрь',
    value: '15000',
    currency: 'руб'
  },
  {
    title: 'Бонусы',
    value: '500',
    currency: 'руб'
  }
];
