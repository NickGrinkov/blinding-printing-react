import React from "react";
import "./Accuracy.scss";
import accuracyLogo from '../../assets/accuracy.svg';
import { useLocation } from "react-router";

function Accuracy({accuracy}) {
  const location = useLocation()
  return (
    <div className="accuracy">
      <div className="accuracy__wrapper">
        <img
          className="svg"
          src={accuracyLogo}
          alt="accuracy"
        />
        <h4>{location.pathname === '/result' ? '' : 'Точность' }</h4>
      </div>
      <p>
        <span>{accuracy}</span>
        <span>%</span>
      </p>
    </div>
  );
}

export default Accuracy;
