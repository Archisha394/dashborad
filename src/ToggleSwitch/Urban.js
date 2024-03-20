import React, { useState } from "react";
import "./Urban.css";

const GenderSwitch = ({ selectedOption, handleOptionChange }) => {
  // const [selectedOption, setSelectedOption] = useState("I");

  // const handleOptionChange = (value) => {
  //   setSelectedOption(value);
  // };

  return (
    <div className="gender-container">
      <div className="gender-row">
        <div className="gender-col-xs-12">
          <div className="gender-switch">
            <input
              id="gender-switch-y"
              name="gender-tripple"
              type="radio"
              value="Y"
              className="gender-switch-input"
              checked={selectedOption === "Y"}
              onChange={() => handleOptionChange("Y")}
            />
            <label
              htmlFor="gender-switch-y"
              className="gender-switch-label gender-switch-label-y"
            >
              Urban
            </label>
            <input
              id="gender-switch-i"
              name="gender-tripple"
              type="radio"
              value="I"
              className="gender-switch-input"
              checked={selectedOption === "I"}
              onChange={() => handleOptionChange("I")}
            />
            <label
              htmlFor="gender-switch-i"
              className="gender-switch-label gender-switch-label-i"
            >
              Rural
            </label>
            <input
              id="gender-switch-n"
              name="gender-tripple"
              type="radio"
              value="N"
              className="gender-switch-input"
              checked={selectedOption === "N"}
              onChange={() => handleOptionChange("N")}
            />
            <label
              htmlFor="gender-switch-n"
              className="gender-switch-label gender-switch-label-n"
            >
              Total
            </label>
            <span className="gender-switch-selector"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenderSwitch;
