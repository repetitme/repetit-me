import { useEffect, useMemo, useState } from 'react';

import ApplicationSuccessModal from '../../features/tutorApplication/ui/ApplicationSuccessModal';
import ProfileInfo from '../../features/tutorApplication/ui/ProfileInfo';
import DiplomasUpload from '../../features/tutorApplication/ui/diplomasUpload';
import Schedule from '../../features/tutorApplication/ui/schedule';
import SubjectForm from '../../features/tutorApplication/ui/subjectForm';
import VideoGreeting from '../../features/tutorApplication/ui/videoGreeting';
import Button from '../../shared/ui/button';
import Stepper from '../../shared/ui/stepper';
import { initialTutorData } from './data';

import styles from './index.module.scss';

import { Subject } from '../../features/tutorApplication/ui/subjectForm/type';
import TutorApplicationData, { TutorField } from './type';

const TutorApplicationPage = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const [tutorData, setTutorData] =
    useState<TutorApplicationData>(initialTutorData);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNext = () => {
    if (currentStep < 5) setCurrentStep((prev) => prev + 1);
    else setIsModalOpen(true);
    // TODO: добавить отправку данных на сервер
  };

  const handleBack = () => setCurrentStep((prev) => prev - 1);

  const handleFieldChange = <K extends TutorField>(
    field: K,
    value: TutorApplicationData[K]
  ) => {
    setTutorData((prev) => ({ ...prev, [field]: value }));
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const isSubjectValid = (subject: Subject): boolean => {
    const { experience, categories } = subject;

    if (!experience || categories.some((cat) => !cat.price)) {
      return false;
    }

    return true;
  };

  const isStepValid = (
    data: TutorApplicationData,
    currentStep: number
  ): boolean => {
    switch (currentStep) {
      case 1: {
        const { firstName, lastName, telegram, avatar } = data.profileInfo;
        return Boolean(firstName && lastName && telegram && avatar);
      }
      case 2: {
        return Boolean(
          data.subjects.every((subject) => isSubjectValid(subject))
        );
      }
      case 5: {
        if (!data.schedule || Object.keys(data.schedule).length === 0)
          return false;

        return Object.values(data.schedule).every(
          (daySchedule) => Array.isArray(daySchedule) && daySchedule.length > 0
        );
      }
      default:
        return true;
    }
  };

  const calculateProgress = (data: TutorApplicationData): number => {
    let points = 0;

    if (data.profileInfo.avatar) points += 200;

    points += Math.min(data.diplomas.length * 50, 500);

    if (data.profileInfo.about) {
      points += 300;
    }
    if (data.video?.url) points += 400;

    const percentage = Math.round((points / 1400) * 100);
    return percentage;
  };

  const progress = useMemo(() => calculateProgress(tutorData), [tutorData]);

  useEffect(() => {
    localStorage.setItem(
      'tutorProgress',
      JSON.stringify({
        data: tutorData,
        progress: progress
      })
    );
  }, [tutorData]);

  const renderButtons = () => (
    <div className={styles.buttons}>
      {currentStep > 1 && (
        <Button
          text="Назад"
          variant="white"
          size="large"
          onClick={handleBack}
          className={styles.button}
        />
      )}
      <Button
        text={currentStep === 5 ? 'Сохранить анкету' : 'Сохранить и продолжить'}
        variant="purple"
        size="large"
        disabled={!isStepValid(tutorData, currentStep)}
        onClick={handleNext}
        className={currentStep === 5 ? styles.button : styles.buttonNext}
      />
    </div>
  );

  return (
    <main className={styles.application}>
      <h2 className={styles.application__title}>Анкета</h2>
      <Stepper currentStep={currentStep} />

      {currentStep === 1 && (
        <ProfileInfo
          initialData={tutorData.profileInfo}
          onDataChange={(data) =>
            setTutorData((prev) => ({ ...prev, profileInfo: data }))
          }
        />
      )}
      {currentStep === 2 && (
        <SubjectForm
          initialData={tutorData.subjects}
          onChange={(subjects) => handleFieldChange('subjects', subjects)}
        />
      )}
      {currentStep === 3 && (
        <DiplomasUpload
          initialData={tutorData.diplomas}
          onDiplomasChange={(diplomas) => {
            handleFieldChange('diplomas', diplomas);
          }}
        />
      )}
      {currentStep === 4 && (
        <VideoGreeting
          onVideoChange={(video) => handleFieldChange('video', video)}
          initialVideo={tutorData.video}
        />
      )}
      {currentStep === 5 && (
        <Schedule
          onChange={(freeTime) => handleFieldChange('schedule', freeTime)}
        />
      )}

      {renderButtons()}
      <ApplicationSuccessModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </main>
  );
};
export default TutorApplicationPage;
