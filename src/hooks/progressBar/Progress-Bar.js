import React from "react";
import "./Progress-Bar.css";

const ProgressBar = ({ barColor, progress, height }) => {
  const Parentdiv = {
    height: height,
    width: "100%",
    backgroundColor: "whitesmoke",
    borderRadius: 40,
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: barColor,
    borderRadius: 40,
  };

  const progresstext = {
    padding: 10,
  };

  return (
    <div className="progress-bar-main" style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}></span>
      </div>
    </div>
  );
};

export default ProgressBar;
