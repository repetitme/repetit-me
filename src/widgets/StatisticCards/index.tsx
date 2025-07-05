import classNames from 'classnames';

import { cards } from './data';

import styles from './index.module.scss';

const StatisticCards = () => {
  return (
    <div className={styles.cards}>
      {cards.map((card, index) => (
        <div key={index} className={styles.cards__list}>
          <div
            className={classNames({
              [styles.cards__withAdditionalInfo]: card.additionalInfo
            })}
          >
            <h3 className={styles.cards__title}>{card.title}</h3>
            <p className={styles.cards__value}>
              {card.value}
              {card.currency}
            </p>
            {card.currency && <span className={styles.cards__title}> руб</span>}
          </div>
          {card.additionalInfo && (
            <div className={styles.cards__additional}>
              <p className={styles['cards__additional--text']}>
                {card.additionalInfo}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StatisticCards;
