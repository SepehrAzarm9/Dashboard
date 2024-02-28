import React from "react";
import "./personalData.css";
import FormationStatus from "./components/formationStatus/formationStatus";
import TodoList from "./components/todoList/todo";
import MeetingSection from "./components/meeting/Meeting";
import IconsSection from "./components/Icons/icons";

const PersonalData = () => {
  return (
    <div className="Personal-data">
      <div className="Personal-info-card">
        <IconsSection />
        <FormationStatus />
        <TodoList />
        <MeetingSection />
      </div>
    </div>
  );
};

export default PersonalData;
