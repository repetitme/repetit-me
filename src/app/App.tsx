import { useLocation } from 'react-router';
import { useState } from 'react';

import Footer from '../widgets/Footer';
import Header from '../widgets/Header';
import { AppProvider } from './AppContext';
import AppRouter from './router/AppRouter';
import { knownPaths } from './router/routesConfig';

import '../assets/styles/index.scss';
import styles from './index.module.scss';
import Popups from '../shared/ui/popup';

function App() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const role = 'tutor'; // unauth, student, tutor
  const showTelegramBlock = !knownPaths.includes(location.pathname); // Булевое значения для выбранных путей

  return (
    <AppProvider role={role}>
      <div className={styles.app}>
        <Header auth={role} />
        <button onClick={toggle}>Open</button>
        {isOpen && Popups.noTutorsFound({ close: toggle })}
        <AppRouter />
        <Footer role={role} goTelegram={showTelegramBlock} />
      </div>
    </AppProvider>
  );
}
export default App;
