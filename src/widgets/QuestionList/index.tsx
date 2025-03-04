import { FC, useState } from 'react';

import Accordion from '../Accordeon';
import useClickOutside from '../../shared/hooks/useClickOutside';
import { questions } from './data';

import styles from './styles.module.scss';
import classNames from 'classnames';

const QuestionList: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const accordionRef = useClickOutside(() => setOpenIndex(null));

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.container__title}>
        Часто задаваемые{' '}
        <span className={classNames(styles['container__title--accent'])}>
          вопросы
        </span>
      </h2>
      <div className={styles.container__list} ref={accordionRef}>
        {questions.map((question, index) => (
          <Accordion
            key={index}
            title={question.title}
            onToggle={() => handleToggle(index)}
            isOpen={openIndex === index}
          >
            {question.content}
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default QuestionList;
