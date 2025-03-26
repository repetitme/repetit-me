import { ReactNode } from 'react';

export type AccordionProps = {
  title: string;
  // Контент при раскрытии аккордиона. Передаем его так: <Accordion title={...}>{content}</Accordion>
  children: ReactNode;
  // Для изменения стилей Accordion в разных частях приложения, при необходимости
  className?: string;
  isOpen: boolean;
  onToggle: () => void;
};