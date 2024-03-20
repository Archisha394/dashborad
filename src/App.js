//import React, { useState } from "react";
import logo from "./logo.png";
import "./App.css";
import map from "./assets/Map.png";
import ruralImage from "./assets/rural.png";
import urbanImage from "./assets/urban.png";
import male from "./assets/male.png";
import female from "./assets/female.png";
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
import AndhraPImage from "./assets/stateImages/AndhraPradesh.png";
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
import NagalandImage from "./assets/stateImages/Nagaland.jpg";
import OrrisaImage from "./assets/stateImages/Orrisa.png";
import PunjabImage from "./assets/stateImages/Punjab.png";
import RajasthanImage from "./assets/stateImages/Rajasthan.png";
import TNImage from "./assets/stateImages/TamilNadu.png";
import TelanganaImage from "./assets/stateImages/Telangana.png";
import UpImage from "./assets/stateImages/UP.png";
import WestBengalImage from "./assets/stateImages/WestBengal.png";
import KeralaImage from "./assets/stateImages/Kerala.png";
import JnKImage from "./assets/stateImages/JnK.png";
import DocumentCount from "./comp/DocumentCount";
import Nagaland from "./comp/Nagaland";
import Graph21 from "./assets/Graph 21.png";
import db from "./comp/firebase-config";
import { collection, query, where, getDocs } from "firebase/firestore";
import React, { useState } from "react";
import Plot from "./Plots";
import PopupContent from "./PopupContent";
import Donutchart from "./Piechart/Donutchart";
import InputField from "./Inputs";
function App() {
  const [currentStateImage, setCurrentStateImage] = useState(null);
  const [flag, setFlag] = useState(false);

  const stateImages = {
    Maharashtra: MaharashtraImage,
    JnK: JnKImage,
    Telangana: TelanganaImage,
    AndhraPradesh: AndhraPImage,
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
    // ArunachalPradesh:
  };

  const handleClick = (stateName) => {
    console.log(`Clicked on ${stateName}`);
    setCurrentStateImage(stateImages[stateName]);
    setFlag(true);
  };

  const [population, setPopulation] = useState(null);

  const handleAreaClick = async (districtName) => {
    console.log(`Clicked on district: ${districtName}`);
    try {
      if (districtName) {
        const q = query(
          collection(db, "census"),
          where("Name", "==", districtName),
          where("TRU", "==", "Total")
        );
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const docData = querySnapshot.docs[0].data();
          const totHLF = docData.TOT_HL_F;
          setPopulation(totHLF);
          console.log("Population:", totHLF);
        } else {
          console.log("No matching document found.");
          setPopulation(null);
        }
      } else {
        console.log("Missing parameter: districtName");
      }
    } catch (error) {
      console.error("Error fetching document: ", error);
    }
  };

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
    setIsBasic(true);
  };

  return (
    <div className="App">
      <div className="header">
        <img src={logo} alt="logo" />
        Datsol Solutions
      </div>
      <div className="main-content">
        <div className="Slider-content">
          <div className="slider1">
          <div className="inputHeader"> Population</div>
            <PriceRangeSlider />
            <div className="inputHeader">Working Population</div>
            <PriceRangeSlider />
            <div className="inputHeader">Literacy Rate</div>
            <PriceRangeSlider />
          </div>
          <div className="slider2">
          <div className="inputHeader"> Population</div>
            <PriceRangeSlider />
          <div className="inputHeader"> Population</div>
            <PriceRangeSlider />
          </div>
          <div className="apply-button-div">
            <button className="apply-button">Apply</button>
          </div>
        </div>
        <div className="India-map">
          <div className="India-map">
            {/* Use an image map for clickable areas */}
            <map name="indiaMap">
              <ImageMapAreas handleClick={handleClick} />
            </map>
            <map name="nagaland">
              <Nagaland handleAreaClick={handleAreaClick} />
            </map>
            {currentStateImage === null ? (
              <img src={map} alt="" useMap="#indiaMap" />
            ) : (
              <img src={currentStateImage} alt="" useMap="#nagaland" />
            )}
          </div>
        </div>
        <div>
          <div className="right-content">
            {/* <div className="basicbuttons">
              <button onClick={handleToggle_b}>
                <img src={basic} alt="basic" />
                <span>{isBasic ? "Basic" : "Advance"}</span>
              </button>
            </div> */}
            <div className="buttons">
              {/* <button onClick={handleToggle_r}>
                <img
                  src={isRural ? ruralImage : urbanImage}
                  alt={isRural ? "rural" : "urban"}
                />
                <span>{isRural ? "Rural" : "Urban"}</span>
              </button>
              <button onClick={handleToggle_m}>
                <img
                  src={isMale ? male : female}
                  alt={isMale ? "male" : "female"}
                />
                <span>{isMale ? "Male" : "Female"}</span>
              </button> */}
            </div>
            <div className="rightbox">
              <div className="stats">
                <div className="stats-content">
                  Population
                  <span>(State)</span>
                  <span style={{ fontSize: "2.8vh" }}>23400</span>
                </div>
                <div className="stats-content">
                  Literacy rate
                  <span>(State)</span>
                  <span style={{ fontSize: "2.8vh", paddingTop: "1vh " }}>
                    96%
                  </span>
                </div>
              </div>
              <div className="Donutchart">
                <Donutchart />
              </div>
              <div>{/* <InputField /> */}</div>
            </div>
          </div>
        </div>
        {showPopup && <PopupContent onClose={handleClosePopup} />}{" "}
        {/* Render the popup based on the state */}
      </div>
    </div>
  );
}

export default App;
