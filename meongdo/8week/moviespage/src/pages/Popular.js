import React, { useEffect, useState } from 'react';
import MovieBox from '../component/MovieBox';
import Loading from '../component/loading';
import styled from 'styled-components';
import Pagination from '../component/Pagination';


const StyledAppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const Popular = () => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [count, setCount] = useState(1)


  const GetPopularMovies = async(count) => {
    await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=06075466b8a469967c8df68b538c3195&language=ko&page=${count}&region=KR`)
    .then(res => res.json())
    .then(json => {setMovies(json.results); setIsLoading(false)})
  }

  useEffect(()=>{
    GetPopularMovies(count)
  }, [count])


  return (
    <div>
    <StyledAppContainer>
    {isLoading ? (<Loading />) :
    (movies.map((data) => (
          <MovieBox
            backdrop_path={data.backdrop_path}
            title={data.title}
            id={data.id}
            poster_path={data.poster_path}
            vote_average={data.vote_average}
            release_date={data.release_date}
            overview={data.overview} />
    )))
    }
    </StyledAppContainer>
    <Pagination count={count} setCount={setCount} />
    </div>
  )
}

export default Popular;