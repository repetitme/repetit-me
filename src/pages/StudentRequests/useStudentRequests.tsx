import { useEffect, useState } from 'react';

import {
  IStudentProfile,
  ITutorData,
  navOptions
} from '../../shared/types/userData';
import { mockStudentProfile } from '../../widgets/UserCard/fakeApi/mockData';
import {
  getStudentProfile,
  getTutors
} from '../../widgets/UserCard/fakeApi/userApi';

const loadedState = {
  content: true,
  count: true,
  btn: true
};
const useStudentRequests = () => {
  const [listHeight, setListHeight] = useState<number | undefined>(undefined);
  const requests = Object.values(navOptions);
  const [active, setActive] = useState(navOptions.myTutors);
  const [loaded, setLoaded] = useState(
    Object.fromEntries(
      Object.entries(loadedState).map(([key, value]) => [key, !value])
    )
  );
  const [tutorsList, setTutorsList] = useState<Array<ITutorData[]>>([
    [],
    [],
    []
  ]);
  const [count, setCount] = useState(['', '', '']);
  const [visible, setVisible] = useState(2);
  const onClick = (value: navOptions) => () => {
    if (active === value) return;
    setLoaded({ ...loadedState, content: false, btn: false });
    setActive(value);
    setListHeight(undefined);
    setVisible(2);
    setTimeout(() => {
      setLoaded(loadedState);
    }, 200);
  };

  useEffect(() => {
    getStudentProfile(mockStudentProfile[0].id)
      .then((profile: IStudentProfile | undefined) => {
        if (profile && profile.requests) {
          setCount(
            requests.map((value) =>
              (profile.requests?.[value].ids.length || 0).toString()
            )
          );
        }
        setTimeout(
          () =>
            getTutors().then((tutors) => {
              const filtered = requests.map((key) => {
                return tutors.filter((tutor) => {
                  return profile?.requests?.[key].ids.includes(tutor.id);
                });
              });
              setTutorsList(filtered);
              setLoaded(loadedState);
            }),
          1000
        );
      })
      .catch((error) => {
        console.error('Ошибка при загрузке профиля студента:', error);
        setLoaded(loadedState);
      });
  }, []);

  useEffect(() => {
    listHeight === undefined
      ? setListHeight(1200)
      : setListHeight(listHeight * 2);
  }, [visible, active]);

  return {
    listHeight,
    active,
    loaded,
    tutorsList,
    count,
    visible,
    onClick,
    setVisible
  };
};

export default useStudentRequests;
