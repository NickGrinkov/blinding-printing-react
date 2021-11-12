import React from "react";
import "./Speed.scss";

function Speed({speed}) {
  return (
    <div className="speed">
      <div className="speed__wrapper">
        <img
          src="http://cdn.onlinewebfonts.com/svg/download_536753.png"
          alt=""
        />
        <p>Скорость</p>
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
