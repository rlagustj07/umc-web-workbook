import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Signup from './pages/Signup';
import Login from './pages/Login';
import NowPlaying from './pages/NowPlaying';
import Popular from './pages/Popular';
import TopRated from './pages/TopRated';
import Upcoming from './pages/Upcoming';
import Nav from './component/Nav';
import Footer from './component/Footer';
import NotFound from './pages/NotFound';
import MovieDetail from './pages/MovieDetail';
import { QueryClientProvider, QueryClient } from 'react-query';


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

  const queryClient = new QueryClient()

  return (
    <>
    <GlobalStyle />
    <StyledMargin />
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <div className='App'>
          <Nav />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/nowplaying' element={<NowPlaying />} />
            <Route path='/popular' element={<Popular />} />
            <Route path='/toprated' element={<TopRated />} />
            <Route path='/Upcoming' element={<Upcoming />} />
            <Route path='/movie/:title' element={<MovieDetail />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </QueryClientProvider>
    </BrowserRouter>
    <StyledMargin />
    </>
  );
}

export default App;
