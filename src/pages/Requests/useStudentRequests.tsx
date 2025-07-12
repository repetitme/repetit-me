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
  const requests = Object.values(navOptionsStudent || navOptionsTutor);
  const [active, setActive] = useState(
    navOptions[role as keyof typeof navOptions].myList
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
  const onClick = (value: typeof active) => () => {
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
            requests.map((value: navOptionsStudent) =>
              (profile.requests?.[value].ids.length || 0).toString()
            )
          );
        }
        setTimeout(
          () =>
            getTutors().then((tutors) => {
              const filtered = requests.map((key: navOptionsStudent) => {
                return tutors.filter((tutor) => {
                  return profile?.requests?.[key].ids.includes(tutor.id);
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
