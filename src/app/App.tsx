import AuthForm from '../features/auth/form';

import '../assets/index.scss';
import { FeedbacksModal } from '../widgets/ui/FeedbacksModal';
import ReviewList from '../shared/components/SortByDate';

function App() {
  return (<>
    <ReviewList/>
    <div className="App">
      {/* <AuthForm login={false} /> */}
      <FeedbacksModal/>
    </div>
 </> );
}

export default App;
