import styles from './index.module.scss';

import { ITextContent } from './type';

export const TextContent: React.FC<ITextContent> = ({ content }) => {
  return <p className={styles.container__content_text}>{content}</p>;
};
