import React from 'react';
import { data }  from '../data';
import Navbar from './Navbar';
import   fromimport MovieCard from './MovieCard';
 './MovieCard'
// map-iterate

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="main">
        <div className="tabs">
          <div  className="movies">Movies</div>
          <div  className="favourite">Favourite</div>
        </div>
        <div className="list">
          
             {data.map(movie =>(
              <MovieCard movie ={movie}/>
             ))} 
        </div>
      </div>
    
    </div>
  );
}

export default App;
