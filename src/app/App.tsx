import './App.scss';
import '../assets/index.scss';
import { AuthSelectRole } from '../shared/authSelectRole';

function App() {

  const selectedRole = (role: string) => {
    console.log(role);
  }
  return (
    <>
      <AuthSelectRole onChangeSelect={selectedRole} />
    </>
  )
}

export default App;

