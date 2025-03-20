import './App.scss';
import '../assets/index.scss';
import { AuthSelectRole } from '../shared/authSelectRole';

function App() {

  const selectedRole = (role: string) => {
    console.log(role); // так получаем выбранное пользователем состояние
  }
  // return <h1>Привет, мир!</h1>;
  return (
    <>
      <AuthSelectRole onChangeSelect={selectedRole} />
    </>
  )
}

export default App;

