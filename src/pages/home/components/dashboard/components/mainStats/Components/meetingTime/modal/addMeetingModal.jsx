import React, { useState } from "react";
import "./addMeetingModal.css";
import StepOne from "./components/stepOne/stepOne";
import AddMeetingStepper from "./components/stepper/stepper";
import StepTwo from "./components/stepTwo/stepTwo";
import StepThree from "./components/stepThree/stepThree";
import AddMeetingButtons from "./components/buttons/addMeetingButtons";

const AddMeetingModal = ({ toggleModal }) => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
    console.log(step);
  };

  const getPrevStep = () => {
    setStep(step - 1);
  };

  const handleComplete = () => {
    toggleModal();
  };

  return (
    <div className="Add-Meeting-Wrap">
      <div className="Overlay" onClick={toggleModal} />
      <div className="Add-Meeting-Modal-Container">
        <div className="Add-Meeting-Modal-Main">
          <AddMeetingStepper step={step} />
          <div className="Add-Meeting-Steps">
            <div className="Add-Meeting-Steps-Container">
              {step === 1 ? (
                <StepOne />
              ) : step === 2 ? (
                <StepTwo />
              ) : (
                <StepThree />
              )}
            </div>
            <AddMeetingButtons
              step={step}
              handleNextStep={handleNextStep}
              handleComplete={handleComplete}
              getPrevStep={getPrevStep}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMeetingModal;
