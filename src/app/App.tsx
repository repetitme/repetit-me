import { useState } from 'react';

import AppRouter from './router/AppRouter';
import Header from '../widgets/Header';
import Footer from '../widgets/Footer';

import MainPage from '../pages/MainPage';

import '../../src/assets/styles/globals.scss';
import '../../src/assets/styles/variables.scss';
import style from './index.module.scss';

function App() {
  const [auth, setAuth] = useState<'unauth' | 'student' | 'teacher'>('unauth');
  return (
    <>
      <div className={style.app}>
        <AppRouter />
        <MainPage />
      </div>
    </>
  );
}
export default App;
