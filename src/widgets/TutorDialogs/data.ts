const placeholder = 'Клиент не читает сообщения, не сошлись в расписании'

export enum TutorDialogsVariant {
  arrangement = 'arrangement',
  hadFirstClass = 'hadFirstClass',
  report = 'report'
}

export const button = ['Далее', 'Создать', 'Отправить', 'Отправить отчёт'];

export const arrangement = {
  variant: TutorDialogsVariant.arrangement,
  mainTitles: ['Договорились о первом занятии', 'Создание урока'],
  secondaryTitles: ['Причина', 'Стоимость занятия (за час), ₽', 'Дата', 'Время'],
  placeholder: placeholder
};

export const hadFirstClass = {
  variant: TutorDialogsVariant.hadFirstClass,
  mainTitles: ['Прошло ли первое занятие?'],
  secondaryTitles: ['Причина', 'Планируете ли дальнейшие занятия?'],
  options: ['Планируются дальнейшие занятия', 'Дальнейших занятий не будет', 'Неизвестно планируются ли дальнейшие занятия'],
  placeholder: placeholder
};

export const report = {
  variant: TutorDialogsVariant.report,
  mainTitles: ['Создание отчёта'],
  secondaryTitles: ['Стоимость занятия (за час), ₽', 'Длительность занятия (мин)', 'Предполагаемое количество занятий в неделю', 'Доп. информация (не обязательно)'],
  placeholder: [placeholder, '0', 'Выберите дату', 'Выберите время']
};
