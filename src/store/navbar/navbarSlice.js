import { createSlice } from "@reduxjs/toolkit";

export const navbarSlice = createSlice({
    name: 'navbar',
    initialState: {
        navbarGenders: [],
        gender: 'Categorias'
    },
    reducers: {
        onGenderList: (state, action) => {
            state.navbarGenders = [...action.payload];
        },
        onSelectedGender: (state, action) => {
            if( action.payload == 0 ) {
                state.gender = 'Categorias'
            } else {
                state.gender = state.navbarGenders.find( g => g.id == action.payload).name;
            }
        },
    }
})

export const  {
    onGenderList,
    onSelectedGender
} = navbarSlice.actions