import { useState } from 'react';

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

import { Diploma } from '../../features/tutorApplication/ui/diplomasUpload/type';
import { Subject } from '../../features/tutorApplication/ui/subjectForm/type';
import { VideoData } from '../../features/tutorApplication/ui/videoGreeting/type';
import TutorApplicationData from './type';

const TutorApplication = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const [tutorData, setTutorData] =
    useState<TutorApplicationData>(initialTutorData);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const getCurrentStepData = (
    tutorData: TutorApplicationData,
    step: number
  ) => {
    switch (step) {
      case 1:
        return { profileInfo: tutorData.profileInfo };
      case 2:
        return { subjects: tutorData.subjects };
      case 3:
        return { diplomas: tutorData.diplomas };
      case 4:
        return { video: tutorData.video };
      case 5:
        return { schedule: tutorData.schedule };
      default:
        return {};
    }
  };

  const handleNext = () => {
    const stepData = getCurrentStepData(tutorData, currentStep);

    setTutorData((prev) => ({ ...prev, ...stepData }));
    if (currentStep < 5) setCurrentStep((prev) => prev + 1);
    else setIsModalOpen(true);
    // Здесь потом добавить отправку данных на сервер
  };

  const handleBack = () => setCurrentStep((prev) => prev - 1);

  const handleDiplomasChange = (diplomas: Diploma[]) => {
    setTutorData((prev) => ({
      ...prev,
      diplomas: [...diplomas]
    }));
  };

  const handleVideoChange = (video: VideoData | null) => {
    setTutorData((prev) => ({
      ...prev,
      video: video
    }));
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleScheduleChange = (freeTime: Record<string, string[]>) => {
    const scheduleData = Object.keys(freeTime).reduce(
      (acc, day) => {
        acc[day] = freeTime[day];
        return acc;
      },
      {} as Record<string, string[]>
    );

    setTutorData((prev) => ({
      ...prev,
      schedule: scheduleData
    }));
  };

  const handleSubmit = () => {
    setIsModalOpen(true);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        const { firstName, lastName, telegram, avatar } = tutorData.profileInfo;
        return Boolean(firstName && lastName && telegram && avatar);
      case 2:
        return tutorData.subjects.length > 0;
      case 3:
        return tutorData.diplomas.length > 0;
      case 4:
        return !!tutorData.video?.url;
      case 5:
        return tutorData.schedule && Object.keys(tutorData.schedule).length > 0;
      default:
        return true;
    }
  };

  const renderButtons = () => (
    <div className={styles.buttons}>
      {currentStep > 1 && (
        <Button
          text="Назад"
          variant="white"
          onClick={handleBack}
          className={styles.button}
        />
      )}
      <Button
        text={currentStep === 5 ? 'Сохранить анкету' : 'Сохранить и продолжить'}
        variant={isStepValid() ? 'purple' : 'white'}
        disabled={!isStepValid()}
        onClick={() => (currentStep === 5 ? handleSubmit() : handleNext())}
        className={currentStep === 5 ? styles.button : styles.buttonNext}
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
          initialData={tutorData.profileInfo} 
            onDataChange={(data) =>
              setTutorData((prev) => ({ ...prev, profileInfo: data }))
            }
          />
        )}
        {currentStep === 2 && (
          <SubjectForm
            initialData={tutorData.subjects}
            onChange={(subjects: Subject[]) =>
              setTutorData((prev) => ({ ...prev, subjects: subjects }))
            }
          />
        )}
        {currentStep === 3 && (
          <DiplomasUpload initialData={tutorData.diplomas}
          onDiplomasChange={handleDiplomasChange} />
        )}
        {currentStep === 4 && (
          <VideoGreeting
            onVideoChange={handleVideoChange}
            initialVideo={tutorData.video}
          />
        )}
        {currentStep === 5 && <Schedule onChange={handleScheduleChange} />}

        {renderButtons()}
        <ApplicationSuccessModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
        />

        <div
          style={{
            display: 'flex',
            gap: '10px',
            marginBottom: '20px',
            justifyContent: 'center'
          }}
        >
          <Button
            text="Шаг 1"
            variant="white"
            onClick={() => setCurrentStep(1)}
          />
          <Button
            text="Шаг 2"
            variant="white"
            onClick={() => setCurrentStep(2)}
          />
          <Button
            text="Шаг 3"
            variant="white"
            onClick={() => setCurrentStep(3)}
          />
          <Button
            text="Шаг 4"
            variant="white"
            onClick={() => setCurrentStep(4)}
          />
          <Button
            text="Шаг 5"
            variant="white"
            onClick={() => setCurrentStep(5)}
          />
        </div>
      </main>
    </>
  );
};
export default TutorApplication;
