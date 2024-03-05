import React, { useState } from "react";
import "./meetingTime.css";
import { CardDetail } from "../../../../../../../../components/cardDetail/cardDetail";
import AddMeetingModal from "./modal/addMeetingModal";
import { MeetingTimeData } from "../../../../../../../../utils/data";

const MeetingTime = () => {
  const [isOpen, setIsOpen] = useState();
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Meeting-Time-section">
      <div className="Meeting-Time-Title">
        Meeting Time
        <button className="Add-Meeting-button" onClick={toggleModal}>
          Add Meeting
        </button>
        {isOpen && <AddMeetingModal toggleModal={toggleModal} />}
      </div>
      <div className="cards">
        {MeetingTimeData.map((item) => (
          <CardDetail
            key={item.id}
            src={item.src}
            name={item.name}
            description={item.description}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
};

export default MeetingTime;
