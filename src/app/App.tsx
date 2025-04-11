import '../../src/assets/styles/globals.scss';
import '../../src/assets/styles/variables.scss';
import MainPage from '../pages/MainPage';
import './App.scss';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <>
      <AppRouter />
      <MainPage />
    </>
  );
}

export default App;
