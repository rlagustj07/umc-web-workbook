import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Headbar from './Headbar';
import SideBar from './SideBar';

const StyledNavbar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    width: 100%;
    height: 50px;
    background-color: rgb(30, 41, 78);
`
const StyledNavContents = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px;
    font-size: 18px;
`
const StyledPcMenu = styled.div`
    @media (max-width: 800px) {
        display: none;
    }
`
const StyledMobileMenu = styled.div`
    @media (min-width: 800px) {
        display: none;
    }
`

const StyledLink = styled(Link)`
    color: white;
    margin: 15px;
    text-decoration: none;
`

function Nav() {
    return (
        <div>
            <StyledNavbar>
                <StyledNavContents>
                    <div>
                        <StyledLink to={'/'}>UMC Movie</StyledLink>
                    </div>
                    <StyledPcMenu>
                        <Headbar />
                    </StyledPcMenu>
                    <StyledMobileMenu>
                        <SideBar />
                    </StyledMobileMenu>
                </StyledNavContents>
            </StyledNavbar>
        </div>
    );
}

export default Nav;