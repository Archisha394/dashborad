import React, { useState } from "react";
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
import MaharashtraImage from "./assets/stateImages/Maharashtra.png";
import APImage from "./assets/stateImages/AndhraPradesh.png";
import AssamImage from "./assets/stateImages/Assam.png";
import BiharImage from "./assets/stateImages/Bihar.png";
import ChattisgarhImage from "./assets/stateImages/Chattisgarh.png";
import DelhiImage from "./assets/stateImages/Delhi.png";
import GujaratImage from "./assets/stateImages/Gujarat.png";
import HaryanaImage from "./assets/stateImages/Haryana.png";
import HPImage from "./assets/stateImages/HimachalPradesh.png";
import JharkhandImage from "./assets/stateImages/Jharakhand.png";
import KarnatakaImage from "./assets/stateImages/Karnataka.png";
import MPImage from "./assets/stateImages/MP.png";
import ManipurImage from "./assets/stateImages/Manipur.png";
import MeghalayaImage from "./assets/stateImages/Meghalaya.png";
import NagalandImage from "./assets/stateImages/Nagaland.png";
import OrrisaImage from "./assets/stateImages/Orrisa.png";
import PunjabImage from "./assets/stateImages/Punjab.png";
import RajasthanImage from "./assets/stateImages/Rajasthan.png";
import TNImage from "./assets/stateImages/TamilNadu.png";
import TelanganaImage from "./assets/stateImages/Telangana.png";
import UpImage from "./assets/stateImages/UP.png";
import WestBengalImage from "./assets/stateImages/WestBengal.png";
import KeralaImage from "./assets/stateImages/Kerala.png";

function App() {
  const [currentStateImage, setCurrentStateImage] = useState(null);

  const stateImages = {
    Maharashtra: MaharashtraImage,
    JnK: JnKImage,
    Telangana: TelanganaImage,
    // AndhraPradesh: ,
    TamilNadu: TNImage,
    Kerala: KeralaImage,
    Orissa: OrrisaImage,
    Jharkhand: JharkhandImage,
    UttarPradesh: UpImage,
    Punjab: PunjabImage,
    HimachalPradesh: HPImage,
    // Uttarakhand: utt
    Bihar: BiharImage,
    Haryana: HaryanaImage,
    WestBengal: WestBengalImage,
    Chattisgarh: ChattisgarhImage,
    Gujarat: GujaratImage,
    Meghalaya: MeghalayaImage,
    Assam: AssamImage,
    Nagaland: NagalandImage,
    Manipur: ManipurImage,
    // Mizoram: Miz
    // Tripura:
    ArunachalPradesh: APImage,
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
