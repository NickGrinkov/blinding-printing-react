import React from "react";
import './Timer.scss';

function Timer({seconds}) {
  return (
    <div className="timer">
      <div className="timer__wrapper">
      <img src="https://e7.pngegg.com/pngimages/559/999/png-clipart-computer-icons-others-miscellaneous-stopwatch.png" alt="" />
        <h4>Таймер</h4>
        <span>{seconds}</span>
        <span>сек.</span>
      </div>
    </div>
  );
}

export default Timer;
