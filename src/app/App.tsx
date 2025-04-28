import { FeedbacksModal } from '../widgets/ui/FeedbacksModal';
import AppRouter from './router/AppRouter';

import '../assets/index.scss';

function App() {
  return (
    <>
      <AppRouter />
      <FeedbacksModal onClose={() => {}} />
    </>
  );
}

export default App;
