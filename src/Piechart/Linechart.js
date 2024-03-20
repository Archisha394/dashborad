import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
];

export const options = {
  backgroundColor: "transparent", // Set background color to transparent
  colors: ["#0077b6", "#00b4d8", "#98c1d9", "#ee6c4d"], // Set custom colors
  legend: {
    textStyle: {
      color: "white", // Change legend text color to white
    },
  },
  chartArea: {
    width: "auto", // Reduce the size of the chart area
    height: "auto", // Reduce the size of the chart area
  },
};

export default function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"auto"}
      height={"auto"}
    />
  );
}
