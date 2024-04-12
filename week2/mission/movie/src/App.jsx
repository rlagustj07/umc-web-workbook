import './index.css';
import {movies} from './data';
import Movie from './assets/Movie';

function App() {

  return (

      <div className='appContainer'>
        { 
          movies.results.map((item) => {
            return (
              <Movie
                title = {item.title}
                poster_path = {item.poster_path}
                vote_average = {item.vote_average}
                overview = {item.overview}
               />
            )
          })
        }
      </div>
    
  );
}

export default App;
