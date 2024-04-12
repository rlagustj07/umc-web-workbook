
import React from 'react';

const MovieDescription = ({ title, overview }) => {
  return (
    <div className="movieOverview">
      <h3>{title}</h3>
      <p>{overview}</p>
    </div>
  );
};

export default MovieDescription;