import { useState } from 'react';
import Header from '../../widgets/Header';

const MainPage = () => {
  const [auth, setAuth] = useState<'unauth' | 'student' | 'teacher'>('unauth');
  return (
    <>
      <Header auth={auth} />
    </>
  );
};
export default MainPage;
