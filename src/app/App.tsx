import './App.scss';
import '../assets/styles/globals.scss';
import '../assets/styles/variables.scss';
import { AuthModal } from '../widgets/ui/AuthModal';

function App() {
  return (
    <AuthModal type={false} onClose={() => console.log('fsdfd')}>
      <p>Тут будет компонент формы</p>
    </AuthModal>
  );
}

export default App;
