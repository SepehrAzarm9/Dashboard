import React from "react";
import "./addMeetingButtons.css";

const AddMeetingButtons = ({
  step,
  getPrevStep,
  handleComplete,
  handleNextStep,
}) => {
  return (
    <div className={`Btn-wrap ${step === 1 ? "step-one" : ""} `}>
      <button
        className={`Modal-back-btn ${step === 1 ? "btn-deactive" : ""} `}
        onClick={getPrevStep}
      >
        Back
      </button>
      <button
        className="Modal-btn"
        onClick={step === 3 ? handleComplete : handleNextStep}
      >
        {step === 3 ? "Complete" : "Continue"}
      </button>
    </div>
  );
};

export default AddMeetingButtons;
