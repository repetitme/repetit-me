import '../assets/index.scss';
import AuthForm from '../features/auth/form';
import { useState } from 'react';
import Input from '../shared/ui/input';
function App() {
  // Test (true = login, false = register)
  const [text, setText] = useState('');
  return (
    <div className="App">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '50px',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <Input
          type="text"
          label="Тестовый общий input"
          name="test"
          pattern='^[A-Za-z]+$'
          title='Только латинские буквы'
          placeholder="Введите текст"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <AuthForm login={false} />
      </div>
    </div>
  );
}

export default App;
