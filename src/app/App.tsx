import { useState } from 'react';

import AuthForm from '../features/auth/form';
import ReviewList from '../shared/components/SortByDate';
import AppRouter from './router/AppRouter';
import Header from '../widgets/Header';
import Footer from '../widgets/Footer';

import MainPage from '../pages/MainPage';

import '../assets/index.scss';
import style from './index.module.scss';

function App() {
  const [auth, setAuth] = useState<'unauth' | 'student' | 'teacher'>('unauth');
  return (
    <>
      <div className={style.app}>
        <AuthForm login={false} />
        <ReviewList/>
        <AppRouter />
        <MainPage />
      </div>
    </>
  );
}
export default App;
