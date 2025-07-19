import { useState } from 'react';

export const useStepper = (totalSteps: number) => {
  const [currentStep, setCurrentStep] = useState(1);

  const next = () => {
    if (currentStep < totalSteps) setCurrentStep((s) => s + 1);
  };

  const prev = () => {
    if (currentStep > 1) setCurrentStep((s) => s - 1);
  };

  const reset = () => setCurrentStep(1);

  return {
    currentStep,
    totalSteps,
    next,
    prev,
    reset,
    isFirstStep: currentStep === 1,
    isLastStep: currentStep === totalSteps
  };
};
