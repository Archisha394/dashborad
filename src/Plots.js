import React from 'react';
import Plot from 'react-plotly.js';

function PlotComponent() {
  return (
    <Plot
      data={[
        {
          x: [1, 2, 3],
          y: [2, 6, 3],
          type: 'scatter',
          mode: 'lines+markers',
          marker: {color: 'red'},
        },
        {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
      ]}
      layout={{width: 320, height: 240, title: 'A Fancy Plot',
      paper_bgcolor: "rgba(0,0,0,0", //background color of the chart container space
plot_bgcolor: "rgba(0,0,0,0)", }}
      config={{ displayModeBar: false }} // Set the background color of the Plot component itself to transparent
    />
  );
}

export default PlotComponent;
