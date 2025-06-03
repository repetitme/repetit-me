import '../../src/assets/styles/globals.scss';
import '../../src/assets/styles/variables.scss';
import './App.scss';

import { AboutService } from '../entities/aboutService';
import { bonusPopupData, reviewPopupData } from '../entities/aboutService/data';

function App() {
  return (
    <>
      <AboutService
        bonusPopup={bonusPopupData}
        reviewPopup={reviewPopupData}
      ></AboutService>
    </>
  );
}

export default App;
