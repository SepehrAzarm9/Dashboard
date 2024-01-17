import React from "react";
import "./statusCards.css";

export const StatusCards = () => {
  return (
    <div className="status-cards">
      <div className="status">
        <div className="status-content">
          <div>New Clients</div>
          <div className="content-number">54</div>
        </div>
        <div className="status-percent">-2.7%</div>
      </div>
      <div className="status">
        <div className="status-content">
          <div>Invoice Overdue</div>
          <div className="content-number">6</div>
        </div>
        <div className="status-percent">-2.7%</div>
      </div>
    </div>
  );
};
