import React from "react";
import "./courseOption.css";
import { ReactComponent as CourseLogo } from "../../../../../../../../../../../assets/svg/course-logo.svg";

const CourseOption = ({ title, desc }) => {
  return (
    <div className="Course-Option-Content">
      <label htmlFor={title} className="Course-Option-Content">
        <div className="Course-Option-info-wrap">
          <CourseLogo />
          <div className="Course-option-info">
            <div className="Option-Title">{title}</div>
            <div className="Option-Desc">{desc}</div>
          </div>
        </div>
      </label>
      <input type="radio" id={title} value={title} />
    </div>
  );
};

export default CourseOption;
