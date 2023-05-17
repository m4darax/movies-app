export const moviesReducers = ( state = [], action) => {

    switch (action.type) {
        case 'loadMovies':
            return action.payload;

        case 'loadGender':
            return [...state.filter( g => g.genders.name == action.payload)]
        default:
            return state ;
    }
}