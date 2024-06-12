import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const StyledMovieContainer = styled.div`
  width: 250px;
  margin: 20px;
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
  margin: 15px;
  margin-bottom: 70px;
`
const StyledMovieTitle = styled.span`
  font-weight: bold;
`

function MovieBox(props) {
  const navigate = useNavigate();

  const onClickMovieItem = () => {
    navigate(`/movie/${props.id}`, { state: props })
  }

  return (
    <StyledMovieContainer onClick={onClickMovieItem}>
      <StyledMovieImg src={`https://image.tmdb.org/t/p/w500${props.poster_path}`} alt='영화 포스터' />
      <StyledShowTitle>
        <StyledMovieTitle>{props.title}</StyledMovieTitle>
        <span className="vote_average" style={{paddingLeft: '20px'}}>⭐️{props.vote_average}</span>
      </StyledShowTitle>
    </StyledMovieContainer>
  )
}

export default MovieBox;