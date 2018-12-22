import { FETCH_MOVIES_PENDING, FETCH_MOVIES_FULFILLED, FETCH_MOVIES_REJECTED } from "../Actions/movies";

const initialState = {
    fetching : false,
    error: { },
    movies: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES_PENDING:
        return {
            ...state,
            fetching: true
        };

        case FETCH_MOVIES_FULFILLED:
        return{
            ...state,
            movies: action.payload,
            fetching: false
        };

        case FETCH_MOVIES_REJECTED:
        return{
            ...state,
            error: action.payload,
            fetching: false
        };

        default:
            return state;
    }
}