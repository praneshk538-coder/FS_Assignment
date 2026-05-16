import React, { useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => (prev === 10 ? 0 : prev + 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <h2>⏱ Timer: {time}</h2>;
}

export default Timer;