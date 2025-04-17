import TutorFilters from '../widgets/ui/TutorFilters';

import '../assets/index.scss';

function App() {
  const handleSubmit = (values: any) => console.log(values);
  return (
    <>
      <TutorFilters onSubmit={handleSubmit} percentage={10} />
    </>
  );
}

export default App;
