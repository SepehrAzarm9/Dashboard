import React, { useState } from "react";
import "./sidebar.css";
import { ReactComponent as Dashboard } from "../../assets/svg/sidebar/dash.svg";
import { ReactComponent as Report } from "../../assets/svg/sidebar/report.svg";
import { ReactComponent as Bank } from "../../assets/svg/sidebar/bank.svg";
import { ReactComponent as Email } from "../../assets/svg/sidebar/email.svg";
import { ReactComponent as Group } from "../../assets/svg/sidebar/group.svg";
import { ReactComponent as List } from "../../assets/svg/sidebar/list.svg";
import { ReactComponent as Finance } from "../../assets/svg/sidebar/finance.svg";
import { ReactComponent as Settings } from "../../assets/svg/sidebar/settings.svg";
import { ReactComponent as RightArrow } from "../../assets/icons/rightArropw.svg";
import { ReactComponent as LeftArrow } from "../../assets/icons/leftArrow.svg";

import SidebarItem from "./sidebarItem";

const Sidebar = () => {
  const [isOpen, setisOpen] = useState(false);

  const toggleSidebar = () => {
    setisOpen(!isOpen);
  };

  const items = [
    { id: 1, logo: <Dashboard />, title: "Dashboard" },
    { id: 2, logo: <Report />, title: "Report" },
    { id: 3, logo: <Bank />, title: "Bank" },
    { id: 4, logo: <Email />, title: "Email" },
    { id: 5, logo: <Group />, title: "Group" },
    { id: 6, logo: <List />, title: "List" },
    { id: 7, logo: <Finance />, title: "Finance" },
  ];

  return (
    <div className={`Sidebar-main ${isOpen ? "open" : ""}`}>
      <div>
        <h2 className="sidebar-title">Drop</h2>
        <button className="sidebar-button" onClick={toggleSidebar}>
          {isOpen ? <LeftArrow /> : <RightArrow />}
        </button>
        <div className="main-nav-items">
          <ul>
            {items.map((item) => (
              <SidebarItem title={item.title} isOpen={isOpen}>
                {item.logo}
              </SidebarItem>
            ))}
          </ul>
        </div>
      </div>
      <div className={`sidebar-item ${isOpen ? "open" : ""}`}>
        <Settings />
        <p className={`sidebar-item-title ${isOpen ? "open" : ""}`}>Settings</p>
      </div>
    </div>
  );
};

export default Sidebar;
