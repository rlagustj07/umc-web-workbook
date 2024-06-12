import React, { useEffect, useState } from 'react';
import MovieBox from './MovieBox';
import Loading from './loading';
import styled from 'styled-components';

const StyledAppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const TopRated = () => {

  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const GetTopRatedMovies = async() => {
    await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=06075466b8a469967c8df68b538c3195&language=ko&page=1&region=KR")
    .then(res => res.json())
    .then(json => {setMovies(json.results); setIsLoading(false)})
  } 

  useEffect(()=>{
    GetTopRatedMovies()
  }, [])

  return (
    <StyledAppContainer>
    {isLoading ? (<Loading />) :
    (movies.map((data) => (
          <MovieBox
            backdrop_path={data.backdrop_path}
            title={data.title}
            poster_path={data.poster_path}
            vote_average={data.vote_average}
            release_date={data.release_date}
            overview={data.overview} />
    )))
    }
    </StyledAppContainer>  
  )
}

export default TopRated;