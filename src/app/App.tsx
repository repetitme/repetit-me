import { useState } from 'react';

import AuthForm from '../features/auth/form';
import Input from '../shared/ui/input';

import '../assets/index.scss';

function App() {
  const [value, setValue] = useState('');
  return (
    <div className="App">
      <AuthForm login={false} />
      <Input
        name="name"
        label="Имя"
        placeholder="Иван"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="url"
        title="Некорректный формат ссылки"
      />
    </div>
  );
}

export default App;
