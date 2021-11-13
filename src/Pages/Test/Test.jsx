import React from 'react';
import { useNavigate} from 'react-router';
import {Link} from 'react-router-dom';
import Timer from '../../components/Timer/Timer';
import Result from '../Result/Result';
import UserInput from '../../components/UserInput/UserInput';
import Speed from '../../components/Speed/Speed';
import Accuracy from '../../components/Accuracy/Accuracy';
import StartAgain from '../../components/StartAgain/StartAgain';
import GoBackLink from '../../components/GoBackLink/GoBackLink';
import './Test.scss';


function Test({seconds, accuracy, speed, checkCorrect, newText, onChangeInput, startTimer, textarea}) {
    const navigate = useNavigate()
    const finishTest = () => {
        navigate('/result')
    }
        return (
                <div className="test">
                    <div className="test__text">
                        <h2>Тест на скорость печати</h2>
                        <p>{newText}</p>
                        <UserInput onChange={onChangeInput} startTimer={startTimer} textarea={textarea}/>
                        <button onClick={() => finishTest()} disabled={!checkCorrect()}>Завершить тестирование</button>
                    </div>
                    <div className="test__menu">
                        <Timer seconds={seconds}/>
                        <Speed speed={speed}/>
                        <Accuracy accuracy={accuracy}/>
                        <GoBackLink/>
                        <StartAgain />
                    </div>
            </div>
    )
}

export default Test;
