import AuthForm from '../features/auth/form';

import '../assets/index.scss';
import ReviewList from '../shared/components/SortByDate';

function App() {
  return (<>
    <ReviewList/>
    <div className="App">
      <AuthForm login={false} />
    </div>
 </> );
}

export default App;
