import { useState } from 'react';
import classNames from 'classnames';
import styles from '../assets/styles/app.module.scss';
import logo from '../assets/images/logo.svg';

function App() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Click on the Vite and React logos to learn more
      </h1>
      <button
        onClick={handleClick}
        className={classNames(styles.button, {
          [styles.button__active]: isActive
        })}
      >
        Click to Me!
      </button>
      <img
        src={logo}
        alt="logo vite"
        className={classNames(styles.logo, { [styles.logo__hidden]: isActive })}
      ></img>
    </div>
  );
}

export default App;
