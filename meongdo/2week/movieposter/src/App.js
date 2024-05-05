import { useState } from 'react';
import { movies } from './api';
import './index.css';

function MoviesList({ movies }) {
  return (
    <div>
      {movies.results.map(movie => (
        <div key={movie.id} className="movieContainer">
          <div className="movie-swapper">
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </div>
          <div className="movie-img">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}` } alt={movie.title} />
          </div>
          <div className="showTitle">
            <span className="movieTitle">{movie.title}</span>
            <span className="vote_average">{movie.vote_average}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <MoviesList movies={movies} /> {/* MoviesList 컴포넌트에 movies 배열을 전달합니다. */}
    </div>
  );
}

export default App;
