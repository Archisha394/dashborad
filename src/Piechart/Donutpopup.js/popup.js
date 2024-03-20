import React from "react";
import DonutChart from "react-donut-chart";
import "./popup.css";

const Chart = () => {
  return (
    <div className="popup-main">
      <div className="donut-chart-container">
        <h2 className="donut-chart-title">Women Categories</h2>
      </div>
      <DonutChart
        className="donut-chart-svg"
        width="200"
        height="200"
        data={[
          {
            label: "Marginal Workers",
            value: 18,
          },
          {
            label: "Skilled Workers",
            value: 18,
          },
          {
            label: "Unemployed Workers",
            value: 20,
          },
          {
            label: "Retired Workers",
            value: 34,
          },
        ]}
        colors={["#0077b6", "#00b4d8", "#98c1d9", "#ee6c4d"]}
        // legend={true}
        // legendSpacing={3}
        // legendFontSize={2}
        // legendFontColor="#333"
        // legendFontWeight="normal"
        // legendItemSize={10}
        // legendPosition="bottom"
      />
      <div className="popup-donut-chart-legend">
        {[
          "Marginal Workers",
          "Skilled Workers",
          "Unemployed Workers",
          "Retired Workers",
        ].map((label, index) => (
          <div className="legend-item" key={index}>
            <div
              className="legend-color"
              style={{
                // Set the color of the bars to blue
                backgroundColor: ["#0077b6", "#00b4d8", "#98c1d9", "#ee6c4d"][
                  index
                ],
              }}
            ></div>
            <span className="legend-label">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chart;
