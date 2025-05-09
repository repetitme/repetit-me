import { TutorFilters } from '../../features/TutorFilters';
import { IStudentData, ITutorData } from '../../shared/types/userData';
import { TelegramBlock } from '../../shared/ui/telegramBlock';
import Footer from '../../widgets/Footer';
import Header from '../../widgets/Header';
import UserCard from '../../widgets/UserCard';
import useUsersData from '../../widgets/UserCard/fakeApi/useUserData';

import styles from './index.module.scss';

const TutorCatalog = () => {
  /* Для вызова компонента, необходимо вызвать хук для отображения 
  моковых данных через промисы апи. В дальнейшем, для работы с карточками, нужно вызвать 
  в компонентах, где нужны карточки пользователей, и передавать им через пропсы данные и 
  роль пользователя. Из app убрать текущий тестовый стенд */

  const {
    data: tutors,
    loading: loadingTutors,
    error: errorTutors
  } = useUsersData<ITutorData>('tutors');

  const {
    data: students,
    loading: loadingStudents,
    error: errorStudents
  } = useUsersData<IStudentData>('students');

  if (loadingTutors || loadingStudents) {
    return <div>Loading...</div>;
  }

  if (errorTutors) {
    return <div>{errorTutors}</div>;
  } else if (errorStudents) {
    return <div>{errorStudents}</div>;
  }

  return (
    <>
      {/* <Header auth="unauth" /> */}
      <main className={styles.container}>
        <div
          style={{
            marginInline: 'auto',
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {tutors.slice(0, 1).map((tutor) => (
            <UserCard key={tutor.id} role="unAuthorized" tutorData={tutor} />
          ))}

          {tutors.slice(1, 2).map((tutor) => (
            <UserCard key={tutor.id} role="student" tutorData={tutor} />
          ))}

          {tutors.slice(2, 3).map((tutor) => (
            <UserCard
              key={tutor.id}
              role="student"
              tutorData={tutor}
              handleSubmit={true}
            />
          ))}

          {tutors.slice(3, 4).map((tutor) => (
            <UserCard key={tutor.id} role="card" tutorData={tutor} />
          ))}

          {students.slice(0, 1).map((student) => (
            <UserCard key={student.id} role="tutor" studentData={student} />
          ))}

          {students.slice(1, 2).map((student) => (
            <UserCard
              key={student.id}
              role="tutor"
              studentData={student}
              handleSubmit={true}
            />
          ))}
        </div>
        <TutorFilters
          onSubmit={(values) => console.log(values)}
          percentage={10}
        />
        <TelegramBlock />
      </main>
      {/* <Footer role="unauthorized" /> */}
    </>
  );
};

export default TutorCatalog;
