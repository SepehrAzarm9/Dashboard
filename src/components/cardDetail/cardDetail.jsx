import React from "react";
import "./cardDetail.css";

export const CardDetail = ({ src, name, description, date }) => {
  return (
    <div className="card-detail-main">
      <div className="profile-pic">
        <img width="100%" height="100%" src={src} alt={src} />
      </div>
      <div className="card-detail-content">
        <div className="card-detail-data">{name}</div>
        <div className="card-detail-data">{description}</div>
        <div className="card-detail-data">{date}</div>
      </div>
    </div>
  );
};
