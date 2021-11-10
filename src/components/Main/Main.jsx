import React from 'react';
import { Navigate } from 'react-router-dom';
import './Main.scss';
import logo from '../../assets/blind-printing.jpg';

function Main() {
    return (
        <div className="main">
            <img src={logo} alt="logo"/>
            <h1>Приготовьтесь печатать</h1>
            <button className="main__button">Начать печатать</button>
        </div>
    )
}

export default Main;
