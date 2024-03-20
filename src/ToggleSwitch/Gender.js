import React, { useState } from "react";
import "./Gender.css";

const Switch = () => {
  const [selectedOption, setSelectedOption] = useState("I");

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <div className="switch">
            <input
              id="switch-y"
              name="tripple"
              type="radio"
              value="Y"
              className="switch-input"
              checked={selectedOption === "Y"}
              onChange={() => handleOptionChange("Y")}
            />
            <label htmlFor="switch-y" className="switch-label switch-label-y">
              Male
            </label>
            <input
              id="switch-i"
              name="tripple"
              type="radio"
              value="I"
              className="switch-input"
              checked={selectedOption === "I"}
              onChange={() => handleOptionChange("I")}
            />
            <label htmlFor="switch-i" className="switch-label switch-label-i">
              Female
            </label>
            <input
              id="switch-n"
              name="tripple"
              type="radio"
              value="N"
              className="switch-input"
              checked={selectedOption === "N"}
              onChange={() => handleOptionChange("N")}
            />
            <label htmlFor="switch-n" className="switch-label switch-label-n">
              Other
            </label>
            <span className="switch-selector"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Switch;
