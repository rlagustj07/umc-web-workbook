import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async() => {
            try {
                setLoading(true);
                const token = localStorage.getItem('token');
                //console.log(token);

                const response = await axios.get('http://localhost:8080/auth/me',  {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setName(response.data.name);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    

    return (
        <StyledBanner>
            <StyledBannerContent>
                {localStorage.getItem('token') ? 
                (loading ? (<div>배너에 로딩 중...</div>) : (<div>{name}님 환영합니다!</div>)) :
                (<div>환영합니다</div>)}
            </StyledBannerContent>
        </StyledBanner>
    );
}

export default Banner;