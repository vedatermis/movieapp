import { NEW_MOVIES_PENDING, NEW_MOVIES_FULFILLED, NEW_MOVIES_REJECTED } from "../Actions/newMovie";

const initialState = {
    fetching : false,
    error: { },
    movies: []
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
            movies: action.payload,
            fetching: false
        };

        case NEW_MOVIES_REJECTED:
        return{
            ...state,
            error: action.payload,
            fetching: false
        };

        default:
            return state;
    }
}