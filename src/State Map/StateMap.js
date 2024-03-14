// StateMap.js
import React from 'react';
import { useState } from 'react';
import IndiaMap from './IndiaMap';

const StateMap = () => {
  const [selectedState, setSelectedState] = useState(null);

  const handleStateClick = (state) => {
    setSelectedState(state);
  };

  return (
    <div>
      <IndiaMap onStateClick={handleStateClick} />
      {selectedState && (
        <div>
          <h2>{selectedState}</h2>
          {/* Render the map of the selected state here */}
        </div>
      )}
    </div>
  );
};

export default StateMap;
