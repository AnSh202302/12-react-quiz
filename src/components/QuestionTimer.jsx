import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remaningTime, setRemaningTime] = useState(timeout);

  useEffect(() => {
    console.log("timeout");

    const timeOut = setTimeout(onTimeout, timeout);
    // return () => {
    //   clearTimeout(timeOut);
    // };
  }, [onTimeout, timeout]);

  useEffect(() => {
    console.log("interval");

    setInterval(() => {
      const interval = setRemaningTime(
        (prevRemaningTime) => prevRemaningTime - 10
      );
    }, 10);
    // return () => {
    //   clearInterval(interval);
    // };
  }, []);

  return <progress id="questions-time" value={remaningTime} max={timeout} />;
}
