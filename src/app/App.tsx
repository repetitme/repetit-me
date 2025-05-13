import Footer from '../widgets/Footer';
import Header from '../widgets/Header';
import AppRouter from './router/AppRouter';

import '../assets/index.scss';
import styles from './index.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Header auth={'student'} />
      <AppRouter />
      <Footer role="student" goTelegram={true} />
    </div>
  );
}
export default App;
