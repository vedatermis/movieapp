import { 
    NEW_MOVIES_PENDING, 
    NEW_MOVIES_FULFILLED, 
    NEW_MOVIES_REJECTED, 

    FETCH_MOVIE_PENDING, 
    FETCH_MOVIE_FULFILLED, 
    FETCH_MOVIE_REJECTED,

    UPDATE_MOVIE_PENDING, 
    UPDATE_MOVIE_FULFILLED, 
    UPDATE_MOVIE_REJECTED 
} from "../Actions/newMovie";

const initialState = {
    fetching : false,
    done: false,
    error: { },
    movie: { 
        fetching: false
    }

};

export default (state = initialState, action) => {
    switch (action.type) {
        case NEW_MOVIES_PENDING:
        return {
            ...state,
            fetching: true
        };

        case NEW_MOVIES_FULFILLED:
        return{
            ...state,
            fetching: false,
            done: true
        };

        case NEW_MOVIES_REJECTED:
        return{
            ...state,
            error: action.payload,
            fetching: false
        };


        //FETCH MOVIE

        case FETCH_MOVIE_PENDING:
        return {
            ...state,
            movie: {
                fetching: true
            }
        };

        case FETCH_MOVIE_FULFILLED:
        return{
            ...state,
            movie: {
                ...action.payload.movie,
                fetching: false

            }
        };

        case FETCH_MOVIE_REJECTED:
        return{
            ...state,            
            movie: {
                fetching: false
            }
        };
        

        // UPDATE MOVIE

        case UPDATE_MOVIE_PENDING:
        return {
            ...state,
            fetching: true
        };

        case UPDATE_MOVIE_FULFILLED:
        return{
            ...state,
            fetching: false,
            done: true
        };

        case UPDATE_MOVIE_REJECTED:
        return{
            ...state,
            error: action.payload,
            fetching: false
        };

        default:
            return state;
    }
}