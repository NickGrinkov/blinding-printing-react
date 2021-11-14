import React from "react";
import './Timer.scss';
import timerLogo from '../../assets/timer.svg'
import { useLocation } from "react-router";

function Timer({seconds}) {
  const location = useLocation()
  return (
    <div className="timer">
      <div className="timer__wrapper">
      <img 
          className="svg" 
          src={timerLogo} 
          alt="timer" />
        <h4>{location.pathname === '/result' ? '' : 'Таймер' }</h4>
        <span>{seconds}</span>
        <span>сек.</span>
      </div>
    </div>
  );
}

export default Timer;
