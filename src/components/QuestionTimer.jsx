import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [remaningTime, setRemaningTime] = useState(timeout);

  useEffect(() => {
    const timeOut = setTimeout(onTimeout, timeout);
    return () => {
      clearTimeout(timeOut);
    };
  }, [onTimeout, timeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaningTime((prevRemaningTime) => prevRemaningTime - 10);
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="questions-time"
      value={remaningTime}
      max={timeout}
      className={mode}
    />
  );
}
