import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Test.scss';

function Test() {

    const [seconds, setSeconds] = useState(0)
    const [isActive, setIsActive] = useState(false)

    const startTimer = () => {
        setIsActive(true)
    }

    const clearTimer = () => {
        setIsActive(false)
        setSeconds(0)
    }
    
    useEffect(() => {
        let interval;
        if(isActive) {
            interval = setInterval(() => setSeconds(seconds => seconds + 1), 1000)
        }
        return () => clearInterval(interval)
    }, [isActive, seconds])

    return (
        <div className="test">
            <div>
            <h2>Тест на скорость печати</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Illo, repellat quis! Optio vitae nihil eveniet expedita rem, saepe voluptatibus eos.  
                </p>
                <textarea onBlur={() => clearTimer()} onFocus={() => startTimer()}></textarea>
            </div>
            <div className="test__wrapper">
                <div className="timer">
                    <div className="speed__wrapper">
                        <h3>Таймер</h3>
                        <span>{seconds}</span><span>сек.</span>
                    </div>
                </div>
                <div className="speed">
                    <div className="speed__wrapper">
                        <img src="http://cdn.onlinewebfonts.com/svg/download_536753.png" alt="" />
                        <p>Скорость</p>
                    </div>
                    <div>
                        <p>0 ЗН/МИН</p>
                    </div>
                </div>
                <div className="accurancy">
                    <div className="accurancy__wrapper">
                        <img src="https://www.pngjoy.com/pngm/784/20102559_bullseye-icon-accuracy-icon-png-download.png" alt="" />
                        <p>Точность</p>
                    </div>
                    <p>100%</p>
                </div>
                <Link to="/">
                    <div className="back">
                        <img src="https://www.clipartmax.com/png/middle/423-4237996_return-svg-png-icon-free-download-onlinewebfonts-return-back-icon.png" alt="" />
                        <p>Вернуться назад</p>
                    </div>
                </Link>
                <div className="start-again">
                    <img src="https://www.clipartmax.com/png/middle/423-4237996_return-svg-png-icon-free-download-onlinewebfonts-return-back-icon.png" alt="" />
                    <a href="#">Заново</a>
                </div>
            </div>
        </div>
    )
}

export default Test;
