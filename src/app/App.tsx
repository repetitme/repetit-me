import { AuthModalWithForm } from '../features/auth/authModalWithForm';

import '../assets/index.scss';

function App() {
  return (
    <div className="App">
      <AuthModalWithForm closeModal={() => console.log(1)} />
    </div>
  );
}

export default App;
