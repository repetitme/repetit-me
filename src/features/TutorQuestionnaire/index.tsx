import React from 'react';

import Button from '../../shared/ui/button';
import Stepper from '../../shared/ui/stepper';
import CertificatesBlock from './certificatesBlock/ui';

import styles from './index.module.scss';

const TutorQuestionnaire: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.questionnaire}>
        <h2 className={styles.questionnaire__title}>Анкета</h2>
        <Stepper currentStep={3} totalSteps={5} />
        <CertificatesBlock />
      </div>
      <div className={styles.container__buttons}>
        <Button
          text="Назад"
          variant="white"
          size="large"
          className={styles['button--back']}
        />
        <Button
          text="Сохранить и продолжить"
          variant="purple"
          size="large"
          className={styles['button--forward']}
        />
      </div>
    </div>
  );
};

export default TutorQuestionnaire;
