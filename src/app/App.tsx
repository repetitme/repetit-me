//import FeedbackList from '../widgets/FeedbackList';
import StatCards from '../widgets/StatisticCards';
import AppRouter from './router/AppRouter';

import '../assets/index.scss';

import { cards } from '../widgets/StatisticCards/type';

function App() {
  return (
    <>
      <AppRouter />
      <StatCards cards={cards} />
    </>
  );
}

export default App;
