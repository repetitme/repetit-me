import AuthForm from '../features/auth/form';

import '../assets/index.scss';
import { FeedbacksModal } from '../widgets/ui/FeedbacksModal';

function App() {
  return (
    <div className="App">
      {/* <AuthForm login={false} /> */}
      <FeedbacksModal/>
    </div>
  );
}

export default App;
