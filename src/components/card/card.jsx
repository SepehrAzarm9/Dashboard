import React from "react";
import "./card.css";

export const Card = ({ children, amount, description }) => {
  return (
    <div className="card-main">
      {children}
      <div className="title">$ {amount}</div>
      <div className="desc">{description}</div>
    </div>
  );
};
