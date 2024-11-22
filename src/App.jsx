// App.js
import './index.css';
import React from 'react';
import { Routes } from 'react-router-dom';
import axios from 'axios';
// HOC
import DefaultHoc from './HOC/Default.HOC';
import MovieHOC from './HOC/Movie.HOC';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Pages
import Home from './components/Pages/Home';
import Movie from './components/Pages/Movie';
import Plays from './components/Pages/Plays';


//axios default setting
axios.defaults.baseURL="https://api.themoviedb.org/3";
axios.defaults.params={}
axios.defaults.params["api_key"]=import.meta.env.VITE_API_KEY;


function App() {
  return (
    <Routes>

      {DefaultHoc({ path: "/", component: Home})}
      {MovieHOC({ path: "/movie/:id", component: Movie })}
      {DefaultHoc({ path: "/plays", component: Plays})}
     
    </Routes>
  );
}

export default App;
