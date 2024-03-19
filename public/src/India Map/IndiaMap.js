// IndiaMap.js
import React from 'react';

const IndiaMap = ({ onStateClick }) => {
  const handleClick = (state) => {
    onStateClick(state);
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width="500"
      height="500"
    >
      {/* Your SVG map of India with clickable states */}
      {/* Each state should have an onClick handler */}
      <path
        d="M50,50 L100,50 L100,100 L50,100 Z"
        fill="green"
        onClick={() => handleClick('State Name')}
      />
      {/* Add more paths for other states */}
    </svg>
  );
};

export default IndiaMap;
