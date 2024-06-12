import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import starImg from './asset/starImg.png';

const StyledBackGroundImg = styled.img`
    opacity: 0.1;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: -10;
`
const StyledCenterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
`
const StyledMovieDetailInfo = styled.div`
    width: 600px;
    padding: 100px;

`
const StyledDetailByItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    font-weight: bold;
    font-size: 18px;
`
function NoOverview() {
    return (
        <div style={{lineHeight: '1.5', fontWeight: '200'}}>
            TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다.
        </div>
    )
}

function MovieDetail() {
    const { title } = useParams();
    const { state } = useLocation();
    const intVoteAverage = Math.floor(state.vote_average);

    return (<>
        <StyledBackGroundImg src={`https://image.tmdb.org/t/p/w780${state.backdrop_path}`} alt='영화 배경 이미지' />
        <StyledCenterContainer>
            <img src={`https://image.tmdb.org/t/p/w500${state.poster_path}`} alt='영화 포스터 이미지' 
                style={{height: '60vh'}} />
            <StyledMovieDetailInfo>
                <div style={{fontSize: '25px', fontWeight: 'bold', paddingBottom: '40px'}}>{ title }</div>
                <StyledDetailByItem>
                    <div style={{paddingRight: '10px'}}>평점</div>
                    <div>
                        {Array.from({ length: intVoteAverage }, (_, i) => (
                            <img style={{width: '20px'}} key={i} src={starImg} alt='평점 별 이미지' />
                        ))}
                    </div>
                </StyledDetailByItem>
                <StyledDetailByItem>
                    <div style={{paddingRight: '10px'}}>개봉일</div>
                    <div style={{fontWeight: 'normal'}}>{state.release_date}</div>
                </StyledDetailByItem>
                <StyledDetailByItem>줄거리</StyledDetailByItem>
                <div style={{lineHeight: '1.5', fontWeight: '200'}}>{state.overview ? state.overview : <NoOverview />}</div>
            </StyledMovieDetailInfo>
        </StyledCenterContainer>
    </>)
}

export default MovieDetail;