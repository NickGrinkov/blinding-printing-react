import React from "react";
import './StartAgain.scss'

function StartAgain({refreshPage}) {
  return (
    <div onClick={() => refreshPage()} className="start-again">
      <img
        src="https://www.clipartmax.com/png/middle/423-4237996_return-svg-png-icon-free-download-onlinewebfonts-return-back-icon.png"
        alt="start-again"
      />
      <button>Попробовать снова</button>
    </div>
  );
}

export default StartAgain;
