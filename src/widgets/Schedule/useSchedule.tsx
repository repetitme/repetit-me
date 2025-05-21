import React from 'react';

const useSchedule = () => {
  const [schedule, setSchedule] = React.useState<
    Record<string, Record<string, boolean>>
  >({});
  console.log(schedule);

  const handleChange = (day: string, time: string) => {
    setSchedule((prev) => ({
      ...prev,
      [day]: { ...prev[day], [time]: !prev[day]?.[time] }
    }));
  };

  const time: string[] = [];
  for (let i = 6; i <= 23; i++) {
    time.push(`${i}:00`);
  }

  return { schedule, time, handleChange };
};

export default useSchedule;
