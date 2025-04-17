import { NotificationModal } from '../widgets/NotificationModal';

import '../assets/index.scss';

function App() {
  return (
    <NotificationModal
      type="accept_with_text"
      onAccept={() => console.log(3)}
      onDecline={() => console.log(4)}
      onClose={() => console.log(2)}
      title="По вашему запросу репетиторы не найдены"
      text="Вы можете оставить заявку, и мы поищем репетитора под ваш запрос в нашей дополнительной базе. Отправить заявку?"
    />
  );
}

export default App;
