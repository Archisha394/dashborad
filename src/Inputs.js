import React, { useState } from 'react';
import "./Inputs.css"

function InputField() {
  const [value, setValue] = useState('');
  const [percentage, setPercentage] = useState(0);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    // Validate input to be between 0 and 100
    if (/^\d{0,2}$/.test(inputValue) && parseInt(inputValue) <= 100) {
      setValue(inputValue);
      setPercentage(inputValue);
    } else if (inputValue === '' || inputValue === '-') {
      // Allow empty or negative values
      setValue(inputValue);
      setPercentage(0);
    }
  };

  return (
    <div>
      <p className='value'>{value}%</p>
      <input
        className="inputs"
        type="text"
        placeholder="Number...."
        value={value}
        onChange={handleChange}
      />
      <div className="percentageLineContainer">
        <div
          className="percentageLine"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default InputField;
