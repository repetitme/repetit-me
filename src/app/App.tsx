import { useState } from 'react';

import { useLocation } from 'react-router';
import Select from 'react-select';

import Footer from '../widgets/Footer';
import Header from '../widgets/Header';
import { AppProvider } from './AppContext';
import AppRouter from './router/AppRouter';
import { knownPaths } from './router/routesConfig';

import '../assets/styles/index.scss';
import styles from './index.module.scss';

function App() {
  const location = useLocation();
  const showTelegramBlock = !knownPaths.includes(location.pathname); // Булевое значения для выбранных путей

  // TEST
  const [role, setRole] = useState<'student' | 'tutor' | 'unauth'>(
    (localStorage.getItem('role') as 'student' | 'tutor' | 'unauth') || 'unauth'
  );
  const handleRoleChange = (newRole: 'student' | 'tutor' | 'unauth') => {
    localStorage.setItem('role', newRole);
    setRole(newRole);
  };
  const roleOptions = [
    { value: 'student', label: 'Ученик' },
    { value: 'tutor', label: 'Репетитор' },
    { value: 'unauth', label: 'Гость' }
  ];

  return (
    <AppProvider role={role}>
      <div className={styles.app}>
        {/* TEST */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            position: 'absolute',
            top: 0
          }}
        >
          <Select
            options={roleOptions}
            value={roleOptions.find((option) => option.value === role)}
            onChange={(option) =>
              handleRoleChange(option!.value as 'student' | 'tutor' | 'unauth')
            }
          />
        </div>
        {/* TEST */}

        <Header auth={role} />
        <AppRouter />
        <Footer role={role} goTelegram={showTelegramBlock} />
      </div>
    </AppProvider>
  );
}
export default App;
