import React from 'react';
import styled from 'styled-components';

const StyledPagination = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px;
    margin-bottom: 20px;
`
const StyledButton = styled.button`
    background: none;
    border: none;
    color: white;
    textDecoration: none;
    font-weight: bold;
    font-size: 20px;
    padding-left: 50px;
    padding-right: 50px;
`
const Pagination = ({ count, setCount }) => {

    const increase = () => {
        setCount(count + 1);
    };
    
    const decrease = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <StyledPagination>
            <StyledButton onClick={decrease} disabled={count === 1} style={count === 1 ? {opacity: '0.2'} : {color: 'white'}}>ᐸ</StyledButton>
            <div style={{fontSize: '20px', paddingTop: '4px'}}>{count}</div>
            <StyledButton onClick={increase}>ᐳ</StyledButton>
        </StyledPagination>
    )
};

export default Pagination;