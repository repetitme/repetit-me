import useStudentsData from '../shared/hooks/useStudentsData';
import useTutorsData from '../shared/hooks/useTutorsData';
import UserCard from '../widgets/UserCard';

// import AppRouter from './router/AppRouter';

import '../assets/index.scss';

function App() {
  /* Для вызова компонента, необходимо вызвать хук для отображения 
  моковых данных через промисы апи. В дальнейшем, для работы с карточками, нужно вызвать 
  в компонентах, где нужны карточки пользователей, и передавать им через пропсы данные и 
  роль пользователя. Из app убрать текущий тестовый стенд */
  const {
    tutors,
    loading: loadingTutors,
    error: errorTutors
  } = useTutorsData();
  const {
    students,
    loading: loadingStudents,
    error: errorStudents
  } = useStudentsData();

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
      {/* <AppRouter /> */}
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
        {tutors.tutors.slice(0, 1).map((tutor) => (
          <UserCard key={tutor.id} role="unAuthorized" tutorData={tutor} />
        ))}

        {tutors.tutors.slice(1, 2).map((tutor) => (
          <UserCard key={tutor.id} role="student" tutorData={tutor} />
        ))}

        {tutors.tutors.slice(2, 3).map((tutor) => (
          <UserCard
            key={tutor.id}
            role="student"
            tutorData={tutor}
            handleSubmit={true}
          />
        ))}

        {tutors.tutors.slice(3, 4).map((tutor) => (
          <UserCard key={tutor.id} role="card" tutorData={tutor} />
        ))}

        {students.students.slice(0, 1).map((student) => (
          <UserCard key={student.id} role="tutor" studentData={student} />
        ))}

        {students.students.slice(1, 2).map((student) => (
          <UserCard
            key={student.id}
            role="tutor"
            studentData={student}
            handleSubmit={true}
          />
        ))}
      </div>
    </>
  );
}

export default App;
