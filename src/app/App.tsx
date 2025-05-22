import AuthForm from '../features/auth/form';
import ReviewList from '../shared/components/SortByDate';
import VideoStart from '../widgets/VideoStart';

import '../assets/index.scss';

function App() {
  return (
    <>
      <ReviewList />
      <div className="App">
        <AuthForm login={false} />
      </div>
      <VideoStart />
    </>
  );
}

export default App;
