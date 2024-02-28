import React from "react";
import "./formationStatus.css";
import ProgressBar from "../../../../../../../../hooks/progressBar/Progress-Bar";

const FormationStatus = () => {
  return (
    <div className="formation-status-card-main">
      <div className="formation-title">Formation Status</div>
      <div className="description">In Progress</div>
      <ProgressBar progress={60} barColor="rgba(105, 65, 198, 1)" />
      <div className="estimate">Estimated Processing</div>
      <div className="estimate-desc">4-5 Business Days</div>
      <button className="formation-button">View Status</button>
    </div>
  );
};

export default FormationStatus;
