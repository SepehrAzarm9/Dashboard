import React, { useState } from "react";

const Dropdown = () => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const [selectedValue, setSelectedValue] = useState(options[0].value);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className="dropdown-container">
      <label htmlFor="dropdown">Select an option:</label>
      <select id="dropdown" value={selectedValue} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
