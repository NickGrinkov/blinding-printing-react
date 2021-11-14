import React from "react";
import { useLocation } from "react-router";
import './StartAgain.scss';
import reloadLogo from '../../assets/reload.svg'

function StartAgain({backToMain, reloadPage}) {
  const location = useLocation()
  return (
    <div onClick={location.pathname === '/test' ? () => reloadPage() : () => backToMain()} className="start-again">
      <img
        className="svg"
        src={reloadLogo}
        alt="start-again"
      />
      <a href="#">{location.pathname === '/test' ? 'Попробовать снова' : 'Вернуться на главную'} </a>
    </div>
  );
}

export default StartAgain;
