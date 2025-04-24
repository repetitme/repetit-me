<<<<<<< HEAD
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
=======
import AuthForm from '../features/auth/form';

import '../assets/index.scss';
import ReviewList from '../shared/components/SortByDate';

function App() {
  return (<>
    <ReviewList/>
    <div className="App">
      <AuthForm login={false} />
    </div>
 </> );
>>>>>>> 060131c9a5e49fa7324a2435cd750760b734c0cb
}
export default App;
