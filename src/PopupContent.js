import React from 'react';
import "./PopupContent.css"
import Piechart from "./Piechart/Piechart"
import Plots from "./Plots"

function PopupContent({ onClose }) {
  return (
    <div className="popup-container">
      <div className="popup">
        <h2>Plots</h2>
        <div className="charts">
            <Plots/>
            <Plots/>
        </div>
        <div className="charts">
            <Plots/>
            <Plots/>
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default PopupContent;
