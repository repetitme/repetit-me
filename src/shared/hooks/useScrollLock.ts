import { useEffect } from 'react';

export const useScrollLock = (isOpen: boolean) =>
  useEffect(() => {
    const scrollBar = window.innerWidth - document.documentElement.clientWidth;
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollBar}px`;
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '';
    }
    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

export default useScrollLock;
