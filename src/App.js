import logo from "./logo.png";
import "./App.css";
import map from "./assets/Map.png";
import ruralImage from "./assets/rural.png";
import urbanImage from "./assets/urban.png";
import male from "./assets/male.png";
import female from "./assets/female.png"
import basic from "./assets/basic.png"
import PriceRangeSlider from "./Bars/PriceRangeSlider";
import Piechart from "./Piechart/Piechart"
import man from "./assets/man 1.png"
import literacy from "./assets/literacy 1.png"
import people from "./assets/people 1.png"
import harvest from "./assets/harvest 1.png"
import woman from "./assets/woman 1.png"
import sexeductn from "./assets/sex-education 1.png"
import India from "./assets/INDIA.png"
import Input from "./Inputs"
import React, { useState } from 'react';
import Plot from "./Plots"
import PopupContent from "./PopupContent";

function App() {
  const [isRural, setIsRural] = useState(true);
  const [isMale, setIsMale] = useState(true);
  const [isBasic, setIsBasic] = useState(true);
  const [showPopup, setShowPopup] = useState(false); // State for managing popup visibility


  const handleToggle_r = () => {
    setIsRural(!isRural);
  };
  const handleToggle_m = () => {
    setIsMale(!isMale);
  };

  const handleToggle_b = () => {
    setIsBasic(!isBasic);
    if (isBasic) {
      setShowPopup(true); // Show the popup when toggling to "Advance"
    }
  };


  const handleClosePopup = () => {
    setShowPopup(false); // Close the popup
  };

  return (
    <div className="App">
      <div className="header">
        <img src={logo} alt="logo" />
        Datsol Solutions
      </div>
      <div className="main-content">
        <div className="Slider-content">
          <div className="buttons">
          <button onClick={handleToggle_r}>
        <img src={isRural ? ruralImage : urbanImage} alt={isRural ? 'rural' : 'urban'} />
        <span>{isRural ? 'Rural' : 'Urban'}</span>
      </button>
      <button onClick={handleToggle_m}>
        <img src={isMale ? male : female} alt={isMale ? 'male' : 'female'} />
        <span>{isMale ? 'Male' : 'Female'}</span>
      </button>
          </div>
          <div className="slider">
            <PriceRangeSlider />
            <PriceRangeSlider />
          </div>
          <div className="slider">
            <PriceRangeSlider />
            <PriceRangeSlider />
            <PriceRangeSlider />
            <div className="apply-button-div">
              <button className="apply-button">Apply</button>
            </div>
          </div>
        </div>
       
        <div className="India-map">
        <div className="inputs">
        <Input/>
        <Input/>
        <Input/>
        <Input/>
        <Input/>
        <Input/>
        <Input/>
        </div>
          <img src={map} alt="" />
        </div>
        <div>
         <div className="right-content">
          <div className="basicbuttons">
            <button onClick={handleToggle_b}>
              <img src={basic} alt="basic" />
              <span>{isBasic ? 'Basic' : 'Advance'}</span>
            </button>
          </div>
          <div className="rightbox">
            <div className="rightheading">
              <img className="indiaHeader" src={India} alt="" />
            </div>
            <div className="listItems">
              <img src={people} alt="" />
              <div className="sideText"> Populations: </div>
            </div>
            <div className="listItems">
              <img src={sexeductn} alt="" />
              <div className="sideText"> Sex-ratio: </div>
            </div>
            <div className="listItems">
              <img src={literacy} alt="" />
              <div className="sideText"> Literacy Rate: </div>
            </div>
            <div className="listItems">
              <img src={harvest} alt="" />
              <div className="sideText"> Agriculture yield: </div>
            </div>
            <div className="listItems">
              <img src={man} alt="" />
              <div className="sideText"> Male: </div>
            </div>
            <div className="listItems">
              <img src={woman} alt="" />
              <div className="sideText"> Female: </div>
            </div>
          </div>

        </div>
        <div className="piechart">
          <Plot/>
          </div>
        </div>
        {showPopup && <PopupContent onClose={handleClosePopup} />} {/* Render the popup based on the state */}
      </div>
    </div>
  );
}

export default App;
