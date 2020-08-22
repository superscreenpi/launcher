import React, { useEffect, useState } from 'react';
import { DateTime } from 'luxon';

function setCurrentTime(): string {
  return DateTime.local().toLocaleString(DateTime.TIME_SIMPLE) || '';
}

export const Time: React.FC = () => {
  const [time, setTime] = useState(setCurrentTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(setCurrentTime());
    }, 1000);
    return (): void => clearInterval(interval);
  }, []);

  return <span className="time">{time}</span>;
};
