import '../../src/assets/styles/globals.scss';
import '../../src/assets/styles/variables.scss';
import NotFoundPage from '../shared/NotFoundPage';
import './App.scss';
import AppRouter from './router/AppRouter'

function App() {
  return (
    <>
      <AppRouter />
      {/* <NotFoundPage /> */}
    </>
  );
}

export default App;
