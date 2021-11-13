import React from "react";
import "./Accuracy.scss";

function Accuracy({accuracy}) {
  return (
    <div className="accuracy">
      <div className="accuracy__wrapper">
        <img
          src="https://www.pngjoy.com/pngm/784/20102559_bullseye-icon-accuracy-icon-png-download.png"
          alt=""
        />
        <h4>Точность</h4>
      </div>
      <p>
        <span>{accuracy}</span>
        <span>%</span>
      </p>
    </div>
  );
}

export default Accuracy;
