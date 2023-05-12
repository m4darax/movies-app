export const moviesReducers = ( state = [], action) => {

    switch (action.type) {
        case 'loadMovies':
            return action.payload;
        default:
            return state;
    }
}