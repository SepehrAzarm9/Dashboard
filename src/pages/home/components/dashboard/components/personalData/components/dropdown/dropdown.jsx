import React, { useState } from "react";
import "./dropdown.css";

const EmployeeDropdown = () => {
  const items = [
    "MenuItem",
    "MenuItem",
    "MenuItem",
    "MenuItem",
    "MenuItem",
    "MenuItem",
    "MenuItem",
  ];
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="Combo-List-MainDiv">
      <div className="Dropdown-field" onClick={toggleDropdown}>
        Selected
        <div className="downarrow-button">/</div>
      </div>
      {isOpen ? (
        <div className="dropdown-main">
          <input
            className="Dropdown-search-field"
            type="text"
            placeholder="Search Values"
          />
          <ul className="Menu-Items-container">
            {items.map((item) => (
              <li className="Menu-Item">
                <input
                  type="checkbox"
                  className="Menu-Item-Checkbox"
                  value={item}
                />
                <span className="Menu-Item-Title">{item}</span>
              </li>
            ))}
          </ul>
          <button className="apply-button" onClick={toggleDropdown}>
            Apply
          </button>
          <div className="selected-employees-info">
            <span className="selected-employees-text">Selected: 5</span>
            <span className="selected-employees-clear">Clear Selected</span>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default EmployeeDropdown;
