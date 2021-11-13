import React from 'react';
import Timer from '../../components/Timer/Timer';
import Speed from '../../components/Speed/Speed';
import Accuracy from '../../components/Accuracy/Accuracy';
import StartAgain from '../../components/StartAgain/StartAgain';
import './Result.scss'

function Result({seconds, accuracy, speed}) {
    
    return (
            <div className="result">
            <h2 className="result__header">Поздравляем с успешным выполнением теста!</h2>
            <img className="result__img" src="https://thumbs.gfycat.com/ConsciousImperfectBluebottlejellyfish-size_restricted.gif" alt="" />
            <div className="result__menu">
                <Timer seconds={seconds}/>
                <Speed speed={speed}/>
                <Accuracy accuracy={accuracy}/>
                <StartAgain/>
            </div>
        </div>  
    )
}

export default Result
