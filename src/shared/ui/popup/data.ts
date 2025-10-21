type TData = {
  title: string;
  description?: string;
  variant?: 'default' | 'small' | 'form';
};

export const noTutorsFound: TData = {
  title: 'По вашему запросу репетиторы не найдены',
  description:
    'Вы можете оставить заявку, и мы поищем репетитора под ваш запрос в нашей дополнительной базе. Отправить заявку?',
  variant: 'small'
};

export const responded: TData = {
  title: 'Вы откликнулись!',
  description: `Отклик отправлен успешно!
     Когда преподаватель примет заявку, мы обменяем
    Вас контактами в Telegram, уведомление придёт
     автоматически через бота. 
     Отменить или посмотреть статус заявки можно
      в разделе "Мои заявки"`
};

export const cancelRequest: TData = {
  title: 'Вы уверены, что хотите отменить данную заявку?',
  variant: 'small'
};

export const receivedRequest: TData = {
  title: 'Вы приняли запрос!',
  description:
    'Мы свяжемся с преподавателем и обменяем Вас контактами в Telegram. Уведомление об этом будет отправлено автоматически через бота.'
};

export const rejectTutor: TData = {
  title: 'Вы уверены, что хотите отклонить запрос от этого преподавателя?',
  variant: 'small'
};

export const acceptRequest: TData = {
  title: '',
  description: `Мы обменяем Вас контактами с учеником, которые пришлёт бот через Telegram автоматически после
      нажатия кнопки Далее.
       После получения контакта ученика, пожалуйста, незамедлительно свяжитесь с ним.`,
  variant: 'small'
};

export const rejectRequest: TData = {
  title: 'Вы уверены, что хотите отклонить данную заявку?',
  variant: 'small'
};

export const formSaved: TData = {
  title: 'Анкета успешно сохранена!',
  description:
    'Информация сохранилась у вас в профиле. Вы всегда можете вернуться и изменить данные в анкете. Переходите в личный кабинет и просматривайте заявки от учеников.'
};
