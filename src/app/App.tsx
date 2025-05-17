import { useState } from 'react';

import Popup from '../shared/components/PopUp';
import Footer from '../widgets/Footer';
import Header from '../widgets/Header';
import AppRouter from './router/AppRouter';

import '../assets/index.scss';
import styles from './index.module.scss';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <>
      <Popup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
       /*   variant='request'*/
         
       variant="notFound"
        onConfirm={handleClosePopup}
      />

      <div className={styles.app}>
        <Header auth={'student'} />
        <AppRouter />
        <Footer role="student" />
      </div>
    </>
  );
}
export default App;
