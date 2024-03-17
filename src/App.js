import React, { useState } from 'react';
import logo from "./logo.png";
import "./App.css";
import map from "./assets/Map.png";
import rural from "./assets/rural.png";
import male from "./assets/male.png";
import basic from "./assets/basic.png";
import PriceRangeSlider from "./Bars/PriceRangeSlider";
import Piechart from "./Piechart/Piechart";
import man from "./assets/man 1.png";
import literacy from "./assets/literacy 1.png";
import people from "./assets/people 1.png";
import harvest from "./assets/harvest 1.png";
import woman from "./assets/woman 1.png";
import sexeductn from "./assets/sex-education 1.png";
import India from "./assets/INDIA.png";
import Input from "./Inputs";
import ImageMapAreas from "./comp/ImageMapAreas";
import MaharashtraImage from './assets/stateImages/Maharashtra.png'
import JnKImage from './assets/stateImages/JnK.png'
hello

function App() {
  const [currentStateImage, setCurrentStateImage] = useState(null);

  const stateImages = {
    Maharashtra: MaharashtraImage,
    JnK: JnKImage,
  };

  const handleClick = (stateName) => {
    console.log(`Clicked on ${stateName}`);
    setCurrentStateImage(stateImages[stateName]);
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
            <button>
              <img src={rural} alt="rural" />
              Rural
            </button>
            <button>
              <img src={male} alt="male" />
              Male
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
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
          </div>
          <div className="India-map">
            {/* Use an image map for clickable areas */}
            <map name="indiaMap">
              <ImageMapAreas handleClick={handleClick} />
            </map>
            <img src={currentStateImage || map} alt="" useMap="#indiaMap" />
          </div>
        </div>
        <div>
          <div className="right-content">
            <div className="basicbuttons">
              <button>
                <img src={basic} alt="basic" />
                Basic
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
            <Piechart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
