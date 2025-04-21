import TutorFilters from '../features/TutorFilters/ui';

import '../assets/index.scss';

function App() {
  return (
    <>
      <TutorFilters
        onSubmit={(values) => console.log(values)}
        percentage={10}
      />
    </>
  );
}

export default App;
