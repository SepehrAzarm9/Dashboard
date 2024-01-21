import React from "react";
import "./personalData.css";
import { ReactComponent as Calendar } from "../../../../assets/svg/calendar.svg";
import { ReactComponent as Notifications } from "../../../../assets/svg/notification.svg";
import { ReactComponent as Massages } from "../../../../assets/svg/massages.svg";
import { ReactComponent as DownArrow } from "../../../../assets/svg/downarrow.svg";
import FormationStatus from "./components/formationStatus/formationStatus";
import TodoList from "./components/todoList/todo";
import MeetingSection from "./components/meeting/Meeting";
import profile from "../../../../assets/images/profile/3.png";

const PersonalData = () => {
  return (
    <div className="Personal-data">
      <div className="Personal-info-card">
        <div className="main-icons">
          <Calendar />
          <Notifications />
          <Massages />
          <div className="profile-pic">
            <img width="100%" height="100%" src={profile} alt={profile} />
          </div>
          <DownArrow />
        </div>
        <FormationStatus />
        <TodoList />
        <MeetingSection />
      </div>
    </div>
  );
};

export default PersonalData;
