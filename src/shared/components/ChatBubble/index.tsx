import classNames from 'classnames';
import styles from './index.module.scss';

type TChatBubbleProps = {
  position?: 'left' | 'right'; // позиция псевдоэлемента
  children: React.ReactNode;
  className?: string; // для кастомных стилей
};

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
