import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Timer from './Timer/Timer';
import Result from './Result/Result';
import UserInput from './UserInput/UserInput';
import Speed from './Speed/Speed';
import Accuracy from './Accuracy/Accuracy';
import './Test.scss';


function Test() {
    const [seconds, setSeconds] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [text, setText] = useState('');
    const [textLength, setTextLength] = useState(0);
    const [accuracy, setAccuracy] = useState(0);
    const [textarea, setTextarea] = useState('');
    const [symbols, setSymbols] = useState(0);
    const [errors, setErrors] = useState(0);
    const [speed, setSpeed] = useState(0)


    const startTimer = () => {
        setIsActive(true)
    }

    const clearTimer = () => {
        setIsActive(false)
    }
    
    useEffect(() => {
        let interval;
        if(checkCorrectTest()) {
            setSeconds(seconds)
        } else {
            interval = setInterval(() => setSeconds(seconds => seconds + 1), 1000)
        }
        return () => clearInterval(interval)
    }, [seconds])

    const paragraphNumber = 1

    const getText = () => {
        axios.get(`https://baconipsum.com/api/?type=all-meat&paras=${paragraphNumber}&start-with-lorem=1`)
        .then(({data}) => setText(data[0]))
    }

    useEffect(() => {
        if(text === '') {
            getText()
        }
    }, [text])

    const checkCyrillic = (str) => {
        return /[а-я]/i.test(str)
    };

    const checkCorrectTest = () => {
        return newText.length === symbols && errors < 1 && textarea.length !== 0 
    }

    const newText = text.split('').map((symbol, i) => {
        let color = ''
        if(i < textarea.length) {
            color = symbol === textarea[i] ? 'green' : 'red';
        }
        return (
            <span key={`${symbol}_${i}`} className={color}>
                {symbol}
            </span>
            )
    })

    const setSpeedInterval = (symbols, seconds) => {
        setSpeed(Math.floor((symbols / (seconds / 60))))
    }

    
    useEffect(() => {
        let speedInterval;
        if(checkCorrectTest()) {
            setSpeed(speed)
        } else {
            speedInterval = setInterval(() => setSpeedInterval(symbols, seconds), 1000)
        } return () => clearInterval(speedInterval)
    },[symbols, seconds])

    const onChangeInput = (value) => {
        if(checkCyrillic(value)) {
            alert('Смените язык на клавиатуре')
            clearTimer()
        } else {
            setTextarea(value)
            setSymbols(value.split('').filter((e, i) => e === text[i]).length)
            setErrors(value.split('').filter((e, i) => e !== text[i]).length)
            setTextLength(newText.length)
            setAccuracy(((textLength - errors) / textLength * 100).toFixed(1))
            setSpeedInterval(symbols, seconds)
        }
    };
        return (
        <div className="test">
            <div className="test__text">
                <h2>Тест на скорость печати</h2>
                    {
                        checkCorrectTest()
                        ? <Result/>
                        : <>
                        <p>{newText}</p>
                          <UserInput onChange={onChangeInput} startTimer={startTimer} clearTimer={clearTimer} textarea={textarea}/>
                          </>
                    }         
            </div>
            <div className="test__menu">
                <Timer seconds={seconds}/>
                <Speed speed={speed}/>
                <Accuracy accuracy={accuracy}/>
                <Link to="/">
                    <div className="back">
                        <img src="https://www.clipartmax.com/png/middle/423-4237996_return-svg-png-icon-free-download-onlinewebfonts-return-back-icon.png" alt="" />
                        <p>Вернуться назад</p>
                    </div>
                </Link>
                <div className="start-again">
                    <img src="https://www.clipartmax.com/png/middle/423-4237996_return-svg-png-icon-free-download-onlinewebfonts-return-back-icon.png" alt="" />
                    <button>Заново</button>
                </div>
            </div>
        </div>
    )
}

export default Test;
