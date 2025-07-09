import { useState } from 'react';

import ProfileInfo from '../../features/TutorApplication/ui/profileInfo';
import SubjectForm from '../../features/TutorApplication/ui/subjectForm';
import Button from '../../shared/ui/button';
import Stepper from '../../shared/ui/stepper';

import styles from './index.module.scss';

const TutorApplication = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const [formData, setFormData] = useState({
    profileInfo: {}, // Данные ProfileInfo
    subjects: {}, // Данные SubjectForm
    diplomas: [], // Данные DiplomasUpload
    video: {}, // Данные VideoGreeting
    schedule: {} // Данные Schedule
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNext = (stepData: any) => {
    // any лучше заменить на конкретный тип, например ProfileInfoData | SubjectData | ....
    setFormData((prev) => ({ ...prev, ...stepData }));
    if (currentStep < 5) setCurrentStep((prev) => prev + 1);
    else setIsModalOpen(true); // Модалка после последнего шага
    // Здесь потом добавить отправку данных на сервер
  };

  const handleBack = () => setCurrentStep((prev) => prev - 1);

  const handleSubmit = () => {
    console.log('Данные анкеты:', formData); // Для отладки
    setIsModalOpen(true); // Показываем модалку "Успешно"
  };

  // Проверка валидности текущего шага (пример для шага 1)
  // const isStepValid = () => {
  //   switch (currentStep) {
  //     case 1: return !!formData.profileInfo.name; // Пример проверки
  //     case 2: return !!formData.subjects.length;
  //     // ... другие шаги
  //     default: return true;
  //   }
  // };

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
        {/* Рендер формы текущего шага */}
        {currentStep === 1 && <ProfileInfo onDataChange={setFormData} />}
        {currentStep === 2 && <SubjectForm initialData={formData.subjects} />}
        {/* ... другие шаги */}

        {renderButtons()}
        {isModalOpen && <ApplicationSuccessModal />}
      </main>
    </>
  );
};
export default TutorApplication;
