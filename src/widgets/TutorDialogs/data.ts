const placeholder = 'Клиент не читает сообщения, не сошлись в расписании';

export const button = ['Далее', 'Создать', 'Отправить', 'Отправить отчёт'];

export const arrangement = {
  variant: 'arrangement',
  mainTitles: ['Договорились о \n первом \n занятии?', 'Создание урока'],
  secondaryTitles: [
    'Причина',
    'Стоимость занятия (за час), ₽',
    'Дата',
    'Время'
  ],
  placeholder: [placeholder, '0', 'Выберите дату', 'Выберите время']
};

export const hadFirstClass = {
  variant: 'hadFirstClass',
  mainTitles: ['Прошло ли первое \n занятие?'],
  secondaryTitles: ['Причина', 'Планируете ли дальнейшие занятия?'],
  options: [
    'Планируются дальнейшие занятия',
    'Дальнейших занятий не будет',
    'Неизвестно планируются ли дальнейшие занятия'
  ],
  placeholder: placeholder
};

export const report = {
  variant: 'report',
  mainTitles: ['Создание отчёта'],
  secondaryTitles: [
    'Стоимость занятия (за час), ₽',
    'Длительность занятия (мин)',
    'Предполагаемое количество \n занятий в неделю',
    'Доп. информация (не обязательно)'
  ],
  placeholder: ['0', 'Выберите дату', 'Выберите время']
};
