import React from "react";
import "./mainStats.css";
import RecentEmails from "./Components/recentEmails/recentEmails";
import Overview from "./Components/overview/overview";

const MainStats = () => {
  return (
    <div className="Stats">
      <Overview />
      <RecentEmails />
    </div>
  );
};

export default MainStats;
