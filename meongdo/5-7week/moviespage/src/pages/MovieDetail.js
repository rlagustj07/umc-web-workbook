import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

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
    margin-top: 120px;
    margin-bottom: 150px;
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
const StyledCreditBox = styled.div`
    padding-top: 50px;
    margin-bottom: 0px;
    background-color: rgb(37, 48, 93);
`
const CreditTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    font-weight: bold;
    padding-bottom: 40px;
`
const CreditContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
`
const Profile = styled.div`    
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    max-width: 200px;
`
const StyledImgContainer = styled.div`
    width: 100px;
    height: 100px;
    padding: 20px;
`
const StyledImg = styled.img`
    transform: translate(50, 50);
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: auto;
    border-radius: 50px;
`
const StyledText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    text-align: center;
    padding: 5px;
`

function NoOverview() {
    return (
        <div style={{lineHeight: '1.5', fontWeight: '200'}}>
            TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다.
        </div>
    )
}

function MovieDetail() {
    const [movieDetail, setMovieDetail ] = useState([]);
    const [credits, setCredits] = useState([]);
    const { state } = useLocation();
    const intVoteAverage = Math.floor(state.vote_average);
    const defaultImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const movieDetailResponse = await axios.get(`https://api.themoviedb.org/3/movie/${state.id}?language=ko-KR&api_key=06075466b8a469967c8df68b538c3195`);
                const creditsResponse = await axios.get(`https://api.themoviedb.org/3/movie/${state.id}/credits?language=en-US&api_key=06075466b8a469967c8df68b538c3195`);
                setMovieDetail(movieDetailResponse.data);
                setCredits(creditsResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, [state.id]);


    return (<>
        <StyledBackGroundImg src={`https://image.tmdb.org/t/p/w780${movieDetail.backdrop_path}`} alt='영화 배경 이미지' />
        <StyledCenterContainer>
            <img src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`} alt='영화 포스터 이미지' 
                style={{height: '60vh'}} />
            <StyledMovieDetailInfo>
                <div style={{fontSize: '25px', fontWeight: 'bold', paddingBottom: '40px'}}>{ state.title }</div>
                <StyledDetailByItem>
                    <div style={{paddingRight: '10px'}}>평점</div>
                    <div>
                        {Array.from({ length: intVoteAverage }, (_, i) => (
                            <span>⭐️</span>
                        ))}
                    </div>
                </StyledDetailByItem>
                <StyledDetailByItem>
                    <div style={{paddingRight: '10px'}}>개봉일</div>
                    <div style={{fontWeight: 'normal'}}>{movieDetail.release_date}</div>
                </StyledDetailByItem>
                <StyledDetailByItem>줄거리</StyledDetailByItem>
                <div style={{lineHeight: '1.5', fontWeight: '200'}}>{movieDetail.overview ? movieDetail.overview : <NoOverview />}</div>
            </StyledMovieDetailInfo>
        </StyledCenterContainer>


        <StyledCreditBox>
            <CreditTitle>출연진 및 제작진</CreditTitle>
            <CreditContainer>
            {credits.cast && credits.cast.map((data, i) => (
                <Profile key={i}>
                    <StyledImgContainer>
                        <StyledImg src={data.profile_path ? `https://image.tmdb.org/t/p/w200/${data.profile_path}` : defaultImage} alt={data.id} />
                    </StyledImgContainer>
                    <StyledText>{data.name}</StyledText>
                    <StyledText>Acting</StyledText>
                </Profile>
            ))}
            {credits.crew && credits.crew.map((data, i) => (
                <Profile key={i}>
                    <StyledImgContainer>
                        <StyledImg src={data.profile_path ? `https://image.tmdb.org/t/p/w200/${data.profile_path}` : defaultImage} alt={data.id} />
                    </StyledImgContainer>
                    <StyledText>{data.name}</StyledText>
                    <StyledText>{data.job}</StyledText>
                </Profile>
            ))}
        </CreditContainer>
        </StyledCreditBox>
    </>)
}

export default MovieDetail;