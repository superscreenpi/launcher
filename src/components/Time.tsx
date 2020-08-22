import React, { useEffect, useState } from 'react';

function setCurrentTime(): string {
  return new Date().toLocaleTimeString();
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
