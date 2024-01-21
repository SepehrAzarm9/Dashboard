import React from "react";
import "./sidebar.css";

const SidebarItem = ({ children, title, isOpen }) => {
  return (
    <li>
      <div className={`sidebar-item ${isOpen ? "open" : ""}`}>
        {children}
        <div className={`sidebar-item-title ${isOpen ? "open" : ""}`}>
          {title}
        </div>
      </div>
    </li>
  );
};

export default SidebarItem;
