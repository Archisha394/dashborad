import logo from "./logo.png";
import "./App.css";
import map from "./Map.png";
import rural from "./rural.png";
import male from "./male.png";
import basic from "./basic.png"
import PriceRangeSlider from "./Bars/PriceRangeSlider";
import Piechart from "./Piechart/Piechart"
import man from "./man 1.png"
import literacy from "./literacy 1.png"
import people from "./people 1.png"
import harvest from "./harvest 1.png"
import woman from "./woman 1.png"
import sexeductn from "./sex-education 1.png"
import India from "./INDIA.png"
import piechart from "./pie-chart 1.png"

function App() {
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
          <img src={map} alt="" />
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
          <Piechart/>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default App;
