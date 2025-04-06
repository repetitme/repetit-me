import { useEffect, useState } from 'react';
import * as API from '../../features/API/userApi'; // Импортируйте ваш API
import { ITutorData, IStudentData } from '../types/userData';

const useUsersData = () => {
  const [userData, setUserData] = useState<{
    tutors: ITutorData[];
    students: IStudentData[];
  }>({
    tutors: [],
    students: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsersData = async () => {
      try {
        const tutorsData = await API.getTutors();
        const studentsData = await API.getStudents();

        setUserData({ tutors: tutorsData, students: studentsData });
      } catch (error) {
        setError(`Ошибка при загрузке данных: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchUsersData();
  }, []);

  return { userData, loading, error };
};

export default useUsersData;
