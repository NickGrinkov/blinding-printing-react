import React from 'react';
import {Route, Routes} from 'react-router-dom';
import axios from 'axios';
import './App.scss';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router';
import Main from './Pages/Main/Main';
import Test from './Pages/Test/Test';
import Result from './Pages/Result/Result';

function App() {
  const [seconds, setSeconds] = useState(0)
  const [text, setText] = useState('');
  const [textLength, setTextLength] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [textarea, setTextarea] = useState('');
  const [symbols, setSymbols] = useState(0);
  const [errors, setErrors] = useState(0);
  const [speed, setSpeed] = useState(0)

  const navigate = useNavigate()

  const startTimer = () => {
      setSeconds(seconds => seconds + 1)
  }

    const clearTimer = () => {
    setSeconds(0)
    }
  
  useEffect(() => {
      let interval;
      if(checkCorrectTest()) {
          setSeconds(seconds)
      } else {
          interval = setInterval(() => startTimer(), 1000)
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
  },[symbols, seconds, speed])


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
    <div className="App">
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/test/" element={<Test
                          seconds={seconds}
                          accuracy={accuracy}
                          speed={speed}
                          checkCorrect={checkCorrectTest}
                          newText={newText}
                          onChangeInput={onChangeInput}
                          textarea={textarea}
                          startTimer={startTimer}
          />}></Route>
          <Route path="/result" element={<Result 
                          seconds={seconds}
                          accuracy={accuracy}
                          speed={speed}
          />}></Route>
        </Routes>
    </div>
  );
}

export default App;
