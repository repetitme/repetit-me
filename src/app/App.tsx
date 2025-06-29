import { useLocation } from 'react-router';

import Footer from '../widgets/Footer';
import Header from '../widgets/Header';
import AppRouter from './router/AppRouter';

import '../assets/styles/index.scss';
import styles from './index.module.scss';

function App() {
  const location = useLocation();
  const role = 'student'; // unauthorized, student
  const showTelegramBlock = !['/tutor-catalog', '/test'].includes(
    location.pathname
  );

  return (
    <div className={styles.app}>      
      <Header auth={'student'} />
      <AppRouter />
      <Footer role={role} goTelegram={showTelegramBlock} />
    </div>
  );
}
export default App;
