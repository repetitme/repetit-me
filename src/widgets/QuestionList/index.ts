import { FC, useState } from 'react';

import Accordion from '../Accordeon';
import useClickOutside from '../../shared/hooks/useClickOutside'
import { questions } from './data';

import styles from './styles.module.scss';
import classNames from 'classnames';

const QuestionList: FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const accordionRef = useClickOutside(() => setOpenId(null));

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
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
        {questions.map((question) => (
          <Accordion
            key={question.id}
            title={question.title}
            onToggle={() => handleToggle(question.id)}
            isOpen={openId === question.id}
          >
            {question.content}
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default QuestionList;