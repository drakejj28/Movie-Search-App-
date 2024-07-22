// import React from 'react'
// import { Link } from 'react-router-dom'
// import './MovieList.css'

// const MovieList = ({ movies }) => {
//   return (
//     <div>
//       {movies.map((movie) => (
//         <div key={movie.id}>
//           <Link to={`/movie/${movie.id}`}>
//             <h3>{movie.title}</h3>
//           </Link>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default MovieList

import React from 'react';
import { Link } from 'react-router-dom';
import './MovieList.css';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-container">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <Link to={`/movie/${movie.id}`}>
            <h3 className="movie-title">{movie.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;

