import React from "react";
import "./Clock.css";
import Clock from "./Clock";

const App = () => {
  return (
    <div>
      <Clock city="London" timeZone="Europe/London" />
      <Clock city="Stockholm" timeZone="Europe/Stockholm" />
      <Clock city="New York" timeZone="America/New_York" />
      <Clock city="Istanbul" timeZone="Europe/Istanbul" />
      <Clock city="Hong Kong" timeZone="Asia/Hong_Kong" />
    </div>
  );
};

export default App;
