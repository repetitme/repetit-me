import '../assets/index.scss';
import { AuthForm } from '../features/auth/form';
function App() {
  // Test (true = login, false = register)
  return (
    <div className="App">
      <AuthForm login={false} />
    </div>
  );
}

export default App;
