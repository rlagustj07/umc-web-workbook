import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import movies from './Movies'

function App() {
  const baseUrl = 'https://image.tmdb.org/t/p/w500';

  return (
    <div>
       <div className='container'>
          {movies.results.map((item, index) => (
          <div className='col4' key={index}>
            <img src={baseUrl + item.poster_path} alt={item.title} className='image'/>
            <div className='label'>
              <h3 className='title'>{item.title}</h3>
              <p className='rating'>{item.vote_average}</p>
            </div>

            <div className="overlay">
              <h4 className='blacktitle'>{item.title}</h4>
              <p className='blackinfo'>{item.overview}</p>
            </div>
          </div>
        ))}
        </div>
    </div>
  )
}

export default App


