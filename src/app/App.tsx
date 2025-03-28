import '../../src/assets/styles/globals.scss';
import '../../src/assets/styles/variables.scss';
import './App.scss';

import { AboutMe } from '../shared/aboutMe';
import { textContent, servicesList } from '../entities/aboutMe';

function App() {
  return (
    <>
      <AboutMe textContent={ textContent } servicesList={ servicesList }/>
    </>
  );
}

export default App;
