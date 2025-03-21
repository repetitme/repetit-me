import Main from '../pages/Main';

import '../../src/assets/styles/globals.scss';
import '../../src/assets/styles/variables.scss';
import icon from '../assets/Group.svg';
import Button from '../shared/button';
import './App.scss';


function App() {
  return (
    <>

      <Main />

      <Button variant="red" text="Эта кнопка красная" />
      <Button variant="purple" text="Эта кнопка сиреневая" />
      <Button
        variant="white"
        text="Эта кнопка прозрачная"
        size="large"
      />
      <Button
        variant="social"
        text="Перейти в Telegram"
        size="large"
        icon={icon}
      />

    </>
  );
}

export default App;
