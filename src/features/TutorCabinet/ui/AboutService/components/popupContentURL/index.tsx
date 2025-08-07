import { useRef, useState } from 'react';

import unionIcon from '../../../../../../assets/icons/Union.svg';

import styles from './index.module.scss';

import { IPopupContentURL } from './type';

export const PopupContentURL: React.FC<IPopupContentURL> = ({
  inputName,
  url,
  readOnly = true
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState(url);
  const [error, setError] = useState<string | null>(null);

  const handleCopyClick = () => {
    if (inputRef.current) {
      inputRef.current.select();
      navigator.clipboard.writeText(inputRef.current.value);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (!readOnly) {
      validateInput(value);
    }
  };

  const validateInput = (value: string) => {
    if (value.startsWith('https://')) {
      setError(null);
      return;
    }
    setError('Пожалуйста, введите корректную ссылку');
  };

  return (
    <div className={styles.popup__content_URL}>
      <p className={styles.popup__content_URL_title}>{inputName}</p>
      <div className={styles.popup__content_URL_container}>
        <input
          ref={inputRef}
          readOnly={readOnly}
          value={inputValue}
          onChange={handleInputChange}
          className={styles.popup__content_URL_input}
        />
        <button
          onClick={handleCopyClick}
          className={styles.popup__content_URL_button}
        >
          <img
            src={unionIcon}
            alt="Копировать"
            className={styles.popup__content_URL_icon}
          ></img>
        </button>
      </div>
      {error && <p className={styles.popup__content_URL_error}>{error}</p>}
    </div>
  );
};
