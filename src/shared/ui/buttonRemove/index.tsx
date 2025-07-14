import closeIcon from '../../../assets/icons/closeIcon.svg';
import Button from '../button';

import styles from './index.module.scss';

type TButtonRemove = {
  removeFile: (fileOrIndex: File | number) => void;
  index?: number;
};

const ButtonRemove: React.FC<TButtonRemove> = ({ removeFile, index = 0 }) => {
  return (
    <Button
      text=""
      icon={closeIcon}
      variant="transparent"
      onClick={() => removeFile(index)}
      className={styles['video-remove']}
    />
  );
};
export default ButtonRemove;
