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
        coords="296,1949,396,1765,664,1777,840,1589,1070,1360,1370,1668,1438,1788,1594,1828,1686,2008,1570,2348,1314,2368,1002,2600,574,2332"
        shape="poly"
      />
      {/* Add more area tags as needed */}
    </>
  );
};

export default ImageMapAreas;
