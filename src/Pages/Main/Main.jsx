import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.scss';
import logo from '../../assets/blind-printing.jpg';

function Main({reloadPage}) {
    const navigate = useNavigate()

    const getStart = () => {
        navigate('/test')
        reloadPage()
    }
    
    return (
        <div className="main">
            <img src={logo} alt="logo"/>
            <h1>Приготовьтесь печатать</h1>
            <button onClick={() => getStart()}>Начать печатать</button>
        </div>
    )
}

export default Main;
