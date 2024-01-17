import React from "react";
import "./cardDetail.css";

export const CardDetail = () => {
  return (
    <div className="card-detail-main">
      <div className="profile-pic"></div>
      <div className="card-detail-content">
        <div>name</div>
        <div>description</div>
        <div>9:14 PM</div>
      </div>
    </div>
  );
};
