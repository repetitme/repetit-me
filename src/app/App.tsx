import { useLocation } from 'react-router';

import Footer from '../widgets/Footer';
import Header from '../widgets/Header';
import { AppProvider } from './AppContext';
import AppRouter from './router/AppRouter';
import { knownPaths } from './router/routesConfig';

import '../assets/styles/index.scss';
import styles from './index.module.scss';

function App() {
  const location = useLocation();
  const role = 'tutor'; // unauth, student, tutor
  const showTelegramBlock = !knownPaths.includes(location.pathname); // Булевое значения для выбранных путей

  return (
    <AppProvider role={role}>
      <div className={styles.app}>
        <Header auth={role} />
        <AppRouter />
        <Footer role={role} goTelegram={showTelegramBlock} />
      </div>
    </AppProvider>
  );
}
export default App;
