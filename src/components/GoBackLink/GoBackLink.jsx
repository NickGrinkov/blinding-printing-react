import React from "react";
import backLogo from '../../assets/back.svg'

function GoBackLink({goBack}) {
  return (
        <div onClick={() => goBack()} className="back">
          <img
            className="svg"
            src={backLogo}
            alt="go-back"
          />
          <a href="#">Вернуться назад</a>
        </div>
  );
}

export default GoBackLink;
