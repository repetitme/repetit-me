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
  mockTutorProfile,
  mockTutors
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
    role === 'unauth' ? '' : navOptions[role as keyof typeof navOptions].myList
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

  const cancelRequest = (id: string) => {
    setCount((prev) => {
      return prev.map((c, index) =>
        index === requests.indexOf(active) ? (parseInt(c) - 1).toString() : c
      );
    });
    setList((prev) => {
      return prev.map((list) => list.filter((item) => item.id !== id)) as (
        | ITutorData[]
        | IStudentData[]
      )[];
    });
  };

  const acceptRequest = (id: string) => {
    const requestsIndex = requests.indexOf(active);
    setCount((prev) => {
      return prev.map((c, index) =>
        index === 0
          ? (parseInt(c) + 1).toString()
          : index === requestsIndex
            ? (parseInt(c) - 1).toString()
            : c
      );
    });
    setList(
      (prev) =>
        [
          [prev[requestsIndex].find((item) => item.id === id), ...prev[0]],
          requestsIndex === 1
            ? prev[1].filter((item) => item.id !== id)
            : prev[1],
          requestsIndex === 2
            ? prev[2].filter((item) => item.id !== id)
            : prev[2]
        ] as (ITutorData[] | IStudentData[])[]
    );
  };

  const request = (id: string, day: string, time: string) => {
    console.log(
      `Репетитор: ${mockTutors.find((tutor) => tutor.id === id)?.name}, день: ${day}, время: ${time}`
    );

    // Placeholder for API call to request a tutor
  };

  useEffect(() => {
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
    cancelRequest,
    acceptRequest,
    request,
    setList,
    setCreatedRequests,
    onClick,
    setVisible
  };
};

export default useStudentRequests;
