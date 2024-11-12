// App.js
import './index.css';
import React from 'react';
import { Routes } from 'react-router-dom';
import DefaultHoc from './HOC/Default.HOC';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './components/Pages/Home';


function App() {
  return (
    <Routes>

      {DefaultHoc({ path: "/", component: Home })}
     
    </Routes>
  );
}

export default App;
