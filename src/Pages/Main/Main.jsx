import React from 'react';
import { useNavigate } from 'react-router-dom';
import Result from '../Result/Result'
import Test from '../Test/Test'
import './Main.scss';
import logo from '../../assets/blind-printing.jpg';

function Main() {
    const navigate = useNavigate()

    const getStart = () => {
        navigate('/test')
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
