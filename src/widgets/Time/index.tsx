import { FC, useState, useEffect } from 'react';

const Time: FC = () => {
  const [timeState, setTimeState] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeState(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = timeState.getHours();
  const minute = timeState.getMinutes();
  const time = `Указано местное время ${hours <= 9 ? '0' : ''}${hours}:${minute <= 9 ? '0' : ''}${minute}`;
  return time;
};
export default Time;
