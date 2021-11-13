import React from "react";

function GoBackLink({goBack}) {
  return (
        <div onClick={() => goBack()} className="back">
          <img
            src="https://www.clipartmax.com/png/middle/423-4237996_return-svg-png-icon-free-download-onlinewebfonts-return-back-icon.png"
            alt="go-back"
          />
          <p>Вернуться назад</p>
        </div>
  );
}

export default GoBackLink;
