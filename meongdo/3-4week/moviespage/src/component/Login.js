import React, { useState } from 'react';
import styled from 'styled-components';

const StyledLogin = styled.span`
    color: rgb(240, 203, 87);
    margin: 15px;
    font-weight: bold;
`

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(preState => !preState);
    };

    return (<>
        <StyledLogin onClick={handleLogin}>
            {isLoggedIn ? '로그아웃' : '로그인'}
        </StyledLogin>
    </>)
}

export default Login;