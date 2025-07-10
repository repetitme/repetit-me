import { useEffect, useState } from 'react';

import { useAppContext } from '../../app/AppContext';
import {
  IStudentData,
  IStudentProfile,
  ITutorData,
  ITutorProfile,
  navOptions,
  navOptionsStudent,
  navOptionsTutor
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
  const { role } = useAppContext();
  const [listHeight, setListHeight] = useState<number | undefined>(undefined);
  const requests = Object.values(navOptions[role as keyof typeof navOptions]);
  const [active, setActive] = useState(
    navOptions[role as keyof typeof navOptions]
  );
  const [loaded, setLoaded] = useState(
    Object.fromEntries(
      Object.entries(loadedState).map(([key, value]) => [key, !value])
    )
  );
  const [list, setList] = useState<Array<ITutorData[] | IStudentData[]>>([
    [],
    [],
    []
  ]);
  const [count, setCount] = useState(['', '', '']);
  const [visible, setVisible] = useState(3);
  const onClick = (value: (typeof navOptions)['student' | 'tutor']) => () => {
    if (active === value) return;
    setLoaded({ ...loadedState, content: false, btn: false });
    setActive(value);
    setListHeight(undefined);
    setVisible(3);
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
              (
                profile.requests?.[value as keyof typeof profile.requests].ids
                  .length || 0
              ).toString()
            )
          );
        }
        setTimeout(
          () =>
            getTutors().then((tutors) => {
              const filtered = requests.map((key) => {
                return tutors.filter((tutor) => {
                  return profile?.requests?.[
                    key as keyof typeof profile.requests
                  ].ids.includes(tutor.id);
                });
              });
              setList(filtered);
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
    setTimeout(() => {
      listHeight === undefined
        ? setListHeight(1500)
        : setListHeight(listHeight + 1400);
    }, 10);
  }, [visible, active]);

  return {
    listHeight,
    active,
    loaded,
    list,
    count,
    visible,
    onClick,
    setVisible
  };
};

export default useStudentRequests;
