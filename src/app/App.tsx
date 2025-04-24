import '../../src/assets/styles/globals.scss';
import '../../src/assets/styles/variables.scss';
import MainPage from '../pages/MainPage';
import style from './index.module.scss'
import AppRouter from './router/AppRouter';

function App() {
  return (
  <div className={style.app}>
    <AppRouter />
    <MainPage />
  </div>

    
  );
}

export default App;
