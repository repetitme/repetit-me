import { FC } from 'react';

import womenAndComputer from '../../assets/images/women_and_computer.svg';
import { features } from './data';

import styles from './index.module.scss';

const Recruiting: FC = () => (
  <div className={styles.container}>
    <h2 className={styles.container__title}>
      Мы <span className={styles.container__title_purple}>найдем</span>
      <br />
      учеников <span className={styles.container__title_blue}>за вас</span>
    </h2>
    <p className={styles.container__subtitle}>
      И также дадим возможность найти их самостоятельно
    </p>
    <ul className={styles.container__features}>
      {features.map((feature) => (
        <li className={styles.container__features_feature} key={feature.id}>
          {feature.feature}
        </li>
      ))}
    </ul>
    <img className={styles.container__image} src={womenAndComputer}></img>
  </div>
);
export default Recruiting;
