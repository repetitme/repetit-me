import { PopupData } from "./type";

export const popupContent: Record<string, PopupData> = {
  notFound: {
    title: 'По вашему запросу репетиторы \nне найдены',
    text: 'Вы можете оставить заявку, и мы поищем \nрепетитора под ваш запрос в нашей \nдополнительной базе. Отправить заявку?',
    confirmButtonText: 'Да',
    cancelButtonText: 'Нет',
    color: 'white'
  },
  responseSent: {
    title: 'Вы откликнулись!',
    text: 'Отклик отправлен успешно! \nКогда преподаватель примет заявку, мы обменяем \nВас контактами в Telegram, уведомление придёт \nавтоматически через бота. \nОтменить или посмотреть статус заявки можно \nв разделе "Мои заявки".',
    confirmButtonText: 'Мои заявки',
    cancelButtonText: null,
    color: 'purple'
  },
  cancelRequest: {
    title: 'Вы уверены, что хотите отменить \nданную заявку?',
    confirmButtonText: 'Да',
    cancelButtonText: 'Нет',
    color: 'white'
  },

  acceptRequest: {
    title: 'Вы приняли запрос!',
    text: 'Мы свяжемся с преподавателем и обменяем Вас \nконтактами в Telegram. Уведомление об этом \nбудет отправлено автоматически через бота.',
    confirmButtonText: 'Мои репетиторы',
    cancelButtonText: null,
    color: 'purple'
  },

  rejectRequest: {
    title: 'Вы уверены, что хотите \nотклонить запрос от этого \nпреподавателя?',
    confirmButtonText: 'Да',
    cancelButtonText: 'Нет'
  }
};
