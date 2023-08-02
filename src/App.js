import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { MoviesList } from "./components/MoviesList";
import { Movie } from "./components/Movie";
import { PageNotFound } from "./components/PageNotFound";
import { Search } from "./components/Search";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/movieslist/:type' element={<MoviesList />} />
        <Route path='/movie/:id' element={<Movie />} />
        <Route path='/search/:search' element={<Search />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
