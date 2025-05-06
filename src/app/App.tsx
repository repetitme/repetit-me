//import { useState } from 'react';

// import Footer from '../widgets/Footer';
// import Header from '../widgets/Header';
// import AppRouter from './router/AppRouter';

import '../assets/index.scss';

import FeedbackList from '../widgets/FeedbackList'
import styles from './index.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <FeedbackList updateModalData={() => {}}/>
      {/* <Header auth={'student'} />
      <AppRouter />
      <Footer role="student" /> */}
    </div>
  );
}
export default App;
