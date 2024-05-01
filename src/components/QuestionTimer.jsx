import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remaningTime, setRemaningTime] = useState(timeout);

  useEffect(() => {
    setTimeout(onTimeout, timeout);
  }, [onTimeout, timeout]);

  useEffect(() => {
    setInterval(() => {
      setRemaningTime((prevRemaningTime) => prevRemaningTime - 10);
    }, 10);
  }, []);

  return <progress id="questions-time" value={remaningTime} max={timeout} />;
}
