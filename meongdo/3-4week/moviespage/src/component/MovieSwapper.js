import React from 'react';
import styled from 'styled-components';


const StyledMovieSwapper = styled.div`
  position: absolute;
  width: 250px;
  height: 480px;
  color: rgb(210, 210, 210);
  opacity: 0;
  justify-content: center;
  border-radius: 5px;

  &:hover {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    transition: opacity 0.2s ease;
    opacity: 1;
  }
`
const StyledTitle = styled.h3`
  margin: 10px;
  margin-top: 20px;
`
const StyledOverview = styled.p`
  margin: 10px;
  margin-top: 20px;
`

const MovieSwapper = ({title, overview}) => (
  <StyledMovieSwapper>
    <StyledTitle>{title}</StyledTitle>
    <StyledOverview>{overview}</StyledOverview>
  </StyledMovieSwapper>
)

export default MovieSwapper;