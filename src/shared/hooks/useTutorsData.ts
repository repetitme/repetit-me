import { useEffect, useState } from 'react';
import * as API from '../../features/API/userApi';
import { ITutorData } from '../types/userData';

const useTutorsData = () => {
  const [tutors, setTutors] = useState<{ tutors: ITutorData[] }>({
    tutors: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTutorsData = async () => {
      try {
        const tutorsData = await API.getTutors();
        setTutors({ tutors: tutorsData });
      } catch (error) {
        setError(`Ошибка при загрузке данных репетиторов: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchTutorsData();
  }, []);

  return { tutors, loading, error };
};

export default useTutorsData;
