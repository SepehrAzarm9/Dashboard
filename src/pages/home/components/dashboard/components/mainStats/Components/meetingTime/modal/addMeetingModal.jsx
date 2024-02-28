import React from "react";
import "./addMeetingModal.css";

const AddMeetingModal = ({ toggleModal }) => {
  return (
    <div className="Overlay" onClick={toggleModal}>
      <div className="Modal">
        <button onClick={toggleModal}>Close Modal</button>
      </div>
    </div>
  );
};

export default AddMeetingModal;
