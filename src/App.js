import logo from "./logo.png";
import "./App.css";
import map from "./Map.png";
import PriceRangeSlider from "./Bars/PriceRangeSlider";
function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={logo} alt="logo" />
        Datsol Solutions
      </div>
      <div>
        <PriceRangeSlider />
      </div>
      <div className="India-map">
        <img src={map} alt="" />
      </div>
    </div>
  );
}

export default App;
