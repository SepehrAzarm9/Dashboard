import React from "react";
import { StatusCards } from "./statusCards/statusCards";
import { ChartCard } from "./chartcard/chartCard";
const ChartsSection = () => {
  return (
    <div className="Chart-section">
      <StatusCards />
      <ChartCard />
    </div>
  );
};

export default ChartsSection;
