import { useState } from 'react';

import ProfileInfo from '../../features/tutorApplication/ui/ProfileInfo';
import DiplomasUpload from '../../features/tutorApplication/ui/diplomasUpload';
import SubjectForm from '../../features/tutorApplication/ui/subjectForm';
import Button from '../../shared/ui/button';
import Stepper from '../../shared/ui/stepper';

import styles from './index.module.scss';

import { Diploma } from '../../features/tutorApplication/ui/diplomasUpload/ type';
import TutorApplicationData from './type';
import ApplicationSuccessModal from '../../features/tutorApplication/ui/ApplicationSuccessModal'

// Начальные значения, соответствующие типам
const initialTutorData: TutorApplicationData = {
  profileInfo: {
    firstName: '',
    lastName: '',
    telegram: '',
    avatar: ''
  },
  subjects: [],
  diplomas: [],
  videos: {
    url: ''
  },
  schedule: {
    days: []
  }
};

const TutorApplication = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const [tutorData, setTutorData] =
    useState<TutorApplicationData>(initialTutorData);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNext = (stepData: any) => {
    // any лучше заменить на конкретный тип, например ProfileInfoData | SubjectData | ....
    setTutorData((prev) => ({ ...prev, ...stepData }));
    if (currentStep < 5) setCurrentStep((prev) => prev + 1);
    else setIsModalOpen(true); // Модалка после последнего шага
    // Здесь потом добавить отправку данных на сервер
  };

  const handleBack = () => setCurrentStep((prev) => prev - 1);

  const handleDiplomasChange = (diplomas: Diploma[]) => {
    setTutorData((prev) => ({
      ...prev,
      diplomas: [...diplomas]
    }));
  };

  const handleSubmit = () => {
    console.log('Данные анкеты:', tutorData); // Для отладки
    setIsModalOpen(true);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return Object.keys(tutorData.profileInfo).length > 0;
      case 2:
        return tutorData.subjects.length > 0;
      case 3:
        return tutorData.diplomas.length > 0;
      // Добавьте проверки для других шагов по мере необходимости
      default:
        return true;
    }
  };

  const renderButtons = () => (
    <div className={styles.container__buttons}>
      {currentStep > 1 && (
        <Button text="Назад" variant="white" onClick={handleBack} />
      )}
      <Button
        text={currentStep === 5 ? 'Сохранить анкету' : 'Сохранить и продолжить'}
        variant={isStepValid() ? 'purple' : 'disabled'}
        disabled={!isStepValid()}
        onClick={() => (currentStep === 5 ? handleSubmit() : handleNext())}
      />
    </div>
  );

  return (
    <>
      <main className={styles.application}>
        <h2 className={styles.application__title}>Анкета</h2>
        <Stepper currentStep={currentStep} />
        {currentStep === 1 && (
          <ProfileInfo
            onDataChange={(data) =>
              setTutorData((prev) => ({ ...prev, profileInfo: data }))
            }
          />
        )}
        {currentStep === 2 && (
          <SubjectForm
            initialData={tutorData.subjects}
            onDataChange={(data) =>
              setTutorData((prev) => ({ ...prev, subjects: data }))
            }
          />
        )}
        {currentStep === 3 && (
          <DiplomasUpload onDiplomasChange={handleDiplomasChange} />
        )}

        {/* Добавьте другие шаги по мере необходимости */}

        {renderButtons()}
         <ApplicationSuccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </main>
    </>
  );
};
export default TutorApplication;
