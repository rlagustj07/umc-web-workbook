import React from 'react'
import MovieDescription from './Overview';

const baseUrl = "https://image.tmdb.org/t/p/w500"

export default function Movie ( {title, poster_path, vote_average, overview}) {

    return(

        <div className='movieContainer'>
            <MovieDescription 
            key={title}
            title={title}
            overview={overview}/>
            <div className='movieImg'>
                <img src= {baseUrl + poster_path} alt="영화포스터"/>
            </div>
            <div className='movieInfo'>
                <h4>{title}</h4>
                <span>{vote_average}</span>
            </div>
        </div>

    )
}