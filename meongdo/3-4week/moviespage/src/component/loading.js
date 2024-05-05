import React from 'react';
import Spinner from './asset/Spinner.gif';
import styled from 'styled-components';

const Background = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const StyledSpinner = styled.img`
    width: 100px;
    height: 100px;
`

function Loading() {
    return (
        <Background>
            <StyledSpinner src={Spinner} alt='로딩 스피너' />
        </Background>
    )
}

export default Loading;