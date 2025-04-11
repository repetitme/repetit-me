import AuthForm from '../features/auth/form';

import '../assets/index.scss';

function App() {
  return (
    <div className="App">
      <AuthForm login={false} />
    </div>
  );
}

export default App;
