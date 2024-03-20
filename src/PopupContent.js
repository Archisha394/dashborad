import React from "react";
import "./PopupContent.css";
import Piechart from "./Piechart/Piechart";
import Plots from "./Plots";
import DonutChart from "./Piechart/Donutpopup.js/popup";
import Linechart from "./Piechart/Linechart";

function PopupContent({ onClose }) {
  return (
    <div className="popup-container">
      <div className="popup">
        <h2>Plots</h2>
        <div className="charts1">
          <DonutChart />
          <Linechart />
          <DonutChart />
        </div>
        <div className="charts">
          <Plots />
          <Plots />
          <Plots />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <button
            className="apply-button"
            style={{
              backgroundColor: "white",
              color: "#141d36",
              width: "15%",
              display: "flex",
            }}
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopupContent;
