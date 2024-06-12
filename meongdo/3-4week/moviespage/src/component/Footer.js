import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    width: 100%;
    background-color: rgb(30, 41, 78);
    text-align: right;
`
const StyledFooterMenu = styled.div`
    padding: 10px;
`

function Footer() {
    return (
        <StyledFooter>
            <StyledFooterMenu>https://www.makeus.in/umc</StyledFooterMenu>
        </StyledFooter>
    );
}

export default Footer;