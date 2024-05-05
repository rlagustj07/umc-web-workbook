import React from 'react';
import styled from 'styled-components';
import searchImg from './asset/searchImg.png';
import movieImg from './asset/movieImg.png';
import Banner from './Banner';

const StyledMainTitle = styled.div`
    font-size: 30px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
`
const StyledCenterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const StyledInput = styled.input`
    padding: 10px;
    border-radius: 20px;
    width: 400px;
    border: none;
    margin: 10px;
`
const Button = styled.button`
    width: 30px;
    height: 30px;
    border: none;
    background-color: rgb(219, 195, 100);
    border-radius: 20px;
    margin: 10px;
`
const StyledImg = styled.img`
    position: relative;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

function Main() {
    return (<>
        <Banner />
        <StyledMainTitle>
            <StyledImg style={{margin: '10px'}}src={movieImg} alt='movie' />
            Find your Movies!
        </StyledMainTitle>
        <StyledCenterContainer>
            <StyledInput />
            <Button><StyledImg src={searchImg} alt='search' /></Button>
        </StyledCenterContainer>
    </>);
}

export default Main;