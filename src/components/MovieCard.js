import React from 'react';


class MovieCard extends React.Component {
    render(){
        const { movie }= this.props;
  return (
    <div className="movie-card">
     <div className="left">
         <img alt ="movie-poster" src={Movie.Poster}/>
     </div>
     <div className="right">
         <div className="title">{movie.Title}</div>
         <div className="plot">{movie.Plot}</div>
         
     </div>
         

    
    </div>
  );
}
}

export default MovieCard;
