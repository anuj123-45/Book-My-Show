// App.js
import './index.css';
import React from 'react';
import { Routes } from 'react-router-dom';
import DefaultHoc from './HOC/Default.HOC';
import Temp from './components/Temp';

function App() {
  return (
    <Routes>

      {DefaultHoc({ path: "/", component: Temp })}
     
    </Routes>
  );
}

export default App;
