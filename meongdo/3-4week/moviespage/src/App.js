import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './component/Main';
import NowPlaying from './component/NowPlaying';
import Popular from './component/Popular';
import TopRated from './component/TopRated';
import Upcoming from './component/Upcoming';
import Nav from './component/Nav';
import Footer from './component/Footer';
import NotFound from './component/NotFound';
import MovieDetail from './component/MovieDetail';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    background-color: rgb(37, 48, 93);
    color: white;
  }
`
const StyledMargin = styled.div`
  height: 50px;
  width: 100%;
`

function App() {
  return (
    <>
    <GlobalStyle />
    <StyledMargin />
    <BrowserRouter>
      <div className='App'>
        <Nav />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/nowplaying' element={<NowPlaying />} />
          <Route path='/popular' element={<Popular />} />
          <Route path='/toprated' element={<TopRated />} />
          <Route path='/Upcoming' element={<Upcoming />} />
          <Route path='/movie/:title' element={<MovieDetail />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    <StyledMargin />
    </>
  );
}

export default App;
