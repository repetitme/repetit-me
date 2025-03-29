import { useState } from 'react';

import AuthForm from '../features/auth/form';
import Input from '../shared/ui/input';

import '../assets/index.scss';

function App() {
  const [value, setValue] = useState('');
  const [valueNew, setValueNew] = useState('');
  const [valueNew3, setValueNew3] = useState('');
  return (
    <div
      className="App"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        padding: '20px'
      }}
    >
      <AuthForm login={false} />
      <Input
        variant="default"
        value={value}
        name="name"
        placeholder="Введите имя"
        required
        requiredError="Поле обязательно для заполнения"
        pattern="^[а-яА-Я\s]+$"
        title="Только русские буквы"
        label="Имя (Отчество)"
        onChange={(e) => setValue(e.target.value)}
      />
      <Input
        variant="price"
        value={valueNew}
        onChange={(e) => setValueNew(e.target.value)}
      />
      <Input
        variant="report"
        label="Дата"
        placeholder="Выберите дату"
        value={valueNew}
        onChange={(e) => setValueNew(e.target.value)}
      />
    </div>
  );
}

export default App;
