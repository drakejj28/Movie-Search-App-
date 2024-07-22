import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './MovieDetail.css'

const MovieDetail = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=916c26cc058b8b53e88ef50424b1efd2`)
      const data = await response.json()
      setMovie(data)
    }

    fetchMovie()
  }, [id])

  return (
    <div className="container">
      {movie ? (
        <div>
          <h2 className="title">{movie.title}</h2>
          <p className="overview">{movie.overview}</p>
          <div className="poster-container">
          <img className="poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default MovieDetail

