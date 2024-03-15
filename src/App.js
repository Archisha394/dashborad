import logo from "./logo.png";
import "./App.css";
import map from "./Map.png";
import rural from "./rural.png";
import male from "./male.png";
import PriceRangeSlider from "./Bars/PriceRangeSlider";
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
            <button className="apply-button">Apply</button>
          </div>
        </div>

        <div className="India-map">
          <img src={map} alt="" />
        </div>
        
      </div>
    </div>
  );
}

export default App;
