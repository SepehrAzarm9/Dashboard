import React from "react";
import "./stepTwo.css";
import CourseOption from "../course-option/courseOption";

const StepTwo = () => {
  return (
    <div className="Step-Two-Main">
      <div className="Course-Label">Course</div>
      <CourseOption title="Financial" desc="Ehsan Ebrahimi" />
      <CourseOption title="Accounting" desc="Sajjad Tahami" />
      <CourseOption title="Accounting Tax" desc="Mehrdad Moradpour" />
    </div>
  );
};

export default StepTwo;
