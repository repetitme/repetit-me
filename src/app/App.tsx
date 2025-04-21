import UserCard from '../widgets/UserCard';
import useUsersData from '../shared/hooks/useUsersData';
// import AppRouter from './router/AppRouter';

import '../assets/index.scss';

function App() {
  /* Для вызова компонента, необходимо вызвать хук для отображения 
  моковых данных через промисы апи. В дальнейшем, для работы с карточками, нужно вызвать 
  в компонентах, где нужны карточки пользователей, и передавать им через пропсы данные и 
  роль пользователя. Из app убрать текущий тестовый стенд */
  const { userData, loading, error } = useUsersData();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
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
        {userData.tutors.slice(0, 1).map((tutor) => (
          <UserCard key={tutor.id} role="unAuthorized" tutorData={tutor} />
        ))}

        {userData.tutors.slice(1, 2).map((tutor) => (
          <UserCard key={tutor.id} role="student" tutorData={tutor} />
        ))}

        {userData.tutors.slice(2, 3).map((tutor) => (
          <UserCard
            key={tutor.id}
            role="student"
            tutorData={tutor}
            handleSubmit={true}
          />
        ))}

        {userData.tutors.slice(3, 4).map((tutor) => (
          <UserCard key={tutor.id} role="card" tutorData={tutor} />
        ))}

        {userData.students.slice(0, 1).map((student) => (
          <UserCard key={student.id} role="tutor" studentData={student} />
        ))}

        {userData.students.slice(1, 2).map((student) => (
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
