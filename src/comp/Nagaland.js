import React from "react";

const Nagaland = ({ handleAreaClick }) => {

    console.log("Props received by Nagaland:", handleAreaClick);

  return (
    <>
      <area
        shape="poly"
        alt = 'Dimapur'
        coords="115,600,173,536,172,520,192,494,197,554,217,553,228,538,256,520,261,481,278,492,265,526,272,552,235,611,188,607,185,591,136,613,121,607"
        title="Dimapur"
        onClick={() => handleAreaClick("Dimapur")} // Pass district name to handleAreaClick
      />
      <area
        shape="poly"
        coords="255,643,241,613,267,570,278,535,267,528,279,493,268,483,327,481,368,466,377,496,339,530,399,530,383,564,346,600,345,646,323,655,289,637"
        title="Kiphire"
        alt = "Kiphire"
        onClick={() => handleAreaClick("Kiphire")} // Pass district name to handleAreaClick
      />
      <area
        shape="poly"
        coords="255,643,241,613,267,570,278,535,267,528,279,493,268,483,327,481,368,466,377,496,339,530,399,530,383,564,346,600,345,646,323,655,289,637"
        title="Kohima"
        alt = "Kohima"
        onClick={() => handleAreaClick("Kohima")} // Pass district name to handleAreaClick
      />
      <area
        shape="poly"
        coords="539,153,536,168,550,181,536,190,534,214,573,220,588,299,562,302,534,276,513,282,507,254,520,224,493,209,516,189"
        title="Longleng"
        alt ="Longleng"
        onClick={() => handleAreaClick("Longleng")} // Pass district name to handleAreaClick
      />
      <area
        shape="poly"
        coords="397,375,394,324,374,292,407,260,409,227,446,198,518,167,516,187,491,207,516,231,505,251,510,291,496,321,465,346,469,377,446,377,432,352,421,383,401,390"
        title="Mokokchung"
        alt = "Mokokchung"
        onClick={() => handleAreaClick("Mokokchung")} // Pass district name to handleAreaClick
      />
      <area
        shape="poly"
        coords="540,147,586,98,668,59,680,197,640,277,662,314,614,338,594,338,588,291,577,207,540,209,552,176,539,161"
        title="Mon"
        alt = "Mon"
        onClick={() => handleAreaClick("Mon")} // Pass district name to handleAreaClick
      />
      {/* Add more area tags as needed */}
    </>
  );
};

export default Nagaland;
