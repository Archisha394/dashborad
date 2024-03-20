import React from "react";
import DonutChart from "react-donut-chart";
import "./Donutchart.css";
const Chart = () => {
  return (
    <div>
      <DonutChart
        width="300"
        height="300"
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
        Title="Distribution of Workers"
        // legend={true}
      />
    </div>
  );
};

export default Chart;
