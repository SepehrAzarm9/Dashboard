import React from "react";
import "./dateOption.css";
import { ReactComponent as DateLogo } from "../../../../../../../../../../../assets/svg/dateLogo.svg";

const DateOption = ({ title, desc }) => {
  return (
    <div className="Date-Option-Content">
      <label htmlFor={title} className="Date-Option-Content">
        <div className="Date-Option-info-wrap">
          <DateLogo />
          <div className="Date-option-info">
            <div className="Option-Title">{title}</div>
            <div className="Option-Desc">{desc}</div>
          </div>
        </div>
      </label>
      <input type="radio" id={title} value={title} />
    </div>
  );
};

export default DateOption;
