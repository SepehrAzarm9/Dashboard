import React from "react";
import "./sidebar.css";
import { ReactComponent as Dashboard } from "../../assets/svg/sidebar/dash.svg";
import { ReactComponent as Report } from "../../assets/svg/sidebar/report.svg";
import { ReactComponent as Bank } from "../../assets/svg/sidebar/bank.svg";
import { ReactComponent as Email } from "../../assets/svg/sidebar/email.svg";
import { ReactComponent as Group } from "../../assets/svg/sidebar/group.svg";
import { ReactComponent as List } from "../../assets/svg/sidebar/list.svg";
import { ReactComponent as Finance } from "../../assets/svg/sidebar/finance.svg";
import { ReactComponent as Settings } from "../../assets/svg/sidebar/settings.svg";

const Sidebar = () => {
  return (
    <div className="Sidebar-main">
      <div>
        <h2>Drop</h2>
        <button className="sidebar-button">
          {" "}
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.49667 11.41C1.24333 11.41 0.99 11.3167 0.79 11.1167C0.403333 10.73 0.403333 10.09 0.79 9.70333L4.79 5.70333L0.79 1.70333C0.403333 1.31667 0.403333 0.676667 0.79 0.29C1.17667 -0.0966666 1.81667 -0.0966666 2.20333 0.29L6.91 4.99667C7.29667 5.38333 7.29667 6.02333 6.91 6.41L2.20333 11.1167C2.00333 11.3167 1.75 11.41 1.49667 11.41Z"
              fill="#6941C6"
            />
          </svg>
        </button>
        <div className="main-nav-items">
          <Dashboard />
          <Report />
          <Bank />
          <Email />
          <Group />
          <List />
          <Finance />
        </div>
      </div>
      <Settings />
    </div>
  );
};

export default Sidebar;