import buttonBack from '../../../assets/icons/buttonBack.svg';

import styles from './index.module.scss';

interface ButtonBackProps {
  text: string;
  className?: string;
  onClick: () => void;
}

const ButtonBack: React.FC<ButtonBackProps> = ({ text, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={styles.button}
      aria-label={text}
    >
      <img src={buttonBack} alt="" /> {text}
    </button>
  );
};

export default ButtonBack;
