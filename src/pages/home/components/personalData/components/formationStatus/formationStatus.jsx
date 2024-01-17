import React from "react";
import "./formationStatus.css";

const FormationStatus = () => {
  return (
    <div className="formation-status-card-main">
      <div className="formation-title">Formation Status</div>
      <div className="description">In Progress</div>
      <progress value={0.7} className="progress-bar" />
      <div className="estimate">Estimated Processing</div>
      <div className="estimate-desc">4-5 Business Days</div>
      <button className="formation-button">View Status</button>
    </div>
  );
};

export default FormationStatus;
