import { FC } from 'react';

import cn from 'classnames';

import styles from './index.module.scss';

interface IWrapperProps {
  children: React.ReactNode;
  large?: boolean;
}

const Wrapper: FC<IWrapperProps> = ({ children, large }) => (
  <div className={cn(styles.wrapper, { [styles['wrapper--large']]: large })}>
    {children}
  </div>
);

export default Wrapper;
