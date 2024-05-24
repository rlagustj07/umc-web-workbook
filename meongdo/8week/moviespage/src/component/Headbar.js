import { Link, NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    color: white;
    margin: 15px;
    text-decoration: none;
`
const activeStyle = {
    color: 'rgb(240, 203, 87)',
    margin: '15px',
    textDecoration: 'none',
    fontWeight: 'bold',
}
const deactiveStyle = {
    color: 'white',
    margin: '15px',
    textDecoration: 'none',
}

const StyledHover = styled.div`
    &:hover {
        transform: scale(1.05);
        font-weight: bold;
        transition: opacity 0.2s ease;
    }
    display: inline-block;
`


function Headbar() {

    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            if (localStorage.getItem('token')) {
            setIsLogin(true);
            } else {
            setIsLogin(false);
            }
        };
        fetchData();
    }, []);
    
    const logOut = () => {
        localStorage.removeItem('token');
        window.location.reload();
        setIsLogin(false);
    }

    return (<>
        {isLogin ? (
            <StyledHover><StyledLink to={'/'} onClick={logOut}>로그아웃</StyledLink></StyledHover>
        ) : (<>
            <StyledHover><NavLink to={'/login'} style={({isActive})=>{return isActive ? activeStyle:deactiveStyle;}}>로그인</NavLink></StyledHover>
            <StyledHover><NavLink to={'/signup'} style={({isActive})=>{return isActive ? activeStyle:deactiveStyle;}}>회원가입</NavLink></StyledHover>
            </>)}
        <StyledHover><NavLink to={'/popular'} style={({isActive})=>{return isActive ? activeStyle:deactiveStyle;}}>Popular</NavLink></StyledHover>
        <StyledHover><NavLink to={'/nowplaying'} style={({isActive})=>{return isActive ? activeStyle:deactiveStyle;}}>Now Playing</NavLink></StyledHover>
        <StyledHover><NavLink to={'/toprated'} style={({isActive})=>{return isActive ? activeStyle:deactiveStyle;}}>Top Rated</NavLink></StyledHover>
        <StyledHover><NavLink to={'/upcoming'} style={({isActive})=>{return isActive ? activeStyle:deactiveStyle;}}>Upcoming</NavLink></StyledHover>
    </>);
}

export default Headbar;