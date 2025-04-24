import classNames from 'classnames';

import { TChatBubbleProps } from './type';
import styles from './index.module.scss';

export const ChatBubble: React.FC<TChatBubbleProps> = ({
  position = 'left',
  children,
  className
}) => {
  return (
    <div
      className={classNames(
        styles.bubble,
        { [styles.right]: position === 'right' },
        className
      )}
    >
      <p className={styles.bubble__txt}>{children}</p>
    </div>
  );
};
export default ChatBubble;
