import AppRouter from './router/AppRouter';

import '../assets/index.scss';

function App() {
  //const [auth, setAuth] = useState<'unauth' | 'student' | 'teacher'>('unauth');
  return (
    <>
      <AppRouter />
    </>
  );
}
export default App;
