import { useState } from 'react';

import Popup from '../shared/components/PopUp';

import '../assets/index.scss';

function App() {
  const [isFirstPopupOpen, setIsFirstPopupOpen] = useState(false);
  const [isSecondPopupOpen, setIsSecondPopupOpen] = useState(false);
  const handleOpenFirstPopup = () => {
    setIsFirstPopupOpen(true);
  };

  const handleCloseFirstPopup = () => {
    setIsFirstPopupOpen(false);
  };

  const handleConfirmFirstPopup = () => {
    setIsFirstPopupOpen(false);
  };
  const handleOpenSecondPopup = () => {
    setIsSecondPopupOpen(true);
  };

  const handleCloseSecondPopup = () => {
    setIsSecondPopupOpen(false);
  };

  const handleConfirmSecondPopup = () => {
    setIsSecondPopupOpen(false);
  };
  return (
    <div style={{ padding: '20px' }}>
      <button onClick={handleOpenFirstPopup}>Открыть первый Pop-up</button>
      <button onClick={handleOpenSecondPopup} style={{ marginLeft: '10px' }}>
        Открыть второй Pop-up
      </button>
      <Popup
        isOpen={isFirstPopupOpen}
        onClose={handleCloseFirstPopup}
        title="По вашему запросу репетиторы не найдены"
        content="Вы можете оставить заявку, и мы поищем репетитора под ваш запрос в нашей дополнительной базе. Отправить заявку?"
        confirmButtonText="Да"
        cancelButtonText="Нет"
        onConfirm={handleConfirmFirstPopup}
      />
      <Popup
        isOpen={isSecondPopupOpen}
        onClose={handleCloseSecondPopup}
        title="Вы откликнулись!"
        content="Отклик отправлен успешно! Когда преподаватель примет заявку мы обменяем Вас контактами в Telegram, уведомление прийдёт автоматически через бота.Отменить или посмотреть статус заявки можно 
в разделе “Мои заявки”."
        confirmButtonText="Мои заявки"
        showCancelButton={false}
        onConfirm={handleConfirmSecondPopup}
        variant="purple"
      />
    </div>
  );
}
export default App;
