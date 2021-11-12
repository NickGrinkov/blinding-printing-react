import React from "react";
import "./Accuracy.scss";

function Accuracy({accuracy}) {
  return (
    <div className="accurancy">
      <div className="accurancy__wrapper">
        <img
          src="https://www.pngjoy.com/pngm/784/20102559_bullseye-icon-accuracy-icon-png-download.png"
          alt=""
        />
        <p>Точность</p>
      </div>
      <p>
        <span>{accuracy}</span>
        <span>%</span>
      </p>
    </div>
  );
}

export default Accuracy;
