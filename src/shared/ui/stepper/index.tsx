import React from 'react';

import StepIcon from './stepIcon';

import styles from './index.module.scss';

type TStepperProps = {
  currentStep: number;
  totalSteps?: number;
};

const Stepper = ({ currentStep, totalSteps = 5 }: TStepperProps) => {
  return (
    <div className={styles.stepper}>
      {Array.from({ length: totalSteps }).map((_, index) => {
        const step = index + 1;
        const isActive = step === currentStep;
        const isCompleted = step < currentStep;

        return (
          <React.Fragment key={step}>
            <StepIcon
              number={step}
              isActive={isActive}
              isCompleted={isCompleted}
            />

            {step < totalSteps && (
              <div
                className={`${styles.line} ${isCompleted ? styles.line__completed : ''}`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Stepper;
