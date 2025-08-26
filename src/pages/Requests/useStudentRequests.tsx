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
import {
  mockStudentProfile,
  mockTutorProfile
} from '../../widgets/UserCard/fakeApi/mockData';
import {
  getProfile,
  getStudents,
  getTutors
} from '../../widgets/UserCard/fakeApi/userApi';

const loadedState = {
  content: true,
  count: true,
  btn: true
};

const useStudentRequests = () => {
  const { role } = useAppContext();
  const isStudent = role === 'student';
  const [listHeight, setListHeight] = useState<number | undefined>(undefined);
  const requests = Object.values(
    role === 'student' ? navOptionsStudent : navOptionsTutor
  );
  const [active, setActive] = useState(
    navOptions[role as keyof typeof navOptions].myList
  );
  const [loaded, setLoaded] = useState(
    Object.fromEntries(
      Object.entries(loadedState).map(([key, value]) => [key, !value])
    )
  );
  const [lines, setLines] = useState(0);
  const [list, setList] = useState<Array<ITutorData[] | IStudentData[]>>([
    [],
    [],
    []
  ]);
  const [createdRequest, setCreatedRequests] = useState<
    Record<string, string[] | string>
  >({});
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
    }, 100);
  };

  useEffect(() => {
    // Mock API call to get the student or tutor profile
    getProfile(
      role === 'student' ? mockStudentProfile[0].id : mockTutorProfile[0].id,
      role as 'student' | 'tutor'
    )
      .then((profile: IStudentProfile | ITutorProfile | undefined) => {
        if (profile && profile.requests) {
          if ('createdRequest' in profile) {
            setCreatedRequests(profile.createdRequest.request);
            setLines(Object.values(profile.createdRequest.request).length);
          }
          setCount(
            requests.map((key: navOptionsStudent | navOptionsTutor) =>
              (
                (
                  profile.requests?.[key as keyof typeof profile.requests] as {
                    ids: string[];
                  }
                )?.ids?.length || 0
              ).toString()
            )
          );
        }
        setTimeout(
          () =>
            (isStudent ? getTutors() : getStudents()).then((person) => {
              const filtered = requests.map(
                (key: navOptionsStudent | navOptionsTutor) => {
                  return person.filter((person) => {
                    return (
                      profile &&
                      (
                        profile.requests?.[
                          key as keyof typeof profile.requests
                        ] as {
                          ids: string[];
                        }
                      )?.ids.includes(person.id)
                    );
                  });
                }
              ) as Array<ITutorData[] | IStudentData[]>;
              setList(filtered);
              setLoaded(loadedState);
            }),
          100
        );
      })
      .catch((error) => {
        console.error(
          `Ошибка при загрузке профиля ${isStudent ? 'студента' : 'репетитора'} :`,
          error
        );
        setLoaded(loadedState);
      });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      listHeight === undefined
        ? lines > 0
          ? setListHeight(1700 + lines * 30)
          : setListHeight(1500)
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
    createdRequest,
    onClick,
    setVisible
  };
};

export default useStudentRequests;
