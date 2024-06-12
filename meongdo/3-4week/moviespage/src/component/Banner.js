import React from 'react';
import styled from 'styled-components';

const StyledBanner = styled.div`
    width: 100%;
    height: 400px;
    background-color: rgb(9, 18, 31);
    display: flex;
    justify-content: center;
    align-items: center;
`
const StyledBannerContent = styled.div`
    text-align: center;
    font-size: 30px;
    font-weight: bold;
`

function Banner() {
    return (
        <StyledBanner>
            <StyledBannerContent>
                <div>환영합니다</div>
            </StyledBannerContent>
        </StyledBanner>
    );
}

export default Banner;