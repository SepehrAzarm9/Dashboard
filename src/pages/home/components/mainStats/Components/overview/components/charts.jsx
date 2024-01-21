import React from "react";
import { StatusCards } from "./statusCards/statusCards";
import { ChartCard } from "./chartcard/chartCard";
const ChartsSection = () => {
  return (
    <div className="Chart-section">
      <div className="Statuscards-main">
        <StatusCards />
      </div>
      <div className="Chart-card-main">
        <ChartCard />
      </div>
    </div>
  );
};

export default ChartsSection;
