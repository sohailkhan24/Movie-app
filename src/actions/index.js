// {
//     type:'ADD_MOVIES'
    // user:[]
    //movies:[m1,m2,m3]
// }

import movies from "../reducers";

// {
//     type:'DECREASE_COUNT'
// }
//action time these variables are called

export const ADD_MOVIES='ADD_MOVIES';
//action creaters
export function addMovies (movies){
    return{
        type:ADD_MOVIES,
        movies
      }
}