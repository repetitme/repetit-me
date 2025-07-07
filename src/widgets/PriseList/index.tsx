//оформление с фигмой
//разделение полей через грид
import { FC, useState } from 'react';

import InfoBlock from '../infoBlock';
import { mockTutorsPriseList } from './fakeApi/mockData';

import styles from './index.module.scss';

const TutorPriseList: FC = () => {
  const [viewAllPrice, setViewAllPrice] = useState(false);

  return (
    <InfoBlock title="Услуги и цены">
      <ul className={styles.container}>
        {mockTutorsPriseList
          .map((tutor, index) => {
            return (
              <li className={styles.container__price} key={index}>
                <p className={styles.container__price_item}>
                  {tutor.discipline} {tutor.target}
                </p>
                <p className={styles.container__price_item}>
                  {tutor.price} руб./час
                </p>
              </li>
            );
          })
          .slice(0, 2)}

        {viewAllPrice &&
          mockTutorsPriseList
            .map((tutor, index) => {
              return (
                <li className={styles.container__price} key={index}>
                  <p className={styles.container__price_item}>
                    {tutor.discipline} {tutor.target}
                  </p>
                  <p className={styles.container__price_item}>
                    {tutor.price} руб./час
                  </p>
                </li>
              );
            })
            .slice(2, mockTutorsPriseList.length)}

        <button
          className={styles.container__button}
          onClick={() => setViewAllPrice(!viewAllPrice)}
        >
          Развернуть
        </button>
      </ul>
    </InfoBlock>
  );
};
export default TutorPriseList;
