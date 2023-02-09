import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
    // slice needs 3 parameters\
    name: 'form',
    initialState: {
        name: '',
        cost: 0
    },
    reducers: {
        changeName(state, action) {
            state.name = action.payload;
        },
        changeCost(state, action) {
            state.cost = action.payload;
        }
    },
});

// two main exports, reducers 
export const { changeName, changeCost } = formSlice.actions;
// one combined single reducer. 
export const formReducer = formSlice.reducer;
