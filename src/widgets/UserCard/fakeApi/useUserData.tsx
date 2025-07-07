import { useEffect, useState } from 'react';

import { IStudentData, ITutorData } from '../../../shared/types/userData';
import * as API from '../../../widgets/UserCard/fakeApi/userApi';

/*
  Папка fakeApi со всем содержимым необходима для тестирования компонентов UserCard, 
  при интеграции React Query в проект и получении данных с бэкэнда,
  папку можно удалить
*/

type TDataType = 'tutors' | 'students';

const useUsersData = <T extends ITutorData | IStudentData>(
  dataType: TDataType
) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      try {
        let fetchedData: ITutorData[] | IStudentData[] = [];
        if (dataType === 'tutors') {
          fetchedData = await API.getTutors();
        } else if (dataType === 'students') {
          fetchedData = await API.getStudents();
        }

        if (fetchedData.length > 0) {
          setData(fetchedData as T[]);
        } else {
          setError('Данные не найдены');
        }
      } catch (error) {
        setError(`Ошибка при загрузке данных: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dataType]);

  return { data, loading, error };
};

export default useUsersData;
