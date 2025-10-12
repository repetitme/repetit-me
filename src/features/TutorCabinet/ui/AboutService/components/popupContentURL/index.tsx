import { useEffect, useRef, useState } from 'react';

import unionIcon from '../../../../../../assets/icons/Union.svg';

import styles from './index.module.scss';

import { IPopupContentURL } from './type';

export const PopupContentURL: React.FC<IPopupContentURL> = ({
  inputName,
  url,
  readOnly = true,
  onErrorChange
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState(url);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (onErrorChange) {
      onErrorChange(error || '');
    }
  }, [error, onErrorChange]);

  useEffect(() => {
    if (!readOnly && url) {
      validateInput(url);
    }
  }, []);

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
    if (!value.trim()) {
      setError('Поле не может быть пустым');
      return;
    }

    const invalidChars = /[ <>{}|\\^~\[\]`]/;
    if (invalidChars.test(value)) {
      setError('Ссылка содержит недопустимые символы');
      return;
    }

    if (value.startsWith('http://') || value.startsWith('https://')) {
      const protocol = value.startsWith('https://') ? 'https://' : 'http://';
      const afterProtocol = value.slice(protocol.length);

      if (!afterProtocol.trim()) {
        setError('Ссылка должна содержать домен');
        return;
      }
    } else {
      setError('Ссылка должна начинаться с http:// или https://');
      return;
    }

    setError(null);
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
          className={`${styles.popup__content_URL_input} ${error ? styles.error : ''}`}
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
