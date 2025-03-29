import { FC } from 'react';
import styles from './index.module.scss';
import { features } from './data';
import wonemAndCompucter from '../../assets/images/women_and_computer.svg';

const Recruiting: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__recruiting}>
        <h2 className={styles.container__recruiting_title}>
          Мы{' '}
          <span className={styles.container__recruiting_title_purple}>
            найдем
          </span>
          <br />
          учеников{' '}
          <span className={styles.container__recruiting_title_blue}>
            за вас
          </span>
        </h2>
        <p className={styles.container__recruiting_subtitle}>
          И также дадим возможность найти их самостоятельно
        </p>
        <div className={styles.container__recruiting_features}>
          <ul className={styles.container__recruiting_features_width}>
            {features
              .map((feature) => (
                <li
                  className={styles.container__recruiting_feature}
                  key={feature.id}
                >
                  {feature.feature}
                </li>
              ))
              .slice(0, 12)}
          </ul>
          <ul className={styles.container__recruiting_features_center}>
            {features
              .map((feature) => (
                <li
                  className={styles.container__recruiting_feature}
                  key={feature.id}
                >
                  {feature.feature}
                </li>
              ))
              .slice(12, 17)}
          </ul>
        </div>
        <img
          className={styles.container__recruiting_image}
          src={wonemAndCompucter}
        ></img>
      </div>
    </div>
  );
};

export default Recruiting;
