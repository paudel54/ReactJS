import { createSlice } from '@reduxjs/toolkit';
// step4, tell reducer watch for action type and perform state change
import { fetchUsers } from '../thunks/fetchUsers';

// adding state on user Slice, here list of user with data
const usersSlice = createSlice(
    // Big state object
    {
        name: 'users',
        initialState: {
            // this data would hold list of users as user data grows on 
            // all of this peice of value are defalut valur
            data: [],
            isLoading: false,
            error: null
        },
        reducers: {},
        // extraReducer ALLOW us to watches for additional action types! watch for action dispatch that
        // are not inheritantly attached to the slice. 
        extraReducers(builder) {
            // adding a case to watch for an action.
            builder.addCase(fetchUsers.pending, (state, action) => {
                // update our state object
                // to show the user what we are loading data
                state.isLoading = true;
            });
            // adding each case with a reducer function. reducer fn takes two arg state and action
            // action prop auto contains data as payload from fetchUsers.js as list of obj
            builder.addCase(fetchUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            });
            builder.addCase(fetchUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error;
            });
        }
    }
);
// export combined reducers, that is created when slice is made

export const usersReducer = usersSlice.reducer;