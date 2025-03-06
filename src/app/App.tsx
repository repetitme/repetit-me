import './App.scss';
import '../../src/assets/styles/globals.scss';
import '../../src/assets/styles/variables.scss';
import Button from '../shared/button';

function App() {
  return (
    <>
      <h1>Привет, мир!</h1>
      <Button variant="red" text="Эта кнопка красная" />
      <Button variant="purple" text="Эта кнопка сиреневая" />
      <Button variant="white" text="Эта кнопка прозрачная" size="large" />
    </>
  );
}

export default App;
