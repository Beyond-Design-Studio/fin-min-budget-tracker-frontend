import React from "react";

const ProgressBar = (props) => {

  const number = {
    "Sent to OSL": 1,
    "Reimbursed": 2,
    "Accounting Complete": 3
  }

  const progressBarStyle = {
    width: "5.5rem",
    height: "0.75rem",
    border: "2px solid black"
  }

  const max = 3;
  return (
    <div className="progress-container">
      <div
        style={{
          backgroundColor: "green",
          width: `${(props.state ? number[props.state] : 0) / max * 100}%`,
          height: "0.75rem"
        }}
      >
        <div style={progressBarStyle}></div>
      </div>
    </div>
  )
}

export default ProgressBar;
