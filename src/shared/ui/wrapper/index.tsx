import { FC } from 'react';

import cn from 'classnames';

import styles from './index.module.scss';

interface IWrapperProps {
  children: React.ReactNode;
  large?: boolean;
  className?: string;
}

const Wrapper: FC<IWrapperProps> = ({ children, large, className }) => (
  <div
    className={cn(
      styles.wrapper,
      { [styles['wrapper--large']]: large },
      className
    )}
  >
    {children}
  </div>
);

export default Wrapper;
