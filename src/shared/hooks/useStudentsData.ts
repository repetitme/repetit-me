import { useEffect, useState } from 'react';
import * as API from '../../features/API/userApi';
import { IStudentData } from '../types/userData';

const useStudentsData = () => {
  const [students, setStudents] = useState<{ students: IStudentData[] }>({
    students: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStudentsData = async () => {
      try {
        const studentsData = await API.getStudents();
        setStudents({ students: studentsData });
      } catch (error) {
        setError(`Ошибка при загрузке данных учеников: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchStudentsData();
  }, []);

  return { students, loading, error };
};

export default useStudentsData;
