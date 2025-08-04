interface IFreeTime {
  day: string;
  time: string[];
}

export const freeTime: IFreeTime[] = [
  {
    day: 'Пн',
    time: ['07:00', '16:00']
  },
  {
    day: 'Вт',
    time: []
  },
  {
    day: 'Ср',
    time: ['11:00', '19:00']
  },
  {
    day: 'Чт',
    time: ['09:00']
  },
  {
    day: 'Пт',
    time: ['13:00', '16:00', '20:00']
  },
  {
    day: 'Сб',
    time: ['07:00']
  },
  {
    day: 'Вс',
    time: []
  }
];
