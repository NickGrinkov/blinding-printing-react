import React from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import "./App.scss";
import { useState, useEffect } from "react";
import Main from "./Pages/Main/Main";
import Test from "./Pages/Test/Test";
import Result from "./Pages/Result/Result";
import { useNavigate } from "react-router";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false)
  const [text, setText] = useState("");
  const [textLength, setTextLength] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [textarea, setTextarea] = useState("");
  const [symbols, setSymbols] = useState(0);
  const [errors, setErrors] = useState(0);
  const [speed, setSpeed] = useState(0);

  const navigate = useNavigate()


  const checkCorrectTest = () => {
    return newText.length === symbols && errors < 1 && textarea.length !== 0;
  };

  const startTimer = () => {
    setIsActive(true)
    setSeconds(seconds => seconds + 1)
  };

  const clearTimer = () => {
    setSeconds(0);
  };

  useEffect(() => {
    let interval;
    if(!checkCorrectTest() && isActive) {
      interval = setInterval(() => startTimer(), 1000);
    } else {
      setIsActive(false)
      setSeconds(seconds);
    }
    return () => clearInterval(interval);
  }, [seconds]);

  const paragraphNumber = 1;

  useEffect(() => {
    if (text === "") {
        axios.get(`https://baconipsum.com/api/?type=all-meat&paras=${paragraphNumber}&start-with-lorem=1`)
            .then(({ data }) => setText(data[0]));
      };
  }, [text]);

  useEffect(() => {
    let speedInterval;
    if(!checkCorrectTest() && isActive) {
      speedInterval = setInterval(
        () => setSpeedInterval(symbols, seconds),
        1000
      )
    } else {
      setIsActive(false)
      setSpeed(speed);
    } 
    return () => clearInterval(speedInterval);
  }, [symbols, seconds, speed]);

  const newText = text.split("").map((symbol, i) => {
    let color = "";
    if (i < textarea.length) {
      color = symbol === textarea[i] ? "green" : "red";
    }
    return (
      <span key={`${symbol}_${i}`} className={color}>
        {symbol}
      </span>
    );
  });

  const checkCyrillic = (str) => {
    return /[а-я]/i.test(str);
  };

  const setSpeedInterval = (symbols, seconds) => {
    setSpeed(Math.floor(symbols / (seconds / 60)));
  };

  const goBack = () => {
    navigate(-1)
  }

  const reloadPage = () => {
      window.location.reload()
  }

  const backToMain = () => {
    navigate('/')
  }

  const onChangeInput = (value) => {
    if (checkCyrillic(value)) {
      alert("Смените язык на клавиатуре");
      clearTimer();
    } else {
      setTextarea(value);
      setSymbols(value.split("").filter((e, i) => e === text[i]).length);
      setErrors(value.split("").filter((e, i) => e !== text[i]).length);
      setTextLength(newText.length);
      setAccuracy((((textLength - errors) / textLength) * 100).toFixed(1))
      setSpeedInterval(symbols, seconds);
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main reloadPage={reloadPage}/>}></Route>
        <Route path="/test/"element={<Test
              seconds={seconds}
              accuracy={accuracy}
              speed={speed}
              checkCorrect={checkCorrectTest}
              newText={newText}
              onChangeInput={onChangeInput}
              textarea={textarea}
              goBack={goBack}
              reloadPage={reloadPage}
              startTimer={startTimer}
            />
          }
        ></Route>
        <Route
          path="/result"
          element={
            <Result seconds={seconds} accuracy={accuracy} speed={speed} backToMain={backToMain} />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
