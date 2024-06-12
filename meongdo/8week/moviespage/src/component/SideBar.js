import { Link, NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const MobileIcon = styled.div`
    padding-right: 10px;

    &:hover {
        cursor: pointer;
      }
`
const SidebarContainer = styled.div`
    position: fixed;
    top: 50px;
    right: 0;
    width: 100vw;
    height: 100%;
    background-color: rgb(37, 48, 93);
    padding-top: 60px;
    transform: ${(props) => (props.isOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease;
`
const SidebarContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
    height: 400px;
    justify-content: space-evenly;
`
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

const SideBar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

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
        setSidebarOpen(false);
    }


    return (<>
        <MobileIcon onClick={toggleSidebar}>☰</MobileIcon>
        <SidebarContainer isOpen={sidebarOpen}>
            <SidebarContent>
                {isLogin ? (
                    <StyledHover><StyledLink to={'/'} onClick={logOut}>로그아웃</StyledLink></StyledHover>
                ) : (<>
                    <StyledHover><NavLink to={'/login'} style={({isActive})=>{return isActive ? activeStyle:deactiveStyle;}} onClick={closeSidebar}>로그인</NavLink></StyledHover>
                    <StyledHover><NavLink to={'/signup'} style={({isActive})=>{return isActive ? activeStyle:deactiveStyle;}} onClick={closeSidebar}>회원가입</NavLink></StyledHover>
                </>)}
                <StyledHover><NavLink to={'/popular'} style={({isActive})=>{return isActive ? activeStyle:deactiveStyle;}} onClick={closeSidebar}>Popular</NavLink></StyledHover>
                <StyledHover><NavLink to={'/nowplaying'} style={({isActive})=>{return isActive ? activeStyle:deactiveStyle;}} onClick={closeSidebar}>Now Playing</NavLink></StyledHover>
                <StyledHover><NavLink to={'/toprated'} style={({isActive})=>{return isActive ? activeStyle:deactiveStyle;}} onClick={closeSidebar}>Top Rated</NavLink></StyledHover>
                <StyledHover><NavLink to={'/upcoming'} style={({isActive})=>{return isActive ? activeStyle:deactiveStyle;}} onClick={closeSidebar}>Upcoming</NavLink></StyledHover>
            </SidebarContent>
        </SidebarContainer>
        </>)
}

export default SideBar;