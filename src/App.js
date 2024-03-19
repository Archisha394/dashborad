import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import IndiaGeoJSON from "./assets/Indian_States.json"; // Import India GeoJSON data
import IndiaDistrictGeoJSON from "./assets/india_district.json"; // Import India GeoJSON data
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS

import logo from "./logo.png";
import "./App.css";
import ruralImage from "./assets/rural.png";
import urbanImage from "./assets/urban.png";
import male from "./assets/male.png";
import female from "./assets/female.png";
import basic from "./assets/basic.png";
import PriceRangeSlider from "./Bars/PriceRangeSlider";
import man from "./assets/man 1.png";
import literacy from "./assets/literacy 1.png";
import people from "./assets/people 1.png";
import harvest from "./assets/harvest 1.png";
import woman from "./assets/woman 1.png";
import sexeductn from "./assets/sex-education 1.png";
import India from "./assets/INDIA.png";
import Input from "./Inputs";

import db from "./comp/firebase-config";
import { collection, query, where, getDocs } from "firebase/firestore";
import React, { useState } from "react";
import Plot from "./Plots";
import PopupContent from "./PopupContent";

function App() {
  const [currentStateImage, setCurrentStateImage] = useState(null);
  const [flag, setFlag] = useState(false);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const handleClick = (stateName) => {
    console.log(`Clicked on ${stateName}`);
    // setCurrentStateImage(stateImages[stateName]);
    // setFlag(true);
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

  const handleStateClick = (e) => {
    const stateName = e.layer.feature.properties.NAME_1;
    console.log("HandleStateClick: ", stateName);
    setSelectedState(stateName);
    setSelectedDistrict(null); // Reset selected district

    const bounds = e.layer.getBounds();
    const map = e.layer._map;
    map.fitBounds(bounds);
  };

  const handleDistrictClick = (e) => {
    const districtName = e.layer.feature.properties.NAME_2;
    console.log(`Clicked on district: ${districtName}`);
    // setSelectedDistrict(districtName);
  };
  const handleFeature = (event, layer) => {
    const stateName = event.properties.NAME_1;
    console.log(stateName);
    layer.bindPopup(stateName);
    layer.on({
      mouseover: (e) => {
        e.target.setStyle({
          color: "yellow",
          fillColor: "yellow",
        });
      },
      mouseout: (e) => {
        e.target.setStyle({
          color: "blue",
          fillColor: "blue",
        });
      },
    });
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
        <div className="India-map-outside">
          <div className="inputs">
            <div className="part1">
              <Input />
              <Input />
              <Input />
            </div>
            <div className="part2">
              <Input />
              <Input />
              <Input />
              <Input />
            </div>
          </div>
          <div className="India-map">
            <MapContainer
              center={[20.5937, 78.9629]}
              zoom={5}
              style={{ height: "80vh", width: "100%" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <GeoJSON
                data={IndiaGeoJSON.features}
                onEachFeature={handleFeature}
                eventHandlers={{ click: handleStateClick }}
                style={{ color: "blue", fillColor: "blue" }}
              >
                {/* {selectedState && (
                  <GeoJSON
                    data={IndiaDistrictGeoJSON.features.filter(
                      (feature) => feature.properties.NAME_1 === selectedState
                    )}
                    style={() => ({
                      color: "blue",
                      fillColor: "blue",
                      // color: "#3388ff", // Border color
                      // fillColor: "transparent",
                      weight: 1,
                      pointerEvents: "auto",
                    })}
                    eventHandlers={{
                      click: handleDistrictClick,
                    }}
                  />
                )} */}
              </GeoJSON>
            </MapContainer>
          </div>
        </div>
        <div>
          <div className="right-content">
            <div className="basicbuttons">
              <button onClick={handleToggle_b}>
                <img src={basic} alt="basic" />
                <span>{isBasic ? "Basic" : "Advance"}</span>
              </button>
            </div>
            <div className="rightbox">
              <div className="rightheading">
                <img className="indiaHeader" src={India} alt="" />
              </div>
              <div className="listItems">
                <img src={people} alt="" />
                <div className="sideText">
                  {" "}
                  Population: {population !== null
                    ? population
                    : "Loading..."}{" "}
                </div>
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
            <Plot />
          </div>
        </div>
        {showPopup && <PopupContent onClose={handleClosePopup} />}{" "}
        {/* Render the popup based on the state */}
      </div>
    </div>
  );
}

export default App;
