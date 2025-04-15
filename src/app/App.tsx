import '../../src/assets/styles/globals.scss';
import '../../src/assets/styles/variables.scss';
import './App.scss';

// import { AboutMe } from '../shared/aboutMe';
import { textContent, servicesList } from '../entities/aboutMe/data';

import { AboutMe } from '../entities/aboutMe';

function App() {
  return (
    <div className='App'>
      <AboutMe textContent={ textContent } servicesList={ servicesList }/>
    </div>
  );
}

export default App;