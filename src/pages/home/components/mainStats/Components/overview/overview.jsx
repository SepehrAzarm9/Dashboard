import React from "react";
import "./overview.css";
import { CardsSection } from "./components/cards";
import ChartsSection from "./components/charts";

const Overview = () => {
  return (
    <div className="Overview">
      <CardsSection />
      <ChartsSection />
    </div>
  );
};

export default Overview;
