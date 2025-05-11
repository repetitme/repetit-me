//import { useState } from 'react';

import Footer from '../widgets/Footer';
import Header from '../widgets/Header';
import AppRouter from './router/AppRouter';

import '../assets/index.scss';
import styles from './index.module.scss';
import StatCards from '../widgets/StatisticCards';

function App() {
  //const [auth, setAuth] = useState<'unauth' | 'student' | 'teacher'>('unauth');
  return (
    <div className={styles.app}>
      <StatCards />
      <Header auth={'student'} />
      <AppRouter />
      <Footer role="student" />
    </div>
  );
}
export default App;