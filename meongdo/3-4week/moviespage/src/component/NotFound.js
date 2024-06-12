import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
`
const StyledLink = styled(Link)`
    color: white;
    margin: 15px;
    text-decoration: none;

    &:hover {
        transform: scale(1.05);
        font-weight: bold;
    }
`


function NotFound() {
    return (<>
        <StyledCenter style={{ fontWeight: 'bold', fontSize: '50px', marginTop: '200px' }}>Opps!</StyledCenter>
        <StyledCenter style={{ fontWeight: 'bold', fontSize: '20px' }}>예상치 못한 에러가 발생했습니다..</StyledCenter>
        <StyledCenter style={{ fontSize: '20px' }}>Not Found</StyledCenter>
        <StyledCenter>
            <StyledLink to={'/'} style={{ marginTop: '30px' }}>메인 페이지로 이동하기</StyledLink>
        </StyledCenter>
    </>)
}

export default NotFound;