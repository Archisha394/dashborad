import React, { useState } from 'react';
import "./Inputs.css"

function InputField() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      {/* Input field with placeholder */}
      <p>You entered: {value}</p>
      <input
      className="inputs"
        type="text"
        placeholder="Number...." // Placeholder text
        value={value}
        onChange={handleChange}
      />
      {/* Displaying the value entered in the input field */}
    </div>
  );
}

export default InputField;
