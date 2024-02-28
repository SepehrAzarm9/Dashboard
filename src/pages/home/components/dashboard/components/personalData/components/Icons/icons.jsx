import React from "react";
import "./icons.css";
import { ReactComponent as Calendar } from "../../../../../../../../assets/svg/calendar.svg";
import { ReactComponent as Notifications } from "../../../../../../../../assets/svg/notification.svg";
import { ReactComponent as Massages } from "../../../../../../../../assets/svg/massages.svg";
import { ReactComponent as DownArrow } from "../../../../../../../../assets/svg/downarrow.svg";
import profile from "../../../../../../../../assets/images/profile/3.png";

const IconsSection = () => {
  return (
    <div className="main-icons">
      <Calendar />
      <Notifications />
      <Massages />
      <div className="profile-pic">
        <img width="100%" height="100%" src={profile} alt={profile} />
      </div>
      <DownArrow />
    </div>
  );
};

export default IconsSection;
