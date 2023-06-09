import React, { useEffect, useState } from "react";
import "./Clock.css";

const Clock = ({ city, timeZone }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString("en-GB", { timeZone }));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timeZone]);

  return (
    <div className="clock-container">
      <div className="time">{time}</div>
      <div className="city">{city}</div>
    </div>
  );
};

export default Clock;
