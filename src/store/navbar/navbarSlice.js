import { createSlice } from "@reduxjs/toolkit";



export const navbarSlice = createSlice({
    name: 'navbar',
    initialState: {
        navbarGenders: []
    },
    reducers: {
        onGenderList: (state, action) => {
            state.navbarGenders = [...action.payload]
        }
    }
})

export const  {
    onGenderList
} = navbarSlice.actions