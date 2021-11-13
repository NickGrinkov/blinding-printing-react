import React from "react";
import "./Speed.scss";

function Speed({speed}) {
  return (
    <div className="speed">
      <div className="speed__wrapper">
        <img
          src="http://cdn.onlinewebfonts.com/svg/download_536753.png"
          alt="Speed"
        />
        <h4>Скорость</h4>
      </div>
      <div>
        <p>
          <span>{speed}</span>ЗН/МИН
        </p>
      </div>
    </div>
  );
}

export default Speed;
