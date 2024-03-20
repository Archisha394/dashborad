import React from "react";
import DonutChart from "react-donut-chart";
import "./Donutchart.css";

const Chart = () => {
  return (
    <div>
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
        colors={["#114b75", "#16679F", "#1B7DC3", "#0E3D5F"]}
        legend={true}
        legendSpacing={3}
        legendFontSize={2}
        legendFontColor="#333"
        legendFontWeight="normal"
        legendItemSize={10}
        legendPosition="bottom"
      />
      {/* <div className="donut-chart-legend">
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
                backgroundColor: ["#114b75", "#16679F", "#1B7DC3", "#0E3D5F"][
                  index
                ],
              }}
            ></div>
            <span className="legend-label">{label}</span>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Chart;
