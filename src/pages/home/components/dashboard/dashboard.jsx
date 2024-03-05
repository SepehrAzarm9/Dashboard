import React from "react";
import MainStats from "./components/mainStats/mainStats";
import PersonalData from "./components/personalData/personalData";
import "./components/index.css";
import EmployeeDropdown from "./components/personalData/components/dropdown/dropdown";

const Dashboard = () => {
  return (
    <div className="Dashboard-main">
      <EmployeeDropdown />
      <div className="Dash-Row">
        <div className="main_states">
          <MainStats />
        </div>
        <div className="personal_data">
          <PersonalData />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
