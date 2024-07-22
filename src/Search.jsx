import React, { useState } from 'react'
import './Search.css'

const Search = ({ setMovies }) => {
  const [query, setQuery] = useState('')

  const searchMovies = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=916c26cc058b8b53e88ef50424b1efd2&query=${query}`)
    const data = await response.json()
    setMovies(data.results)
  }

  return (
    <form onSubmit={searchMovies}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Insert a movie title here..."
      />
      <button type="submit">Explore!</button>
    </form>
  )
}

export default Search

