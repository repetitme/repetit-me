import '../assets/index.scss';
import { useState } from 'react';
import AuthModalForm from '../features/auth/form';
import Button from '../shared/button';
function App() {
  const [isAuthFormOpen, setIsAuthFormOpen] = useState(false);
  const switchModalState = () => {
    isAuthFormOpen ? setIsAuthFormOpen(false) : setIsAuthFormOpen(true);
  };
  return (
    <>
      <Button
        text="Открыть форму регистрации"
        variant="purple"
        onClick={switchModalState}
      />
      {isAuthFormOpen && <AuthModalForm onClose={switchModalState} />}
    </>
  );
}

export default App;
