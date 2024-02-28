import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Dashboard from "./components/dashboard/dashboard";

const HomePage = () => {
  return (
    <div className="Homepage-main">
      <Sidebar />
      <div className="Main-section">
        <Dashboard />
      </div>
    </div>
  );
};

export default HomePage;
