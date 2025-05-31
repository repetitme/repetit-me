import React from 'react';

import { STEP_TITLES } from './data';
import StepIcon from './stepIcon';
import StepTitles from './stepTitle';

import styles from './index.module.scss';

interface StepperProps {
  currentStep: number;
  totalSteps?: number;
  titles?: string[];
  className?: string;
}

const Stepper = ({
  currentStep,
  totalSteps = 5,
  titles = STEP_TITLES
}: StepperProps) => {
  return (
    <div className={styles.stepper}>
      <StepTitles titles={titles} />

      <div className={styles.stepper__steps}>
        {Array.from({ length: totalSteps }).map((_, index) => {
          const step = index + 1;
          const isActive = step === currentStep;
          const isCompleted = step < currentStep;
          const shouldShowLine = index < totalSteps - 1;

          return (
            <React.Fragment key={step}>
              <StepIcon
                number={step}
                isActive={isActive}
                isCompleted={isCompleted}
              />

              {shouldShowLine && (
                <div
                  className={`${styles.line} ${isCompleted ? styles.line__completed : ''}`}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;
