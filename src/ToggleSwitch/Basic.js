// BasicSwitch.js
import React, { useState } from "react";
import "./Basic.css";

const BasicSwitch = ({ onToggle }) => {
  const [selectedOption, setSelectedOption] = useState("Y");

  const handleOptionChange = (value) => {
    setSelectedOption(value);
    onToggle(value === "I");
  };

  return (
    <div className="basic-container">
      <div className="basic-row">
        <div className="basic-col-xs-12">
          <div className="basic-switch">
            <input
              id="basic-switch-y"
              name="basic-tripple"
              type="radio"
              value="Y"
              className="basic-switch-input"
              checked={selectedOption === "Y"}
              onChange={() => handleOptionChange("Y")}
            />
            <label
              htmlFor="basic-switch-y"
              className="basic-switch-label basic-switch-label-y"
            >
              Basic
            </label>
            <input
              id="basic-switch-i"
              name="basic-tripple"
              type="radio"
              value="I"
              className="basic-switch-input"
              checked={selectedOption === "I"}
              onChange={() => handleOptionChange("I")}
            />
            <label
              htmlFor="basic-switch-i"
              className="basic-switch-label basic-switch-label-i"
            >
              Advanced
            </label>
            <span className="basic-switch-selector"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicSwitch;
