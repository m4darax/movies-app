export const navbarReducer = (state = [], action) => {

    switch (action.type) {
        case 'genderList':
            return [...action.payload];
        default:
            return state ;
    }

}