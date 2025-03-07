import './App.scss';
import '../assets/styles/globals.scss';
import '../assets/styles/variables.scss';
import { Modal } from '../widgets/ui/AuthModal';

function App() {
  return (
    <Modal title="Регистрация" onClose={() => console.log('fsdfd')}>
      <p>sdasdasasds</p>
    </Modal>
  );
}

export default App;
