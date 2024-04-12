import { useState } from 'react';
import { movies } from './api';
import './index.css';

function MoviesList({ movies }) {
  return (
    <div className="movies-list">
      {movies.results.map(movie => (
        <div key={movie.id} className="movieBox">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}` } alt={movie.title} />
          <div className="showTitle">
            <span className="movieTitle">{movie.title}</span>
            <span className="vote_average">{movie.vote_average}</span>
          </div>
          <div className="movie-swapper">
            <div>{movie.title}</div>
            <div>{movie.overview}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>영화 목록</h1>
      <MoviesList movies={movies} /> {/* MoviesList 컴포넌트에 movies 배열을 전달합니다. */}
    </div>
  );
}

export default App;
