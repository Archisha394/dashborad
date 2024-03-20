import React from "react";
import { Chart } from "react-charts";

function MyChart() {
  const data = React.useMemo(
    () => [
      {
        label: "Series 1",
        data: [
          [0, 1],
          [1, 2],
          [2, 4],
          [3, 2],
          [4, 7],
        ],
      },
      {
        label: "Series 2",
        data: [
          [0, 3],
          [1, 1],
          [2, 5],
          [3, 6],
          [4, 4],
        ],
      },
    ],
    []
  );

  const axes = React.useMemo(
    () => [
      {
        primary: true,
        type: "linear",
        position: "bottom",
        marker: { color: "#000000" },
        style: {
          line: { stroke: "white" }, // Color of the axis line
          ticks: { stroke: "white" }, // Color of the axis ticks
          tickLabels: { fill: "white" }, // Color of the axis tick labels
        },
      },
      {
        type: "linear",
        position: "left",
        style: {
          line: { stroke: "white" }, // Color of the axis line
          ticks: { stroke: "white" }, // Color of the axis ticks
          tickLabels: { fill: "white" }, // Color of the axis tick labels
        },
      },
    ],
    []
  );

  return (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
    <div
      style={{
        width: "300px",
        height: "250px",
        color: "white",
      }}
    >
      <Chart data={data} axes={axes} />
    </div>
  );
}

export default MyChart;
