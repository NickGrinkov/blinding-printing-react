import React from 'react'
import './Test.scss';

function Test() {
    return (
        <div className="test">
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Illo, repellat quis! Optio vitae nihil eveniet expedita rem, saepe voluptatibus eos.
            </div>
            <div className="test__wrapper">
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
                <div className="start-again">
                    <img src="https://www.clipartmax.com/png/middle/423-4237996_return-svg-png-icon-free-download-onlinewebfonts-return-back-icon.png" alt="" />
                    <a href="#">Заново</a>
                </div>
            </div>
        </div>
    )
}

export default Test;
