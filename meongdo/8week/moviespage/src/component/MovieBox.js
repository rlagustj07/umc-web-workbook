import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const StyledMovieContainer = styled.div`
  width: 20vw;
  height: 40vw;
  min-width: 200px;
  min-height: 400px;
  margin: 15px;
  background: rgb(57, 68, 119);
  border-radius: 5px;
`
const StyledMovieImg = styled.img`
  width: 100%;
  border-radius: 5px;
`
const StyledShowTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  margin-bottom: 50px;
  font-size: 15px;

    @media (min-width: 500px) {
        font-size: 16px;
    }
    
    @media (min-width: 750px) {
        font-size: 18px;
    }
`
const StyledMovieTitle = styled.span`
  font-weight: bold;
`
const StyledOverview = styled.p`
  margin-left: 20px;
  margin-right: 20px;
  line-height: 1.5;
  font-weight: 200;
  font-size: 9px;
  text-align: justify;
  
  @media (min-width: 500px) {
    font-size: 10px;
  }
  
  @media (min-width: 750px) {
    font-size: 11px;
  }
`
const StyledMovieOverviewContainer = styled.div`
  position: absolute;
  z-index: 1;
  width: 20vw;
  height: 40vw;
  min-width: 200px;
  min-height: 400px;
  color: rgb(210, 210, 210);
  opacity: 0;
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
    transition: opacity 0.2s ease;
    opacity: 1;
  }
`

function MovieBox(props) {
  const navigate = useNavigate();

  const onClickMovieItem = () => {
    navigate(`/movie/${props.id}`, { state: props })
  }

  return (
    <StyledMovieContainer onClick={onClickMovieItem}>

      <StyledMovieOverviewContainer>
        <StyledMovieTitle style={{padding: '20px'}}>{props.title}</StyledMovieTitle>
        <StyledOverview>{props.overview ? props.overview : "TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다."}</StyledOverview>
      </StyledMovieOverviewContainer>

      <StyledMovieImg src={`https://image.tmdb.org/t/p/w500${props.poster_path}`} alt='영화 포스터' />
      <StyledShowTitle>
        <StyledMovieTitle>{props.title}</StyledMovieTitle>
        <span className="vote_average" style={{paddingLeft: '20px'}}>⭐️{props.vote_average}</span>
      </StyledShowTitle>

    </StyledMovieContainer>
  )
}

export default MovieBox;