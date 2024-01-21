import React from "react";
import "./Meeting.css";

const MeetingSection = () => {
  return (
    <div className="meeting-section-main">
      <div className="meeting-title">Board meeting</div>
      <div className="meeting-descriptions">Feb 22 at 6:00 PM</div>
      <div className="meeting-descriptions">
        You have been invited to attend a meeting of the Boeard Diretors.
      </div>
    </div>
  );
};

export default MeetingSection;
