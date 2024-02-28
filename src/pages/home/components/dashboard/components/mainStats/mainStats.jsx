import React from "react";
import "./mainStats.css";
import Overview from "./Components/overview/overview";
import MeetingTime from "./Components/meetingTime/meetingTime";

const MainStats = () => {
  return (
    <div className="Stats">
      <Overview />
      <MeetingTime />
    </div>
  );
};

export default MainStats;
