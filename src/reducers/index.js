import{ADD_MOVIES,ADD_FAVOURITE,REMOVE_FAVOURITE, SET_SHOW_FAVOURITE} from '../actions'
const initialMoviesState={
    list:[],
    favourites:[],
    showFavourite: false
}
export default function movies(state =initialMoviesState,action){
    // if(action.type === ADD_MOVIES){
    //     return{
    //         ...state,
    //         list:action.movies
    //     } 
    // } bro i checked from ur code too couldn't find any error ok some typo error is there may be
    // return state;
    switch(action.type){
        case ADD_MOVIES:
            return{
                ...state,
                list:action.movie
            }
        case ADD_FAVOURITE:
            return{
                ...state,
                favourites:[action.movie,...state.favourites]
            }
            case REMOVE_FAVOURITE:
                const filteredArray = state.favourites.filter(
                    movie => movie.Title !==action.movie.Title
                );
                return{
                    ...state,
                    favourites:filteredArray
                }
                case SET_SHOW_FAVOURITE:
                    return{
                        ...state,
                        showFavourite:action.val
                    }
           default:
            return state;   
    }
}