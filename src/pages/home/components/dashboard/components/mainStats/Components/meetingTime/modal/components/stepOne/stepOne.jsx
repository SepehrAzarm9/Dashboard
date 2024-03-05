import React from "react";
import "./stepOne.css";
import DateOption from "../dateOption/dateOption";

const StepOne = () => {
  return (
    <div className="Step-One-Main">
      <div className="Email-Field-Main">
        <label htmlFor="Email-Input" className="Email-Field-Label">
          Email
        </label>
        <input type="email" id="Email-Input" className="Step-One-Input" />
      </div>
      <div className="Set-Date-main">
        <div className="Date-Label">Date</div>
        <DateOption title="1402/12/07 - 08:002" desc="Sunday" />
        <DateOption title="1402/12/07 - 08:004" desc="Sunday" />
        <DateOption title="1402/12/07 - 08:003" desc="Sunday" />
      </div>
    </div>
  );
};

export default StepOne;
