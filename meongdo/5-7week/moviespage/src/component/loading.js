import React from 'react';
import { Oval } from 'react-loader-spinner';
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

function Loading() {
    return (
        <Background>
            <Oval 
            color='rgb(240, 203, 87)'
            height={100}
            width={100}
            />
        </Background>
    )
}

export default Loading;