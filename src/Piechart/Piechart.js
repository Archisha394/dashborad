import React from "react";
import DonutChart from "react-donut-chart";
import "./Donutchart.css";

const Chart = () => {
  return (
    <div className="main">
      <div className="donut-chart-container">
        <h2 className="donut-chart-title">Gender Demographics</h2>
      </div>
      <DonutChart
        className="donut-chart-svg"
        width="200"
        height="200"
        data={[
          {
            label: "Male",
            value: 78,
          },
          {
            label: "Female",
            value: 22,
          },
        ]}
        colors={["#16679F", "#0E3D5F"]}
        // legend={true}
        // legendSpacing={3}
        // legendFontSize={2}
        // legendFontColor="#333"
        // legendFontWeight="normal"
        // legendItemSize={10}
        // legendPosition="bottom"
      />
      <div className="donut-chart-legend">
        {["Men", "women"].map((label, index) => (
          <div className="legend-item" key={index}>
            <div
              className="legend-color"
              style={{
                backgroundColor: ["#16679F", "#0E3D5F"][index],
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
