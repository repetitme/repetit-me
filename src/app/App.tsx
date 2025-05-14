import Popup from '../shared/components/PopUp';

import '../assets/index.scss';

function App() {
  return (
    <Popup
      isOpen={true}
      onClose={() => console.log(1)}
      /* variant='request'*/
      variant="notFound"
      onConfirm={() => console.log(2)}
    />
  );
}

export default App;
