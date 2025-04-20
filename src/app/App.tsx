import TutorFilters from '../features/tutor-filters';

import '../assets/index.scss';
import ReviewList from '../shared/components/SortByDate';

function App() {
  const handleSubmit = (values: any) => console.log(values);
  return (
    <>
      <TutorFilters onSubmit={handleSubmit} noResultsFound />
    </>
  );
}

export default App;
