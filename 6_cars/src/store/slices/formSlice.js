import { createSlice } from '@reduxjs/toolkit';
// importing action creator function.
import { addCar } from './carsSlice';

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

    extraReducers(builder) {
        // we want to watch for addCar sepefific action types, 2nd arg is mini reducer fn
        // addCar => equ to => 'cars/addCar
        builder.addCase(addCar, (state, action) => {
            state.name = '';
            state.cost = 0;
        })
    },
});

// two main exports, reducers 
export const { changeName, changeCost } = formSlice.actions;
// one combined single reducer. 
export const formReducer = formSlice.reducer;
