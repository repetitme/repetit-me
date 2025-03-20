import '../assets/index.scss';
import AuthForm from '../features/auth/form';
import { useState } from 'react';
import Input from '../shared/ui/input';
function App() {
  // Test
  const [text, setText] = useState('');
  return (
    <div className="App">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh'
        }}
      >
        <Input
          label="Тестовый обычный input"
          name="test"
          pattern="^[A-Za-z]+$"
          title="Только латинские буквы"
          placeholder="Введите текст"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ blockSize: '160px' }}
        />
        <AuthForm login={false} />
      </div>
    </div>
  );
}

export default App;
