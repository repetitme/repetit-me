//import FeedbackList from '../widgets/FeedbackList';
import StatCards from '../widgets/StatisticCards';
import AppRouter from './router/AppRouter';

import '../assets/index.scss';

function App() {
  return (
    <>
      <AppRouter />
      <StatCards />
    </>
  );
}

export default App;