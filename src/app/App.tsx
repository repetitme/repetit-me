import TutorFilters from '../features/tutor-filters/ui';

import '../assets/index.scss';

function App() {
  const handleSubmit = (values: any) => console.log(values);
  return (
    <>
      <TutorFilters onSubmit={handleSubmit} />
    </>
  );
}

export default App;
