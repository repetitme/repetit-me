import classNames from 'classnames';

import styles from './index.module.scss';

import { StatCardProps } from './type';

const StatCards: React.FC<StatCardProps> = ({ cards }) => {
  return (
    <div className={styles.cards}>
      {cards.map((card, index) => (
        <div
          key={index}
          className={classNames(styles.cards__list, {
            [styles.cards__withAdditionalInfo]: card.additionalInfo
          })}
        >
          {card.additionalInfo ? (
            <div className={styles.cards__withAdditionalInfo}>
              <h3 className={styles.cards__title}>{card.title}</h3>
              <p className={styles.cards__value}>
                {card.value}
                {card.currency && (
                  <span className={styles.cards__title}> {card.currency}</span>
                )}
              </p>
            </div>
          ) : (
            <>
              <h3 className={styles.cards__title}>{card.title}</h3>
              <p className={styles.cards__value}>
                {card.value}
                {card.currency && (
                  <span className={styles.cards__title}> {card.currency}</span>
                )}
              </p>
            </>
          )}
          {card.additionalInfo && (
            <div className={styles.cards__additional}>
              <p className={styles['cards__additional--text']}>
                {card.additionalInfo}
              </p>
              <p className={styles['cards__additional--text']}>
                {card.additionalValue}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StatCards;
