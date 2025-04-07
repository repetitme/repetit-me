import { AuthModalWithForm } from '../features/auth/authModalWithForm';

import '../assets/index.scss';

function App() {
  return (
    <div className="App">
      <AuthModalWithForm isOpen={true} />
    </div>
  );
}

export default App;
