import React from 'react';

const ImageMapAreas = ({ handleClick }) => {
  return (
    <>
      {/* Add map areas for each state */}
      <area 
        alt="JnK"
        title="JnK"
        onClick={() => handleClick("JnK")}
        coords="222,157,179,131,177,86,199,66,153,38,169,20,221,4,245,21,283,52,296,60,345,42,364,53,350,91,336,105,317,100,342,150,329,157,263,126,241,144,235,153"
        shape="poly"
      />
      <area 
        alt="Maharashtra"
        title="Maharashtra"
        onClick={() => handleClick("Maharashtra")}
        coords="136,555,209,515,374,513,367,594,313,557,155,685,134,582,133,573,131,566"
        shape="poly"
      />
      {/* Add more area tags as needed */}
    </>
  );
};

export default ImageMapAreas;
