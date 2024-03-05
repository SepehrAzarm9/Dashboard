import React from "react";
import "./stepper.css";

const AddMeetingStepper = ({ step }) => {
  console.log(`${step} inside the stepper`);
  return (
    <div className="Add-Meeting-Stepper">
      <div className="Steps-Wrap">
        <div className="Step">
          <div className={`Step-Box ${step == 1 ? "active" : ""}`}>1</div>
          <div className="Step-Content">
            <div className="Step-Title">Email Set Date</div>
            <div className="Step-Desc">Set Date</div>
          </div>
        </div>
        <div className="Stepper-Line" />
        <div className="Step">
          <div className={`Step-Box ${step == 2 ? "active" : ""}`}>2</div>
          <div className="Step-Content">
            <div className="Step-Title">Course</div>
            <div className="Step-Desc">Select Course</div>
          </div>
        </div>
        <div className="Stepper-Line" />
        <div className="Step">
          <div className={`Step-Box ${step == 3 ? "active" : ""}`}>3</div>
          <div className="Step-Content">
            <div className="Step-Title">Preview</div>
            <div className="Step-Desc">Preview Detail</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMeetingStepper;
