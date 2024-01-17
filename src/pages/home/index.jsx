import React from "react";
import "./components/index.css";
import MainStats from "./components/mainStats/mainStats";
import PersonalData from "./components/personalData/personalData";
import Sidebar from "../../components/sidebar/sidebar";

const HomePage = () => {
  return (
    <div className="Homepage-main">
      <Sidebar />
      <div className="Dashboard-main">
        <h1 className="Welcome-msg">Welcome Sajjad</h1>
        <div className="Dash-Row">
          <MainStats />
          <PersonalData />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
