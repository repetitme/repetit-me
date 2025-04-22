import { NotificationModal } from '../widgets/NotificationModal';

import '../assets/index.scss';

function App() {
  return (
    <NotificationModal
      notification={true}
      onAccept={() => console.log(3)}
      onDecline={() => console.log(4)}
      onClose={() => console.log(2)}
      textButton="Мои репетиторы"
      title="Вы приняли запрос!"
      text="Мы свяжемся с преподавателем и обменяем Вас контактами в Telegram. Уведомление об этом будет отправлено автоматически через бота."
    />
  );
}

export default App;
