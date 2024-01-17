import React from "react";
import "./recentEmails.css";
import { CardDetail } from "../../../../../../components/cardDetail/cardDetail";

const RecentEmails = () => {
  return (
    <div className="Emails-section">
      <div className="Emails-Title">Recent Emails</div>
      <div className="cards">
        <CardDetail />
        <CardDetail />
        <CardDetail />
      </div>
    </div>
  );
};

export default RecentEmails;
