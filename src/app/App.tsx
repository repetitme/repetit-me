import { useLocation } from 'react-router';

import { TUserRole } from '../shared/types/userData';
import Footer from '../widgets/Footer';
import Header from '../widgets/Header';
import { AppProvider } from './AppContext';
import AppRouter from './router/AppRouter';

import '../assets/index.scss';
import styles from './index.module.scss';

function App() {
  const location = useLocation();
  const showTelegramBlock = location.pathname === '/';
  const role: TUserRole = 'unauthorized'; // "student" "unauthorized"

  return (
    <AppProvider role={role}>
      <div className={styles.app}>
        <Header auth={role} />
        <AppRouter />
        <Footer role={role} goTelegram={!showTelegramBlock} />
      </div>
    </AppProvider>
  );
}
export default App;
