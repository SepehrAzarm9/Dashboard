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
    { id: 1, logo: <Dashboard />, title: "Dashboard", isActive: true },
    { id: 2, logo: <Report />, title: "Report", isActive: false },
    { id: 3, logo: <Bank />, title: "Bank", isActive: false },
    { id: 4, logo: <Email />, title: "Email", isActive: false },
    { id: 5, logo: <Group />, title: "Group", isActive: false },
    { id: 6, logo: <List />, title: "List", isActive: false },
    { id: 7, logo: <Finance />, title: "Finance", isActive: false },
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
              <SidebarItem
                title={item.title}
                isActive={item.isActive}
                isOpen={isOpen}
                key={item.id}
              >
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
