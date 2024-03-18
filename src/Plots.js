import React from "react";
import Plot from "react-plotly.js";

function PlotComponent() {
  return (
    <Plot
      data={[
        {
          x: [1, 2, 3],
          y: [2, 6, 3],
          type: "scatter",
          mode: "lines+markers",
          marker: { color: "#00ABC2" },
        },
        {
          type: "bar",
          x: [1, 2, 3],
          y: [2, 5, 3],
          marker: { color: "#C9EFFF" }, // Set the color of the bars to blue
        },
      ]}
      layout={{
        width: 320,
        height: 300,
        title: {
          text: "Plot",
          font: {
            color: "white", // Set the color of the title to white
          },
        },
        xaxis: {
          title: {
            text: "X Axis",
            font: {
              color: "white", // Set the color of the x-axis label to white
            },
          },
          tickfont: {
            color: "white", // Set the color of the x-axis ticks to white
          },
        },
        yaxis: {
          title: {
            text: "Y Axis",
            font: {
              color: "white", // Set the color of the y-axis label to white
            },
          },
          tickfont: {
            color: "white", // Set the color of the y-axis ticks to white
          },
        },
        paper_bgcolor: "rgba(0,0,0,0)", //background color of the chart container space
        plot_bgcolor: "rgba(0,0,0,0)", // background color of the plot area
      }}
      config={{ displayModeBar: false }} // Set the background color of the Plot component itself to transparent
    />
  );
}

export default PlotComponent;
