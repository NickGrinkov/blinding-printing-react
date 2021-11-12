import React from "react";
import './Timer.scss';

function Timer({seconds}) {
  return (
    <div className="timer">
      <div className="speed__wrapper">
        <h3>Таймер</h3>
        <span>{seconds}</span>
        <span>сек.</span>
      </div>
    </div>
  );
}

export default Timer;
