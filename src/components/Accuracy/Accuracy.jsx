import React from "react";
import "./Accuracy.scss";
import accuracyLogo from '../../assets/accuracy.svg'

function Accuracy({accuracy}) {
  return (
    <div className="accuracy">
      <div className="accuracy__wrapper">
        <img
          className="svg"
          src={accuracyLogo}
          alt="accuracy"
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
