import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.scss';
import Main from './components/Main/Main';
import Test from './components/Testing/Test';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Main/>}> </Route>
          <Route path="/test" element={<Test/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
