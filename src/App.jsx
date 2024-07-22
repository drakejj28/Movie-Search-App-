import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Search from './Search'
import MovieList from './MovieList'
import MovieDetail from './MovieDetail'
import './App.css'

const App = () => {
  const [movies, setMovies] = useState([])

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <h1>Search 4 A Movie</h1>
            <Search setMovies={setMovies} />
            <MovieList movies={movies} />
          </>
        } />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  )
}

export default App



