import '../assets/styles/index.scss';
import { Modal } from '../widgets/ui/AuthModal/index';

function App() {
  return (
    <Modal title="Регистрация" onClose={() => console.log('fsdfd')}>
      <p>sdasdasasds</p>
    </Modal>
  );
}

export default App;