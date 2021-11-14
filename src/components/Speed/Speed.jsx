import React from "react";
import "./Speed.scss";
import speedLogo from '../../assets/speed.svg';
import { useLocation } from "react-router";

function Speed({speed}) {
  const location = useLocation()
  return (
    <div className="speed">
      <div className="speed__wrapper">
        <img
          className="svg"
          src={speedLogo}
          alt="Speed"
        />
        <h4>{location.pathname === '/result' ? '' : 'Скорость' }</h4>
      </div>
      <div>
        <p>
          <span>{speed}</span><span>зн/мин</span> 
        </p>
      </div>
    </div>
  );
}

export default Speed;
