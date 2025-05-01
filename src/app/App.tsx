import { useState } from 'react';

import Popup from '../shared/components/PopUp';

import '../assets/index.scss';

function App() {
  const [activePopup, setActivePopup] = useState<'request' | 'notFound' | null>(null);

  const openPopup = (variant: 'request' | 'notFound') => setActivePopup(variant);
  
  const closePopup = () => setActivePopup(null);

  const handleConfirm = () => {
    closePopup();
  };

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => openPopup('request')}>Открыть первый Pop-up</button>
      <button onClick={() => openPopup('notFound')} style={{ marginLeft: '10px' }}>
        Открыть второй Pop-up
      </button>
      {activePopup && (
        <Popup
          isOpen={!!activePopup}
          onClose={closePopup}
          variant={activePopup}
          onConfirm={handleConfirm}
        />
      )}
    </div>
  );
}

export default App;
