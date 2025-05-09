import AppRouter from './router/AppRouter';

import '../assets/index.scss';
import styles from './index.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <AppRouter />
    </div>
  );
}
export default App;
