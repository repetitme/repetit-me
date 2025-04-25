import { useState } from 'react';

import AuthForm from '../features/auth/form';
import MainPage from '../pages/MainPage';
import ReviewList from '../shared/components/SortByDate';
import Footer from '../widgets/Footer';
import Header from '../widgets/Header';
import AppRouter from './router/AppRouter';

import '../assets/index.scss';
import style from './index.module.scss';

function App() {
  //const [auth, setAuth] = useState<'unauth' | 'student' | 'teacher'>('unauth');
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
