// App.js
import './index.css';
import React from 'react';
import { Routes } from 'react-router-dom';
// HOC
import DefaultHoc from './HOC/Default.HOC';
import MovieHOC from './HOC/Movie.HOC';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Pages
import Home from './components/Pages/Home';
import Movie from './components/Pages/Movie';



function App() {
  return (
    <Routes>

      {DefaultHoc({ path: "/", component: Home})}
      {MovieHOC({ path: "/movie/:id", component: Movie })}
     
    </Routes>
  );
}

export default App;
