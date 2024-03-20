import React from 'react';

const GenderDemographics = () => {
  return (
    <svg width="200" height="200">
      {/* Blue circle representing the equal gender ratio */}
      <circle cx="100" cy="100" r="80" fill="blue" />

      {/* Text label for the gender ratio */}
      <text x="100" y="100" textAnchor="middle" dominantBaseline="central" fill="white">
        1:1
      </text>

      {/* Text label for the number of men */}
      <text x="20" y="180" textAnchor="start" dominantBaseline="middle" fill="black">
        Men 5.6K
      </text>

      {/* Text label for the number of women */}
      <text x="180" y="180" textAnchor="end" dominantBaseline="middle" fill="black">
        Women 5.9K
      </text>
    </svg>
  );
};

export default GenderDemographics;
