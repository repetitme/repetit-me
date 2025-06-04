import styles from './index.module.scss';

import { IPopupContentText } from './type';

export const PopupContentText: React.FC<IPopupContentText> = ({ text }) => {
  const lines = text.split('\n').filter((line) => line.trim() !== '');

  const groupedLines: { question: string; answer: string[] }[] = [];
  let currentQuestion: string | null = null;
  let currentAnswer: string[] = [];

  for (const line of lines) {
    if (line.trim().endsWith('?')) {
      if (currentQuestion !== null) {
        groupedLines.push({
          question: currentQuestion,
          answer: currentAnswer
        });
      }
      currentQuestion = line;
      currentAnswer = [];
    } else {
      currentAnswer.push(line);
    }
  }

  if (currentQuestion !== null) {
    groupedLines.push({
      question: currentQuestion,
      answer: currentAnswer
    });
  }

  return (
    <div className={styles.popup__content_text}>
      {groupedLines.map((paragraph, index) => (
        <div key={index} className={styles.popup__content_text_paragraph}>
          <p className={styles.popup__content_text_paragraph_question}>
            {paragraph.question}
          </p>
          {paragraph.answer.length > 0 && (
            <div className={styles.popup__content_text_paragraph_answer}>
              {paragraph.answer.map((answerLine, i) => (
                <p key={i}>{answerLine}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
