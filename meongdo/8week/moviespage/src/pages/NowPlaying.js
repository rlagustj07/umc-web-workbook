import React from 'react';
import MovieBox from '../component/MovieBox';
import Loading from '../component/loading';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';
import { useInfiniteQuery } from 'react-query';



const StyledAppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`


const NowPlaying = () => {

  const GetNowPlayingMovies = async({ pageParam = 1 }) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=06075466b8a469967c8df68b538c3195&language=ko&page=${pageParam}`)
    return response.json()
  }

  const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery (
    ['nowPlaying'], GetNowPlayingMovies,
    {getNextPageParam : lastPage => {
      const nextPage = lastPage.page + 1
      return nextPage <= lastPage.total_pages ? nextPage : false
    }}
  )

  const nowPlaying = data?.pages.flatMap(page => page.results)




  return (<>
    {isLoading ? (<Loading />) : (
    <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
      <StyledAppContainer>
        {nowPlaying.map((data) => (
            <MovieBox
              backdrop_path={data.backdrop_path}
              title={data.title}
              id={data.id}
              poster_path={data.poster_path}
              vote_average={data.vote_average}
              release_date={data.release_date}
              overview={data.overview} />
          ))}
      </StyledAppContainer>  
    </InfiniteScroll>)}
  </>)
}

export default NowPlaying;
