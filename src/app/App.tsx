import './App.scss';
import '../assets/index.scss';
import { AuthSelectRole } from '../shared/authSelectRole';

function App() {

  const selectedRole = (role: 'pupil' | 'teacher') => {
  }
  return (
    <>
      <AuthSelectRole onChangeSelect={selectedRole} />
    </>
  )
}

export default App;

