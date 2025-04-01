import '../../src/assets/styles/globals.scss';
import '../../src/assets/styles/variables.scss';
import { TelegramBlock } from '../shared/components/TelegramBlock';
import './App.scss';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <>
    <TelegramBlock />
      <AppRouter />
    </>
  );
}

export default App;
