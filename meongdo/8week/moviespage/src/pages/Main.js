import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Banner from '../component/Banner';
import MovieBox from '../component/MovieBox';

const StyledMainTitle = styled.div`
    font-size: 30px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;

    @media (max-width: 700px) {
        font-size: 26px;
    }
    
    @media (max-width: 480px) {
        font-size: 23px;
    }
`
const Button = styled.button`
    width: 30px;
    height: 30px;
    border: none;
    background-color: rgb(219, 195, 100);
    border-radius: 20px;
    margin: 10px;
`
const ResultContainer = styled.div`
    width : 70vw;
    display : flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius : 10px;
    margin-top : 30px;
    margin-bottom: 30px;
    max-height : 600px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 10px; /* 스크롤바의 너비 */
      }
    
      &::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0); /* 스크롤바 트랙의 배경색 */
      }
    
      &::-webkit-scrollbar-thumb {
        background-color: rgb(219, 195, 100); /* 스크롤바의 색상 */
        border-radius: 10px; /* 스크롤바의 둥근 모서리 */
      }
`
const SearchInput = styled.input`
    width : 40vw;
    height : 40px;
    border-radius : 25px;
    padding-left : 15px;
`
const Text = styled.div`
    color : white;
    text-align : center;
    margin-top : 50px;
`
const SearchingContainer = styled.div`
    display : flex;
    justify-content: center;

`

function Main() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState('');

    const handleSearch = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=06075466b8a469967c8df68b538c3195&query=${searchQuery}&include_adult=false&language=ko-KR&page=1`);
            const data = await response.json();
            setSearchResults(data.results);
            setLoading(false);
        } catch (error) {
            console.error('Error searching movies:', error);
        }
    };

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if (searchQuery) {
                handleSearch();
            } else {
                setSearchResults([]);
            }
        }, 700);
    
        return () => clearTimeout(delayDebounce);
    }, [searchQuery]); 



    return (<>
        <Banner />
        <StyledMainTitle>
            📽️ Find your Movies!
        </StyledMainTitle>
        <SearchingContainer>
            <SearchInput
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            id='search'/>
            <Button onClick={handleSearch}>🔍</Button>
        </SearchingContainer>
        <SearchingContainer>
            {loading ? (<Text>데이터를 받아오는 중입니다...</Text>) : (
                searchResults.length > 0 && (
                    <ResultContainer>
                        {searchResults.map((data) => (
                            <MovieBox
                                backdrop_path={data.backdrop_path}
                                title={data.title}
                                id={data.id}
                                poster_path={data.poster_path}
                                vote_average={data.vote_average}
                                release_date={data.release_date}
                                overview={data.overview} />
                        ))}
                    </ResultContainer>
                )
            )}
        </SearchingContainer>
        
    </>);
}

export default Main;