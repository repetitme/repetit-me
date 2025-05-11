//import { useState } from 'react';
import Footer from '../widgets/Footer';
import Header from '../widgets/Header';
import AppRouter from './router/AppRouter';

import '../assets/index.scss';
import styles from './index.module.scss';

function App() {
  //const [auth, setAuth] = useState<'unauth' | 'student' | 'teacher'>('unauth');
  return (
    <div className={styles.app}>
      <Header auth={'student'} />
      <AppRouter />
      <Footer role="student" />
    </div>
  );
}
export default App;
