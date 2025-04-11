import '../../src/assets/styles/globals.scss';
import '../../src/assets/styles/variables.scss';
import FeedbackList from '../widgets/FeedbackList'
import './App.scss';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <>
      <AppRouter />
      <FeedbackList />
    </>
  );
}

export default App;
