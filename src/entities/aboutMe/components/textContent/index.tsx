import { ITextContent } from './type'
import styles from './index.module.scss';
  
export const TextContent: React.FC<ITextContent> = ({ content }) => {
    return <p className={styles.container__content_text}>{content}</p>;
};